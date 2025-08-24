"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawAnimatedShapes = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mainGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      mainGradient.addColorStop(0, "rgb(0, 0, 0)"); // Pure black at top
      mainGradient.addColorStop(0.2, "rgb(5, 8, 20)"); // Very dark blue-black
      mainGradient.addColorStop(0.4, "rgb(8, 12, 30)"); // Dark blue-black
      mainGradient.addColorStop(0.6, "rgb(12, 18, 45)"); // Deep blue
      mainGradient.addColorStop(0.8, "rgb(15, 25, 60)"); // Medium blue
      mainGradient.addColorStop(1, "rgb(20, 30, 75)"); // Brighter blue at bottom

      ctx.fillStyle = mainGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 50; i++) {
        const x =
          canvas.width * (i * 0.1 + 0.1) +
          Math.sin(time * 0.0008 + i * 0.5) * 200;
        const y =
          canvas.height * (i * 0.02 + 0.1) +
          Math.cos(time * 0.0006 + i * 0.3) * 150;
        const size = 2 + Math.sin(time * 0.001 + i) * 1;
        const opacity = 0.3 + Math.sin(time * 0.0012 + i) * 0.2;

        ctx.beginPath();
        ctx.arc(x % canvas.width, y % canvas.height, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 150, 255, ${opacity})`;
        ctx.fill();
      }

      const meshSize = 80;
      const offsetX = (time * 0.02) % meshSize;
      const offsetY = (time * 0.015) % meshSize;

      ctx.strokeStyle = "rgba(40, 60, 120, 0.06)";
      ctx.lineWidth = 1;

      for (let x = -offsetX; x < canvas.width + meshSize; x += meshSize) {
        for (let y = -offsetY; y < canvas.height + meshSize; y += meshSize) {
          const waveX = Math.sin(time * 0.001 + x * 0.01) * 20;
          const waveY = Math.cos(time * 0.0008 + y * 0.01) * 15;

          ctx.beginPath();
          ctx.moveTo(x + waveX, y + waveY);
          ctx.lineTo(x + meshSize * 0.4 + waveX, y + meshSize * 0.4 + waveY);
          ctx.stroke();
        }
      }

      for (let i = 0; i < 4; i++) {
        const x =
          canvas.width * (0.2 + i * 0.2) +
          Math.sin(time * 0.0004 + i * 2) * 300;
        const y =
          canvas.height * (0.3 + i * 0.15) +
          Math.cos(time * 0.0003 + i * 1.5) * 200;
        const size = 200 + Math.sin(time * 0.0006 + i) * 80;
        const opacity = 0.04 + Math.sin(time * 0.0008 + i) * 0.02;

        const orb = ctx.createRadialGradient(x, y, 0, x, y, size);
        orb.addColorStop(0, `rgba(60, 90, 180, ${opacity})`);
        orb.addColorStop(0.3, `rgba(30, 50, 120, ${opacity * 0.7})`);
        orb.addColorStop(0.7, `rgba(10, 20, 60, ${opacity * 0.3})`);
        orb.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = orb;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (Math.random() < 0.005) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height * 0.3;
        const length = 100 + Math.random() * 200;

        const starGradient = ctx.createLinearGradient(
          startX,
          startY,
          startX + length,
          startY + length * 0.5
        );
        starGradient.addColorStop(0, "rgba(150, 200, 255, 0.8)");
        starGradient.addColorStop(0.5, "rgba(100, 150, 255, 0.4)");
        starGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.strokeStyle = starGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + length, startY + length * 0.5);
        ctx.stroke();
      }

      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.6, "rgba(0, 0, 0, 0.1)");
      vignette.addColorStop(0.8, "rgba(0, 0, 0, 0.3)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.6)");

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      timeRef.current += 16;
      drawAnimatedShapes(timeRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
