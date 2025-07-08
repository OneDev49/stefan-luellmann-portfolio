'use client';

import { useEffect, useRef } from 'react';

class Particle {
  canvasWidth: number;
  canvasHeight: number;
  size: number;
  opacity: number;
  color: string;
  x: number;
  y: number;
  velX: number;
  velY: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Appearance
    this.size = Math.random() * 3 + 2;
    this.opacity = Math.random() * 0.4 + 0.2;
    this.color = `rgba(180, 190, 210, ${this.opacity})`;

    // Position (pixels)
    this.x = Math.random() * this.canvasWidth;
    this.y = Math.random() * this.canvasHeight;

    // Velocity (pixels per second)
    const baseVerticalSpeedPercent = (Math.random() * 1.5 + 0.5) * -1;
    this.velY =
      (baseVerticalSpeedPercent / 100) * this.canvasHeight * (100 / 60);

    const baseHorizontalSpeedPercent = (Math.random() - 0.5) * 1;
    this.velX =
      (baseHorizontalSpeedPercent / 100) * this.canvasWidth * (100 / 60);
  }

  update(deltaTime: number) {
    // Update position
    this.y += this.velY * deltaTime;
    this.x += this.velX * deltaTime;

    // Boundary Check and Reset
    if (this.velY < 0 && this.y < -this.size) {
      this.y = this.canvasHeight + this.size;
      this.x = Math.random() * this.canvasWidth;
    }
    if (this.velX > 0 && this.x > this.canvasWidth + this.size) {
      this.x = -this.size;
    } else if (this.velX < 0 && this.x < -this.size) {
      this.x = this.canvasWidth + this.size;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    // Draw particles as circles
    context.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2); // Use size for diameter
    context.fill();
  }
}

const useParticleCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  particleCount: number
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let allParticles: Particle[] = [];
    let animationFrameID: number;

    // Setup und Resize Function
    const resizeCanvasAndCreateParticles = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      allParticles = [];
      const count = particleCount;

      if (canvas.width > 0 && canvas.height > 0) {
        for (let i = 0; i < count; i++) {
          allParticles.push(new Particle(canvas.width, canvas.height));
        }
      }
    };

    // Main Animation Loop
    let lastTimestamp = 0;
    const animationLoop = (timestamp: number) => {
      if (lastTimestamp === 0) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      allParticles.forEach((particle) => {
        particle.update(deltaTime);
        particle.draw(ctx);
      });

      animationFrameID = requestAnimationFrame(animationLoop);
    };

    // Main Animation Loop
    resizeCanvasAndCreateParticles();
    animationFrameID = requestAnimationFrame(animationLoop);

    // Event Listener for Resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvasAndCreateParticles, 250);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameID);
    };
  }, [canvasRef, particleCount]);
};

// React-Component
interface ParticleBackgroundProps {
  particleCount?: number;
}

export default function ParticleBackground({
  particleCount = 150,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticleCanvas(canvasRef, particleCount);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
