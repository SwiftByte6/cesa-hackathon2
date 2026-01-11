"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* -------------------- Mouse Position Hook -------------------- */
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

/* -------------------- Utils -------------------- */
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/* -------------------- Component -------------------- */
export const Particles = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);

  const mousePosition = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  /* -------------------- Effects -------------------- */
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }

    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [color]);

  useEffect(() => {
    handleMouseMove();
  }, [mousePosition]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  /* -------------------- Canvas Setup -------------------- */
  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current)
      return;

    circles.current.length = 0;

    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;

    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;

    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;

    context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  /* -------------------- Mouse -------------------- */
  const handleMouseMove = () => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const { w, h } = canvasSize.current;

    const x = mousePosition.x - rect.left - w / 2;
    const y = mousePosition.y - rect.top - h / 2;

    if (x > -w / 2 && x < w / 2 && y > -h / 2 && y < h / 2) {
      mouse.current.x = x;
      mouse.current.y = y;
    }
  };

  /* -------------------- Particles -------------------- */
  const createCircle = () => ({
    x: Math.random() * canvasSize.current.w,
    y: Math.random() * canvasSize.current.h,
    translateX: 0,
    translateY: 0,
    size: Math.random() * 2 + size,
    alpha: 0,
    targetAlpha: +(Math.random() * 0.6 + 0.1).toFixed(1),
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  });

  const rgb = hexToRgb(color);

  const drawCircle = (circle, update = false) => {
    if (!context.current) return;

    context.current.translate(circle.translateX, circle.translateY);
    context.current.beginPath();
    context.current.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    context.current.fillStyle = `rgba(${rgb.join(",")}, ${circle.alpha})`;
    context.current.fill();
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!update) circles.current.push(circle);
  };

  const clearCanvas = () => {
    context.current?.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h
    );
  };

  const drawParticles = () => {
    clearCanvas();
    for (let i = 0; i < quantity; i++) {
      drawCircle(createCircle());
    }
  };

  const remap = (value, a, b, c, d) =>
    Math.max(((value - a) * (d - c)) / (b - a) + c, 0);

  /* -------------------- Animation -------------------- */
  const animate = () => {
    clearCanvas();

    circles.current.forEach((circle, i) => {
      const edges = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];

      const closest = Math.min(...edges);
      const alphaFactor = remap(closest, 0, 20, 0, 1);

      circle.alpha =
        alphaFactor > 1
          ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
          : circle.targetAlpha * alphaFactor;

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;

      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) -
          circle.translateX) /
        ease;

      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) -
          circle.translateY) /
        ease;

      drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        drawCircle(createCircle());
      }
    });

    requestAnimationFrame(animate);
  };

  /* -------------------- Render -------------------- */
  return (
    <div
      ref={canvasContainerRef}
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};

Particles.displayName = "Particles";
