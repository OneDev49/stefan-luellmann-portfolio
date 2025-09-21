interface BlobTwoProps {
  className?: string;
}

export default function BlobTwo({ className }: BlobTwoProps) {
  return (
    <svg
      className={className}
      width='485'
      height='762'
      viewBox='0 0 485 762'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_3472_2795)'>
        <path
          d='M201.806 192.38C246.506 230.38 289.806 276.28 284.506 316.98C279.206 357.68 225.206 392.98 180.606 437.78C135.906 482.68 100.606 536.98 47.5057 554.68C-5.49434 572.28 -76.1943 553.38 -101.194 508.58C-126.194 463.68 -105.494 392.98 -94.9943 332.78C-84.4943 272.58 -84.2943 222.78 -59.2943 184.78C-34.2943 146.78 15.5057 120.58 63.3057 122.48C111.206 124.28 157.106 154.38 201.806 192.38Z'
          fill='#002A52'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3472_2795'
          x='-313.047'
          y='-77.6172'
          width='797.992'
          height='838.82'
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
            result='effect1_foregroundBlur_3472_2795'
          />
        </filter>
      </defs>
    </svg>
  );
}
