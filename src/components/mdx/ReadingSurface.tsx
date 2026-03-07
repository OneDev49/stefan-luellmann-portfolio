'use client';

import {
  fontSizeMap,
  useAccessibilityStore,
} from '@/store/useAccessibilityStore';
import { useEffect, useState } from 'react';

interface ReadingSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function ReadingSurface({
  children,
  className,
}: ReadingSurfaceProps) {
  const fontSize = useAccessibilityStore((state) => state.fontSize);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeFontSize = mounted
    ? fontSizeMap[fontSize]
    : fontSizeMap['normal'];

  return (
    <div
      className={className}
      style={{
        fontSize: activeFontSize,
        transition: 'font-size 0.2s ease',
      }}
    >
      {children}
    </div>
  );
}
