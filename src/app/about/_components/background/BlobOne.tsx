interface BlobOneProps {
  className?: string;
}

export default function BlobOne({ className }: BlobOneProps) {
  return (
    <svg
      className={className}
      width='520'
      height='543'
      viewBox='0 0 520 543'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_3472_2796)'>
        <path
          d='M443.964 318.364C389.01 338.909 327.836 354.384 294.866 329.94C261.895 305.496 257.35 241.142 239.932 180.374C222.474 119.47 192.229 62.1997 202.62 7.20033C213.05 -47.663 263.979 -100.217 315.282 -100.244C366.673 -100.221 418.351 -47.7202 465.823 -9.24046C513.295 29.2393 556.697 53.659 577.718 93.9963C598.74 134.334 597.38 190.589 572.449 231.416C547.557 272.38 498.919 297.819 443.964 318.364Z'
          fill='#004474'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_3472_2796'
          x='0.5'
          y='-300.242'
          width='791.906'
          height='842.688'
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
            result='effect1_foregroundBlur_3472_2796'
          />
        </filter>
      </defs>
    </svg>
  );
}
