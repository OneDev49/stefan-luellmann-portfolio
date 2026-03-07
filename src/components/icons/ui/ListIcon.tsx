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
    viewBox: '0 0 512 512',
    path: 'M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z',
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

export default function ListIcon({
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
