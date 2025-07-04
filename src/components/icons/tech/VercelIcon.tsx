/**
 * @license
 * SVG Code by:
 * gilbarbara - https://github.com/gilbarbara/logos
 * License - CC0-1.0 license
 * Copyright 2025 gilbarbara
 *
 * For more information, check the LICENSE.txt of the Repository
 */

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function VercelIcon({
  width = 47,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 47 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M23.8281 0.0078125L46.9219 40.0078H0.734375L23.8281 0.0078125Z'
        fill='#fff'
      />
    </svg>
  );
}
