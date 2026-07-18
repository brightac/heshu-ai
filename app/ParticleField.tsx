"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: "cyan" | "blue" | "mint";
  beacon: boolean;
  phase: number;
};

const TARGET_FPS = 20;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const CONNECTION_DISTANCE = 118;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    let inViewport = true;
    let running = false;

    const colorFor = (particle: Particle) => {
      if (particle.color === "blue") return "#4b7cff";
      if (particle.color === "mint") return "#8dffda";
      return "#50f2ff";
    };

    const makeParticles = () => {
      const count = width < 720 ? 22 : Math.min(46, Math.max(30, Math.floor(width / 32)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.55 + 0.7,
        alpha: Math.random() * 0.38 + 0.5,
        color: index % 9 === 0 ? "mint" : index % 3 === 0 ? "blue" : "cyan",
        beacon: index < (width < 720 ? 2 : 4),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (move: boolean, time: number) => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
            const distance = Math.sqrt(distanceSquared);
            context.globalAlpha = (1 - distance / CONNECTION_DISTANCE) * 0.34;
            context.strokeStyle = i % 3 === 0 ? "#4b7cff" : "#50f2ff";
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        if (move) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        const color = colorFor(particle);
        if (particle.beacon) {
          const pulse = 7 + Math.sin(time / 720 + particle.phase) * 3;
          context.globalAlpha = 0.22;
          context.strokeStyle = color;
          context.lineWidth = 1;
          context.beginPath();
          context.arc(particle.x, particle.y, pulse, 0, Math.PI * 2);
          context.stroke();
        }

        context.globalAlpha = particle.alpha;
        context.fillStyle = color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const animate = (time: number) => {
      if (!running) return;
      if (time - lastFrame >= FRAME_INTERVAL) {
        lastFrame = time;
        draw(true, time);
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
    };

    const start = () => {
      if (running || motionPreference.matches || document.hidden || !inViewport) return;
      running = true;
      lastFrame = 0;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      makeParticles();
      draw(false, performance.now());
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotionPreference = () => {
      if (motionPreference.matches) {
        stop();
        draw(false, performance.now());
      } else {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        if (inViewport) start();
        else stop();
      },
      { rootMargin: "100px" },
    );

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    motionPreference.addEventListener("change", handleMotionPreference);
    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      motionPreference.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
