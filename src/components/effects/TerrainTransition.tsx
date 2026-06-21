'use client';

import { useEffect, useRef, useState } from 'react';

interface TerrainTransitionProps {
  color?: string | { from: string; to: string };
  layerCount?: number;
  height?: number;
  speed?: number;
  position?: 'top' | 'bottom';
  className?: string;
}

function hexToRgba(hex: string): [number, number, number, number] {
  const c = hex.replace('#', '');
  if (c.length === 8) {
    return [
      parseInt(c.slice(0, 2), 16),
      parseInt(c.slice(2, 4), 16),
      parseInt(c.slice(4, 6), 16),
      parseInt(c.slice(6, 8), 16) / 255,
    ];
  }
  const int = parseInt(c, 16);
  return [(int >> 16) & 0xff, (int >> 8) & 0xff, int & 0xff, 1];
}

function darken(
  r: number,
  g: number,
  b: number,
  a: number,
  amount: number
): string {
  const d = (v: number) => Math.max(0, Math.round(v * (1 - amount)));
  return `rgba(${d(r)},${d(g)},${d(b)},${a.toFixed(3)})`;
}

function noise(x: number, seed: number): number {
  return (
    Math.sin(x * 0.031 + seed) * 0.5 +
    Math.sin(x * 0.071 + seed * 1.7 + 1.3) * 0.28 +
    Math.sin(x * 0.153 + seed * 0.5 + 2.6) * 0.14 +
    Math.sin(x * 0.312 + seed * 2.1 + 0.7) * 0.08
  );
}

interface LayerDef {
  speed: number;
  heightRatio: number;
  roughness: number;
  tPos: number;
}

function buildLayerDefs(count: number, speedMultiplier: number): LayerDef[] {
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0 : i / (count - 1);
    return {
      speed: (0.05 + t * 0.18) * speedMultiplier,
      heightRatio: 0.2 + t * 0.56,
      roughness: 0.68 - t * 0.38,
      tPos: t,
    };
  });
}

class TerrainRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private offsets: number[];
  private rafId: number | null = null;
  private W = 0;
  private H = 0;
  private dpr = 1;

  public colorFrom: [number, number, number, number] = [0, 12, 58, 1];
  public colorTo: [number, number, number, number] = [0, 12, 58, 1];
  public layers: LayerDef[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas context unavailable');
    this.ctx = ctx;
    this.offsets = [];
    this.resize();
  }

  updateLayers(layers: LayerDef[]) {
    const prev = this.offsets;
    this.offsets = layers.map((_, i) =>
      prev[i] !== undefined ? prev[i] : i * 137.5
    );
    this.layers = layers;
  }

  resize() {
    this.dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.W = rect.width;
    this.H = rect.height;
    this.canvas.width = this.W * this.dpr;
    this.canvas.height = this.H * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  private drawLayer(layer: LayerDef, offset: number) {
    const { W, H, ctx } = this;
    const baseY = H * layer.heightRatio;
    const amp = H * layer.roughness * 0.18;
    const step = 2;

    const darkenAmt = (1 - layer.tPos) * 0.45;

    const [r1, g1, b1, a1] = this.colorFrom;
    const [r2, g2, b2, a2] = this.colorTo;

    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, darken(r1, g1, b1, a1, darkenAmt));
    grad.addColorStop(1, darken(r2, g2, b2, a2, darkenAmt));

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, H);

    for (let x = 0; x <= W; x += step) {
      const n = noise(x + offset, offset * 0.01);
      const y = baseY + n * amp;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();
  }

  private tick = () => {
    const { ctx, W, H } = this;
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < this.layers.length; i++) {
      this.offsets[i] = (this.offsets[i] ?? i * 137.5) + this.layers[i].speed;
      this.drawLayer(this.layers[i], this.offsets[i]);
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  start() {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(this.tick);
  }

  stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}

const TerrainTransition: React.FC<TerrainTransitionProps> = ({
  color = '#000c3a',
  layerCount = 4,
  height = 220,
  speed = 4,
  position = 'bottom',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<TerrainRenderer | null>(null);
  const [mounted, setMounted] = useState(false);

  const colorFrom = typeof color === 'string' ? color : color.from;
  const colorTo = typeof color === 'string' ? color : color.to;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new TerrainRenderer(canvas);
    rendererRef.current = renderer;

    const handleResize = () => renderer.resize();
    window.addEventListener('resize', handleResize);
    renderer.start();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.stop();
    };
  }, []);

  useEffect(() => {
    const renderer = rendererRef.current;
    if (!renderer) return;
    renderer.colorFrom = hexToRgba(colorFrom);
    renderer.colorTo = hexToRgba(colorTo);
    const count = Math.max(2, Math.min(6, layerCount));
    renderer.updateLayers(buildLayerDefs(count, speed));
  }, [colorFrom, colorTo, layerCount, speed]);

  const anchorStyle: React.CSSProperties =
    position === 'top' ? { top: `-${height}px` } : { bottom: 0 };

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        visibility: mounted ? 'visible' : 'hidden',
        ...anchorStyle,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default TerrainTransition;
