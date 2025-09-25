interface BackgroundBlobProps {
  className?: string;
}

export default function BackgroundBlob({ className }: BackgroundBlobProps) {
  return (
    <svg
      width='1440'
      height='763'
      viewBox='0 0 1440 763'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <g filter='url(#filter0_f_3545_1806)'>
        <path
          d='M1202.14 368.399L700.289 562.09L304.468 341.386L151.294 198.419L264.997 -40.4986L742.331 -28.1488L1077.16 -40.4987L1249.34 150.127L1202.14 368.399Z'
          fill='#00305E'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3545_1806'
          x='-48.7031'
          y='-240.5'
          width='1498.05'
          height='1002.59'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='100'
            result='effect1_foregroundBlur_3545_1806'
          />
        </filter>
      </defs>
    </svg>
  );
}
