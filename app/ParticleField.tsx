"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

const TARGET_FPS = 15;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    let isVisible = true;

    const makeParticles = () => {
      const count = width < 720 ? 14 : Math.min(32, Math.max(20, Math.floor(width / 44)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.11,
        vy: (Math.random() - 0.5) * 0.11,
        radius: Math.random() * 1.15 + 0.45,
        alpha: Math.random() * 0.42 + 0.18,
      }));
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
    };

    const draw = (move: boolean) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#50f2ff";

      for (const particle of particles) {
        if (move) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -4) particle.x = width + 4;
          if (particle.x > width + 4) particle.x = -4;
          if (particle.y < -4) particle.y = height + 4;
          if (particle.y > height + 4) particle.y = -4;
        }

        context.globalAlpha = particle.alpha;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const animate = (time: number) => {
      if (isVisible && !document.hidden && time - lastFrame >= FRAME_INTERVAL) {
        lastFrame = time;
        draw(!mediaQuery.matches);
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      if (!document.hidden) lastFrame = 0;
    };

    const handleMotionPreference = () => draw(false);
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "80px" },
    );

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    mediaQuery.addEventListener("change", handleMotionPreference);
    resize();
    draw(false);
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
