interface BackgroundShapeOneProps {
  className?: string;
}

export default function BackgroundShapeOne({
  className,
}: BackgroundShapeOneProps) {
  return (
    <svg
      width='234'
      height='661'
      viewBox='0 0 234 661'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='-92.3984'
        y='-11.4373'
        width='300.204'
        height='40.2426'
        rx='20.1213'
        transform='rotate(45 -92.3984 -11.4373)'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <rect
        x='68.0703'
        y='531.602'
        width='52.4468'
        height='52.4468'
        transform='rotate(45 68.0703 531.602)'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <rect
        x='68.0703'
        y='541.149'
        width='38.9416'
        height='38.9416'
        transform='rotate(45 68.0703 541.149)'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <circle
        cx='146.624'
        cy='367.749'
        r='24.3345'
        stroke='#00E6FF'
        strokeWidth='2'
      />
      <circle
        cx='218.297'
        cy='645.059'
        r='14.5864'
        stroke='#00E6FF'
        strokeWidth='2'
      />
    </svg>
  );
}
