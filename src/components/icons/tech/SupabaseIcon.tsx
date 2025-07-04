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

export default function SupabaseIcon({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 50 51'
      fill='none'
      className={className}
    >
      <path
        d='M28.8404 49.7395C27.563 51.3481 24.973 50.4668 24.9422 48.4128L24.4922 18.3711H44.6922C48.351 18.3711 50.3915 22.597 48.1164 25.4625L28.8404 49.7395Z'
        fill='url(#paint0_linear_3000_168)'
      />
      <path
        d='M28.8404 49.7395C27.563 51.3481 24.973 50.4668 24.9422 48.4128L24.4922 18.3711H44.6922C48.351 18.3711 50.3915 22.597 48.1164 25.4625L28.8404 49.7395Z'
        fill='url(#paint1_linear_3000_168)'
        fillOpacity='0.2'
      />
      <path
        d='M20.6231 1.40112C21.9005 -0.207653 24.4905 0.67384 24.5212 2.72783L24.7185 32.7695H4.77126C1.11238 32.7695 -0.92824 28.5436 1.34696 25.6781L20.6231 1.40112Z'
        fill='#3ECF8E'
      />
      <defs>
        <linearGradient
          id='paint0_linear_3000_168'
          x1='17.4348'
          y1='16.2981'
          x2='42.4292'
          y2='34.416'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#249361' />
          <stop offset='1' stopColor='#3ECF8E' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3000_168'
          x1='40.2143'
          y1='1.79291'
          x2='62.0582'
          y2='22.4985'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
