interface BackgroundShapeTwoProps {
  className?: string;
}

export default function BackgroundShapeTwo({
  className,
}: BackgroundShapeTwoProps) {
  return (
    <svg
      width='175'
      height='449'
      viewBox='0 0 175 449'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='60.7231'
        cy='169.176'
        r='16.3794'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <circle
        cx='122.35'
        cy='29.9746'
        r='28.2559'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <circle
        cx='164.956'
        cy='224.089'
        r='8.65894'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <path
        d='M80.1991 424.837L24.0228 368.661L100.762 348.098L80.1991 424.837Z'
        stroke='#00E6FF'
        strokeWidth='2'
      />
    </svg>
  );
}
