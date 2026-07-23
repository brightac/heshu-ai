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
  comet: boolean;
  phase: number;
};

type MathFragment = {
  x: number;
  y: number;
  vx: number;
  alpha: number;
  size: number;
  text: string;
  phase: number;
};

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const CONNECTION_DISTANCE = 138;
const FORMULAS = [
  "P(H|E)",
  "P(E|H)",
  "P(H)",
  "LR(E)",
  "Δp +4.3%",
  "37% → 43%",
  "BRIER ↓",
  "CALIBRATED",
  "Σ wᵢpᵢ",
  "AI × SIGNAL",
  "± σ",
  "E₁  E₂  E₃",
];

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let particles: Particle[] = [];
    let fragments: MathFragment[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    let inViewport = true;
    let running = false;

    const colorFor = (particle: Particle) => {
      if (particle.color === "blue") return "#ffa84b";
      if (particle.color === "mint") return "#ffe48d";
      return "#ffc550";
    };

    const makeParticles = () => {
      const count = width < 720 ? 42 : Math.min(84, Math.max(54, Math.floor(width / 19)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 0.42 + 0.2,
        vy: (Math.random() - 0.5) * 0.08,
        radius: Math.random() * 1.55 + 0.7,
        alpha: Math.random() * 0.38 + 0.5,
        color: index % 9 === 0 ? "mint" : index % 3 === 0 ? "blue" : "cyan",
        beacon: index < (width < 720 ? 4 : 8),
        comet: index < (width < 720 ? 5 : 11),
        phase: Math.random() * Math.PI * 2,
      }));

      const fragmentCount = width < 720 ? 7 : 15;
      fragments = Array.from({ length: fragmentCount }, (_, index) => ({
        x: Math.random() * width,
        y: height * (0.1 + Math.random() * 0.78),
        vx: Math.random() * 0.32 + 0.18,
        alpha: Math.random() * 0.12 + 0.1,
        size: Math.random() * 4 + (index % 4 === 0 ? 13 : 9),
        text: FORMULAS[index % FORMULAS.length],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (move: boolean, time: number) => {
      context.clearRect(0, 0, width, height);

      for (let track = 0; track < 3; track += 1) {
        const baseline = height * (0.25 + track * 0.2);
        const amplitude = 12 + track * 5;
        context.globalAlpha = 0.08 + track * 0.018;
        context.strokeStyle = track === 1 ? "#ffa84b" : "#ffc550";
        context.lineWidth = track === 0 ? 1.1 : 0.7;
        context.beginPath();
        for (let x = -20; x <= width + 20; x += 12) {
          const y = baseline
            + Math.sin(x * (0.009 + track * 0.002) - time * (0.00065 + track * 0.00014)) * amplitude
            + Math.sin(x * 0.0028 + time * 0.00031) * 9;
          if (x === -20) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }

      for (const fragment of fragments) {
        if (move) {
          fragment.x += fragment.vx;
          if (fragment.x > width + 130) fragment.x = -160;
        }
        const floatY = fragment.y + Math.sin(time / 1200 + fragment.phase) * 5;
        const liveText = fragment.text === "37% → 43%"
          ? `${(42 + Math.sin(time / 1500 + fragment.phase) * 7).toFixed(1)}%`
          : fragment.text;
        context.globalAlpha = fragment.alpha;
        context.fillStyle = fragment.text.includes("AI") ? "#ffe48d" : fragment.text.includes("Δ") ? "#ffb37c" : "#e7c178";
        context.font = `500 ${fragment.size}px monospace`;
        context.fillText(liveText, fragment.x, floatY);
      }

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
            context.strokeStyle = i % 3 === 0 ? "#ffa84b" : "#ffc550";
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
        if (particle.comet) {
          const trail = 30 + Math.sin(time / 900 + particle.phase) * 12;
          context.globalAlpha = particle.alpha * 0.42;
          context.strokeStyle = color;
          context.lineWidth = particle.radius * 0.7;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(particle.x - trail, particle.y - particle.vy * 42);
          context.stroke();
        }

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
