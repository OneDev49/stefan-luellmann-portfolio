/**
 * @license
 * SVG Code by:
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free
 * Copyright 2025 Fonticons, Inc.
 *
 * For more information, check the LICENSE.txt of the Repository
 */

const iconVariants = {
  solid: {
    viewBox: '0 0 448 512',
    path: 'M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z',
  },
};

type IconVariant = keyof typeof iconVariants;

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  variant?: IconVariant;
}

export default function AnglesUpIcon({
  width = 24,
  height = 24,
  className,
  variant = 'solid',
  color,
}: IconProps) {
  const selectedVariant = iconVariants[variant];

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={selectedVariant.viewBox}
      width={width}
      height={height}
      fill={color || 'currentColor'}
      className={className}
    >
      <path d={selectedVariant.path} />
    </svg>
  );
}
