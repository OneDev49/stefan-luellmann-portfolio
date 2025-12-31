'use client';

import { InteractiveGrid } from './InteractiveGrid';

interface PerspectiveGridProps {
  variant?: 'left' | 'right' | 'hallway';
}

export function PerspectiveGrid({ variant = 'hallway' }: PerspectiveGridProps) {
  return (
    <div className='absolute inset-0 overflow-hidden [perspective:1000px] pointer-events-none'>
      {(variant === 'left' || variant === 'hallway') && (
        <div className='absolute left-0 -top-[10%] -bottom-[10%] w-[50%] origin-left [transform:rotateY(25deg)] [mask-image:linear-gradient(to_right,black,transparent)]'>
          <InteractiveGrid
            gridColor='rgb(39 39 42)'
            highlightColor='#3b82f6'
            fadeDuration={2500}
            autoPulse={true}
          />
        </div>
      )}

      {(variant === 'right' || variant === 'hallway') && (
        <div className='absolute right-0 -top-[10%] -bottom-[10%] w-[50%] origin-right [transform:rotateY(-25deg)] [mask-image:linear-gradient(to_left,black,transparent)]'>
          <InteractiveGrid
            gridColor='rgb(39 39 42)'
            highlightColor='#3b82f6'
            fadeDuration={2500}
            autoPulse={true}
          />
        </div>
      )}
    </div>
  );
}
