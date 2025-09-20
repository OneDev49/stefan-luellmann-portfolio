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

export default function ZodIcon({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 256 203'
      fill='none'
      className={className}
    >
      <defs>
        <filter
          id='b'
          width='105.2%'
          height='106.5%'
          x='-2.2%'
          y='-2.8%'
          filterUnits='objectBoundingBox'
        >
          <feOffset
            dx='1'
            dy='1'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feGaussianBlur
            in='shadowOffsetOuter1'
            result='shadowBlurOuter1'
            stdDeviation='2'
          />
          <feColorMatrix
            in='shadowBlurOuter1'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0'
          />
        </filter>
        <path
          d='M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z'
          id='a'
        />
      </defs>
      <g fillRule='nonzero' transform='translate(2 1.51)'>
        <path
          d='M58.816 12.522h136.278l39.933 41.691-112.989 126.553L16.957 54.213z'
          fill='#18253F'
        />
        <path
          d='M149.427 150.875H96.013l-24.124-29.534 68.364-.002.002-4.19h39.078z'
          fill='#274D82'
        />
        <path
          d='M223.56 42.323 76.178 127.414l-19.226-24.052 114.099-65.877-2.096-3.631 30.391-17.546zm-78.964-29.759L33.93 76.457 16.719 54.972l74.095-42.779z'
          fill='#274D82'
        />
        <use fill='#000' fillOpacity='1' filter='url(#b)' />
        <use fill='#3068B7' />
      </g>
    </svg>
  );
}
