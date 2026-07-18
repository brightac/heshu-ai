"use client";

import { useEffect, useRef } from "react";

type Language = "zh" | "en";

type SignalNode = {
  x: number;
  y: number;
  start: number;
  color: string;
};

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const CYCLE_DURATION = 12000;

const signalNodes: SignalNode[] = [
  { x: 0.14, y: 0.28, start: 0.12, color: "#50f2ff" },
  { x: 0.83, y: 0.22, start: 0.29, color: "#7b9aff" },
  { x: 0.12, y: 0.62, start: 0.46, color: "#ce72ff" },
  { x: 0.84, y: 0.66, start: 0.61, color: "#8dffda" },
];

const copy = {
  zh: {
    label: "ILLUSTRATIVE FORECAST / 概念演示",
    question: "某事件将在 Q4 前发生吗？",
    posterior: "POSTERIOR / 后验概率",
    confidence: "可信区间",
    evidence: ["基础比率", "新证据", "反向信号", "AI 集成"],
    signal: ["P(H) = 0.37", "LR(E₁) = 1.28×", "Δp = −4.3%", "3 AGENTS"],
    calibrated: "CALIBRATED",
    brier: "BRIER",
    identity: "FORECAST OPERATOR",
    disclaimer: "示意概率 · 非真实预测",
    sr: "一个概念性的贝叶斯预测动画：基础比率和新证据依次进入模型，后验概率随之更新，可信区间逐渐收窄。",
  },
  en: {
    label: "ILLUSTRATIVE FORECAST / CONCEPT DEMO",
    question: "Will an event occur before Q4?",
    posterior: "POSTERIOR PROBABILITY",
    confidence: "CONFIDENCE BAND",
    evidence: ["BASE RATE", "NEW EVIDENCE", "COUNTER SIGNAL", "AI ENSEMBLE"],
    signal: ["P(H) = 0.37", "LR(E₁) = 1.28×", "Δp = −4.3%", "3 AGENTS"],
    calibrated: "CALIBRATED",
    brier: "BRIER",
    identity: "FORECAST OPERATOR",
    disclaimer: "Synthetic values · not a real forecast",
    sr: "A conceptual Bayesian forecasting animation: a base rate and new evidence enter the model, updating the posterior probability while the confidence band narrows.",
  },
} as const;

function ease(value: number) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function mix(from: number, to: number, amount: number) {
  return from + (to - from) * ease(amount);
}

function forecastAt(progress: number) {
  if (progress < 0.12) return 37;
  if (progress < 0.26) return mix(37, 43.1, (progress - 0.12) / 0.14);
  if (progress < 0.43) return mix(43.1, 56.7, (progress - 0.26) / 0.17);
  if (progress < 0.58) return mix(56.7, 52.4, (progress - 0.43) / 0.15);
  if (progress < 0.73) return mix(52.4, 58.2, (progress - 0.58) / 0.15);
  return 58.2;
}

function cubicPoint(
  startX: number,
  startY: number,
  controlX: number,
  controlY: number,
  endX: number,
  endY: number,
  t: number,
) {
  const inverse = 1 - t;
  return {
    x: inverse * inverse * startX + 2 * inverse * t * controlX + t * t * endX,
    y: inverse * inverse * startY + 2 * inverse * t * controlY + t * t * endY,
  };
}

export function ForecastEngine({ language }: { language: Language }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const probabilityRef = useRef<HTMLElement>(null);
  const confidenceRef = useRef<HTMLElement>(null);
  const brierRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const words = copy[language];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    let cycleStart = performance.now();
    let running = false;
    let inViewport = true;
    let lastActiveNode = -1;

    const draw = (time: number, animate: boolean) => {
      const progress = animate ? ((time - cycleStart) % CYCLE_DURATION) / CYCLE_DURATION : 0.73;
      const probability = forecastAt(progress);
      const confidence = mix(14.8, 7.6, Math.min(progress / 0.73, 1));
      const brier = mix(0.141, 0.094, Math.min(progress / 0.73, 1));
      const centerX = width * 0.53;
      const centerY = height * 0.43;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      context.strokeStyle = "rgba(102, 223, 239, 0.09)";
      context.lineWidth = 1;
      for (let x = 0; x < width; x += 38) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += 38) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.globalCompositeOperation = "lighter";
      for (let ring = 0; ring < 3; ring += 1) {
        const radius = 66 + ring * 36;
        const rotation = time / (2400 + ring * 900) * (ring % 2 ? -1 : 1);
        context.strokeStyle = ring === 1 ? "rgba(110, 143, 255, 0.32)" : "rgba(80, 242, 255, 0.26)";
        context.lineWidth = ring === 0 ? 1.4 : 0.8;
        context.beginPath();
        context.ellipse(centerX, centerY, radius * 1.25, radius * 0.63, rotation, 0.34, Math.PI * 1.74);
        context.stroke();
      }

      let activeNode = -1;
      signalNodes.forEach((node, index) => {
        const startX = node.x * width;
        const startY = node.y * height;
        const controlX = (startX + centerX) / 2 + (index % 2 ? -32 : 32);
        const controlY = (startY + centerY) / 2 - 46;
        const local = Math.max(0, Math.min(1, (progress - node.start) / 0.13));
        if (progress >= node.start) activeNode = index;

        context.strokeStyle = index === 2 ? "rgba(206, 114, 255, 0.24)" : "rgba(80, 242, 255, 0.2)";
        context.lineWidth = 0.8;
        context.beginPath();
        context.moveTo(startX, startY);
        context.quadraticCurveTo(controlX, controlY, centerX, centerY);
        context.stroke();

        if (local > 0 && local < 1) {
          const packet = cubicPoint(startX, startY, controlX, controlY, centerX, centerY, ease(local));
          context.fillStyle = node.color;
          context.beginPath();
          context.arc(packet.x, packet.y, 3.2, 0, Math.PI * 2);
          context.fill();
          context.globalAlpha = 0.26;
          context.beginPath();
          context.arc(packet.x, packet.y, 10, 0, Math.PI * 2);
          context.strokeStyle = node.color;
          context.stroke();
          context.globalAlpha = 1;
        }
      });

      const graphLeft = width * 0.08;
      const graphRight = width * 0.92;
      const graphBase = height * 0.82;
      const graphHeight = height * 0.2;
      const mean = graphLeft + (graphRight - graphLeft) * (probability / 100);
      const sigma = (graphRight - graphLeft) * (confidence / 100) * 1.35;
      const fill = context.createLinearGradient(0, graphBase - graphHeight, 0, graphBase);
      fill.addColorStop(0, "rgba(80, 242, 255, 0.34)");
      fill.addColorStop(1, "rgba(75, 124, 255, 0.015)");

      context.beginPath();
      context.moveTo(graphLeft, graphBase);
      for (let x = graphLeft; x <= graphRight; x += 3) {
        const density = Math.exp(-0.5 * ((x - mean) / sigma) ** 2);
        context.lineTo(x, graphBase - density * graphHeight);
      }
      context.lineTo(graphRight, graphBase);
      context.closePath();
      context.fillStyle = fill;
      context.fill();

      context.beginPath();
      for (let x = graphLeft; x <= graphRight; x += 3) {
        const density = Math.exp(-0.5 * ((x - mean) / sigma) ** 2);
        const y = graphBase - density * graphHeight;
        if (x === graphLeft) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = "rgba(115, 244, 255, 0.82)";
      context.lineWidth = 1.5;
      context.stroke();

      context.globalCompositeOperation = "source-over";
      context.strokeStyle = "rgba(139, 180, 190, 0.22)";
      context.beginPath();
      context.moveTo(graphLeft, graphBase);
      context.lineTo(graphRight, graphBase);
      context.stroke();
      context.fillStyle = "rgba(139, 180, 190, 0.5)";
      context.font = "9px monospace";
      context.fillText("0%", graphLeft, graphBase + 16);
      context.fillText("50%", (graphLeft + graphRight) / 2 - 10, graphBase + 16);
      context.fillText("100%", graphRight - 24, graphBase + 16);

      if (probabilityRef.current) probabilityRef.current.textContent = probability.toFixed(1);
      if (confidenceRef.current) confidenceRef.current.textContent = `± ${confidence.toFixed(1)}%`;
      if (brierRef.current) brierRef.current.textContent = brier.toFixed(3);

      if (activeNode !== lastActiveNode) {
        nodeRefs.current.forEach((node, index) => {
          if (node) node.dataset.state = index === activeNode ? "active" : index < activeNode ? "used" : "waiting";
        });
        lastActiveNode = activeNode;
      }
    };

    const animate = (time: number) => {
      if (!running) return;
      if (time - lastFrame >= FRAME_INTERVAL) {
        lastFrame = time;
        draw(time, true);
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
      cycleStart = performance.now();
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
      draw(performance.now(), !motionPreference.matches);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotion = () => {
      if (motionPreference.matches) {
        stop();
        draw(performance.now(), false);
      } else start();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      if (inViewport) start();
      else stop();
    }, { rootMargin: "100px" });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    motionPreference.addEventListener("change", handleMotion);
    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      motionPreference.removeEventListener("change", handleMotion);
    };
  }, []);

  return (
    <figure className="forecast-engine" aria-label={words.sr}>
      <canvas ref={canvasRef} className="forecast-canvas" aria-hidden="true" />
      <div className="forecast-question">
        <span>{words.label}</span>
        <strong>{words.question}</strong>
      </div>

      <div className="forecast-readout" aria-hidden="true">
        <span>{words.posterior}</span>
        <div><strong ref={probabilityRef}>37.0</strong><b>%</b></div>
        <small>{words.confidence} <em ref={confidenceRef}>± 14.8%</em></small>
      </div>

      {signalNodes.map((node, index) => (
        <div
          className={`forecast-node forecast-node-${index + 1}`}
          data-state="waiting"
          key={words.evidence[index]}
          ref={(element) => { nodeRefs.current[index] = element; }}
          aria-hidden="true"
        >
          <span>0{index + 1}</span>
          <strong>{words.evidence[index]}</strong>
          <small>{words.signal[index]}</small>
        </div>
      ))}

      <div className="forecast-equation" aria-hidden="true">
        <span>P(H|E) ∝ P(E|H) · P(H)</span>
        <span>O(H|E) = O(H) × LR(E)</span>
      </div>

      <div className="forecast-score" aria-hidden="true">
        <span>{words.calibrated}</span>
        <strong>{words.brier} <em ref={brierRef}>0.141</em></strong>
      </div>

      <div className="forecast-identity" aria-hidden="true">
        <img src="/heshu-avatar.jpg" alt="" width="1024" height="1024" />
        <span>{words.identity}<strong>HESHU AI</strong></span>
      </div>

      <figcaption>{words.disclaimer}</figcaption>
    </figure>
  );
}
