'use client';

import { cn } from '@/lib/utilities';
import React, { useState, useRef, useEffect } from 'react';

interface InteractiveGridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  gridColor?: string;
  highlightColor?: string;
  fadeDuration?: number;
  showCoordinates?: boolean;
  autoPulse?: boolean;
  isInteractive?: boolean;
}

interface GridPoint {
  x: number;
  y: number;
  id: string;
}

export function InteractiveGrid({
  width = 40,
  height = 40,
  gridColor = '#1d1d1e',
  highlightColor = '#3b82f680',
  fadeDuration = 500,
  showCoordinates = false,
  autoPulse = false,
  isInteractive = true,
  className,
  ...props
}: InteractiveGridProps) {
  const [currentCell, setCurrentCell] = useState<GridPoint | null>(null);
  const [trail, setTrail] = useState<GridPoint[]>([]);

  const lastPosRef = useRef<string>('');
  const idCounterRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const generateUniqueId = (baseId: string) => {
    idCounterRef.current += 1;
    return `${baseId}-${idCounterRef.current}`;
  };

  const addToTrail = (cell: GridPoint) => {
    const trailId = generateUniqueId(cell.id);
    setTrail((prev) => [...prev, { ...cell, id: trailId }]);

    setTimeout(() => {
      setTrail((prev) => prev.filter((t) => t.id !== trailId));
    }, fadeDuration);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isInteractive) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellX = Math.floor(x / width) * width;
    const cellY = Math.floor(y / height) * height;
    const posId = `${cellX}-${cellY}`;

    if (lastPosRef.current === posId) return;

    if (currentCell) {
      addToTrail(currentCell);
    }

    const newCell = { x: cellX, y: cellY, id: posId };
    setCurrentCell(newCell);
    lastPosRef.current = posId;
  };

  const handleMouseLeave = () => {
    if (!isInteractive) return;

    if (currentCell) addToTrail(currentCell);
    setCurrentCell(null);
    lastPosRef.current = '';
  };

  // Auto pulse logic
  useEffect(() => {
    if (!autoPulse) return;

    const interval = setInterval(() => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const cols = Math.floor(rect.width / width);
      const rows = Math.floor(rect.height / height);

      // Random cell pulse
      const x = Math.floor(Math.random() * cols) * width;
      const y = Math.floor(Math.random() * rows) * height;
      const id = `${x}-${y}`;

      addToTrail({ x, y, id });
    }, 500);

    return () => clearInterval(interval);
  }, [width, height, autoPulse, fadeDuration]);

  return (
    <svg
      ref={svgRef}
      onMouseMove={isInteractive ? handleMouseMove : undefined}
      onMouseLeave={isInteractive ? handleMouseLeave : undefined}
      className={cn('absolute inset-0 h-full w-full', className)}
      {...props}
    >
      <defs>
        <pattern
          id='grid-pattern'
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={-1}
          y={-1}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill='none'
            stroke={gridColor}
            strokeWidth={1}
          />
        </pattern>
      </defs>

      <rect width='100%' height='100%' fill='url(#grid-pattern)' />

      {trail.map((cell) => (
        <rect
          key={cell.id}
          x={cell.x}
          y={cell.y}
          width={width}
          height={height}
          fill={highlightColor}
          stroke={highlightColor}
          strokeWidth={1}
          fillOpacity={0.2}
          className='animate-opacity-hide'
          style={{ animationDuration: `${fadeDuration}ms` }}
        />
      ))}

      {currentCell && (
        <g>
          <rect
            x={currentCell.x}
            y={currentCell.y}
            width={width}
            height={height}
            fill={highlightColor}
            stroke={highlightColor}
            strokeWidth={1}
            fillOpacity={0.2}
          />
          {showCoordinates && (
            <text
              x={currentCell.x + 4}
              y={currentCell.y + 12}
              fontSize='10'
              fill={highlightColor}
              className='font-mono opacity-80 select-none pointer-events-none'
            >
              {currentCell.x},{currentCell.y}
            </text>
          )}
        </g>
      )}
    </svg>
  );
}
