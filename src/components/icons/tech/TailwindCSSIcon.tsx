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

export default function TailwindCSSIcon({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 84 51'
      fill='none'
      className={className}
    >
      <path
        d='M42.3073 0.394531C31.1962 0.394531 24.2517 5.95009 21.474 17.0612C25.6406 11.5056 30.5017 9.42231 36.0573 10.8112C39.227 11.6036 41.4926 13.9032 44.0003 16.4487C48.0855 20.5953 52.8136 25.3945 63.1406 25.3945C74.2517 25.3945 81.1962 19.839 83.974 8.72786C79.8073 14.2834 74.9462 16.3668 69.3906 14.9779C66.2209 14.1854 63.9553 11.8859 61.4476 9.34036C57.3624 5.19376 52.6343 0.394531 42.3073 0.394531ZM21.474 25.3945C10.3628 25.3945 3.4184 30.9501 0.640625 42.0612C4.80729 36.5056 9.6684 34.4223 15.224 35.8112C18.3937 36.6036 20.6593 38.9032 23.167 41.4487C27.2522 45.5953 31.9803 50.3945 42.3073 50.3945C53.4184 50.3945 60.3628 44.839 63.1406 33.7279C58.974 39.2834 54.1128 41.3667 48.5573 39.9779C45.3875 39.1854 43.1219 36.8859 40.6142 34.3404C36.529 30.1938 31.801 25.3945 21.474 25.3945Z'
        fill='url(#paint0_linear_2999_161)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2999_161'
          x1='-230.841'
          y1='1600.39'
          x2='6966.36'
          y2='5750.13'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2298BD' />
          <stop offset='1' stopColor='#0ED7B5' />
        </linearGradient>
      </defs>
    </svg>
  );
}
