'use client';

import { useEffect, useRef } from 'react';

interface WaveConfig {
  color?: string;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  thickness?: number;
  height?: number;
  angle?: number;
  baseHeightRatio?: number;
  contain?: boolean;
  top?: string;
  bottom?: string;
  baseHeight?: number;
}

interface WaveTransitionProps {
  position: 'top' | 'bottom';
  positionOffset?: string;
  variant?: 'inner' | 'outer';
  color: string;
  config?: Partial<WaveConfig>;
  className?: string;
}

class HorizontalSingleWave {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: Required<WaveConfig>;
  private phaseOffset: number;
  private intendedTopBaseHeight: number = 0;
  private animationFrameId: number | null = null;

  constructor(canvas: HTMLCanvasElement, userConfig: Partial<WaveConfig> = {}) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Could not get canvas context');
    }

    this.ctx = context;

    const defaultConfig: Required<WaveConfig> = {
      color: 'rgba(0, 9, 46, 1)',
      amplitude: 20,
      frequency: 0.012,
      speed: 0.015,
      thickness: 150,
      height: 100,
      angle: 0,
      baseHeightRatio: 0.5,
      contain: true,
      top: '',
      bottom: '',
      baseHeight: 0,
    };

    this.config = { ...defaultConfig, ...userConfig } as Required<WaveConfig>;
    this.phaseOffset = Math.random() * Math.PI * 2;
    this.resize();
  }

  resize(): void {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.config.height;
    this._calculateIntendedBaseHeight();
  }

  private _calculateIntendedBaseHeight(): void {
    if (
      typeof this.config.baseHeight === 'number' &&
      this.config.baseHeight > 0
    ) {
      this.intendedTopBaseHeight = this.config.baseHeight;
    } else {
      const bandCenterY = this.canvas.height * this.config.baseHeightRatio;
      this.intendedTopBaseHeight = bandCenterY - this.config.thickness / 2;
    }
  }

  update(): void {
    this.phaseOffset += this.config.speed;
  }

  private _calculateWaveY(
    x: number,
    baselineY: number,
    amplitude: number
  ): number {
    const { frequency } = this.config;
    return baselineY + Math.sin(frequency * x + this.phaseOffset) * amplitude;
  }

  draw(): void {
    const { width, height } = this.canvas;
    const { color, angle, contain } = this.config;
    const ctx = this.ctx;

    let effectiveAmplitude = this.config.amplitude;
    let effectiveThickness = this.config.thickness;
    let adjustedTopBaseHeight = this.intendedTopBaseHeight;

    if (contain) {
      const totalRequiredHeight = effectiveThickness + 2 * effectiveAmplitude;

      if (totalRequiredHeight > height && height > 0) {
        const scaleRatio = height / totalRequiredHeight;
        effectiveAmplitude *= scaleRatio;
        effectiveThickness *= scaleRatio;
        adjustedTopBaseHeight = height / 2 - effectiveThickness / 2;
      } else if (totalRequiredHeight <= height) {
        const potentialMinY = adjustedTopBaseHeight - effectiveAmplitude;
        const potentialMaxY =
          adjustedTopBaseHeight + effectiveThickness + effectiveAmplitude;

        if (potentialMinY < 0) {
          adjustedTopBaseHeight -= potentialMinY;
        } else if (potentialMaxY > height) {
          adjustedTopBaseHeight -= potentialMaxY - height;
        }

        adjustedTopBaseHeight = Math.max(
          effectiveAmplitude,
          adjustedTopBaseHeight
        );
        adjustedTopBaseHeight = Math.min(
          height - effectiveThickness - effectiveAmplitude,
          adjustedTopBaseHeight
        );
      } else {
        adjustedTopBaseHeight = height / 2 - effectiveThickness / 2;
      }
    }

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    const centerX = width / 2;
    const centerY = height / 2;
    ctx.translate(centerX, centerY);

    const angleInRadians = (angle * Math.PI) / 180;
    ctx.rotate(angleInRadians);

    const drawWidth =
      width * 1.5 + height * Math.abs(Math.sin(angleInRadians)) * 1.5;
    const startX = -drawWidth / 2;
    const endX = drawWidth / 2;

    const baselineYInRotatedContext = adjustedTopBaseHeight - centerY;

    ctx.fillStyle = color;
    ctx.beginPath();

    const startTopY = this._calculateWaveY(
      startX,
      baselineYInRotatedContext,
      effectiveAmplitude
    );
    ctx.moveTo(startX, startTopY);

    const step = 2;

    for (let x = startX; x <= endX; x += step) {
      const topY = this._calculateWaveY(
        x,
        baselineYInRotatedContext,
        effectiveAmplitude
      );
      ctx.lineTo(x, topY);
    }

    const lastTopY = this._calculateWaveY(
      endX,
      baselineYInRotatedContext,
      effectiveAmplitude
    );
    ctx.lineTo(endX, lastTopY);

    for (let x = endX; x >= startX; x -= step) {
      const topY = this._calculateWaveY(
        x,
        baselineYInRotatedContext,
        effectiveAmplitude
      );
      const bottomY = topY + effectiveThickness;
      ctx.lineTo(x, bottomY);
    }

    const firstBottomY =
      this._calculateWaveY(
        startX,
        baselineYInRotatedContext,
        effectiveAmplitude
      ) + effectiveThickness;
    ctx.lineTo(startX, firstBottomY);

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate(): void {
    this.update();
    this.draw();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  stop(): void {
    if (this.animationFrameId != null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

const WaveTransition: React.FC<WaveTransitionProps> = ({
  position,
  positionOffset = '0px',
  variant = 'outer',
  color,
  config = {},
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveRef = useRef<HorizontalSingleWave | null>(null);

  const waveHeight = config.height || 100;

  useEffect(() => {
    if (!canvasRef.current) return;

    const waveConfig: Partial<WaveConfig> = {
      color,
      ...config,
    };

    const wave = new HorizontalSingleWave(canvasRef.current, waveConfig);
    waveRef.current = wave;

    const handleResize = () => {
      wave.resize();
      wave.draw();
    };

    window.addEventListener('resize', handleResize);
    wave.animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      wave.stop();
    };
  }, [color, config]);

  const canvasPosition =
    position === 'top'
      ? variant === 'outer'
        ? { top: 0 }
        : { bottom: 0 }
      : variant === 'outer'
      ? { bottom: 0 }
      : { top: 0 };

  const wrapperPosition =
    position === 'top' ? { top: positionOffset } : { bottom: positionOffset };

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: `${waveHeight / 2}px`,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        ...wrapperPosition,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          display: 'block',
          ...canvasPosition,
        }}
      />
    </div>
  );
};

export default WaveTransition;
