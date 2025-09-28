'use client';

import React, { useRef, useEffect, FC, CanvasHTMLAttributes } from 'react';

type Direction = 'left' | 'right';
type RGBColor = [number, number, number];

interface WaveSettings {
  waveCount: number;
  amplitude: number;
  baseSpeed: number;
  waveSpacing: number;
  baseColor: RGBColor;
  lineWidth: number;
  direction: Direction;
  leftOffset: number;
  rightOffset: number;
}

class WavesCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private settings: WaveSettings;
  private waves: ThinWave[] = [];
  private animationFrame: number | null = null;

  constructor(elm: HTMLCanvasElement, options: Partial<WaveSettings> = {}) {
    this.canvas = elm;
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas.');
    }
    this.ctx = context;

    this.settings = {
      waveCount: options.waveCount || 16,
      amplitude: options.amplitude || 50,
      baseSpeed: options.baseSpeed || 0.005,
      waveSpacing: options.waveSpacing || 30,
      baseColor: options.baseColor || [0, 178, 255],
      lineWidth: options.lineWidth || 1.5,
      direction: options.direction || 'left',
      leftOffset: options.leftOffset || 0,
      rightOffset: options.rightOffset || 0,
    };

    this.init();
  }

  private resizeCanvas = () => {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);

    const totalHeight =
      (this.settings.waveCount - 1) * this.settings.waveSpacing;
    const centerOffset = (rect.height - totalHeight) / 2;

    this.waves.forEach((wave) => {
      wave.yOffset = centerOffset + wave.index * this.settings.waveSpacing;
    });
  };

  private init() {
    window.addEventListener('resize', this.resizeCanvas);
    this.createWaves();
    this.resizeCanvas();
    this.animate();
  }

  private createWaves() {
    this.waves = [];
    for (let i = 0; i < this.settings.waveCount; i++) {
      this.waves.push(new ThinWave(i, this.settings));
    }
  }

  private animate = () => {
    const rect = this.canvas.getBoundingClientRect();
    this.ctx.clearRect(0, 0, rect.width, rect.height);

    for (const wave of this.waves) {
      wave.update();
      wave.draw(this.ctx, rect);
    }

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  public destroy() {
    window.removeEventListener('resize', this.resizeCanvas);
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.waves = [];
    this.animationFrame = null;
  }
}

class ThinWave {
  public index: number;
  public yOffset: number = 0;
  private phase: number;
  private settings: WaveSettings;
  private color: string;

  constructor(index: number, settings: WaveSettings) {
    this.index = index;
    this.phase = index * 0.3;
    this.settings = settings;

    const opacity = 1 - index / settings.waveCount;
    this.color = `rgba(${settings.baseColor.join(', ')}, ${opacity})`;
  }

  public draw(ctx: CanvasRenderingContext2D, rect: DOMRect) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.settings.lineWidth;

    const leftOffsetPx = (this.settings.leftOffset / 100) * rect.height;
    const rightOffsetPx = (this.settings.rightOffset / 100) * rect.height;
    const diffOffset = rightOffsetPx - leftOffsetPx;

    const firstY = this.calculateY(0, leftOffsetPx);
    ctx.moveTo(0, firstY);

    const step = Math.max(5, Math.min(20, Math.floor(rect.width / 100)));

    for (let x = step; x < rect.width; x += step) {
      const t = x / rect.width;
      const offset = leftOffsetPx + diffOffset * t;
      const y = this.calculateY(x, offset);
      ctx.lineTo(x, y);
    }

    const finalY = this.calculateY(rect.width, rightOffsetPx);
    ctx.lineTo(rect.width, finalY);

    ctx.stroke();
  }

  private calculateY(x: number, offset: number): number {
    return (
      this.yOffset +
      offset +
      Math.sin(x * 0.005 + this.phase) * this.settings.amplitude +
      Math.cos(x * 0.002 + this.phase) * this.settings.amplitude * 0.5
    );
  }

  public update() {
    const speed =
      this.settings.direction === 'right'
        ? -this.settings.baseSpeed
        : this.settings.baseSpeed;
    this.phase += speed;
  }
}

interface MultiThinWavesProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  waveCount?: number;
  amplitude?: number;
  baseSpeed?: number;
  waveSpacing?: number;
  baseColor?: RGBColor;
  lineWidth?: number;
  direction?: Direction;
  leftOffset?: number;
  rightOffset?: number;
}

const MultiThinWaves: FC<MultiThinWavesProps> = ({
  waveCount,
  amplitude,
  baseSpeed,
  waveSpacing,
  baseColor,
  lineWidth,
  direction,
  leftOffset,
  rightOffset,
  ...rest
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wavesInstance = useRef<WavesCanvas | null>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      wavesInstance.current = new WavesCanvas(canvasElement, {
        waveCount,
        amplitude,
        baseSpeed,
        waveSpacing,
        baseColor,
        lineWidth,
        direction,
        leftOffset,
        rightOffset,
      });
    }
    return () => {
      if (wavesInstance.current) {
        wavesInstance.current.destroy();
        wavesInstance.current = null;
      }
    };
  }, [
    waveCount,
    amplitude,
    baseSpeed,
    waveSpacing,
    baseColor,
    lineWidth,
    direction,
    leftOffset,
    rightOffset,
  ]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default MultiThinWaves;
