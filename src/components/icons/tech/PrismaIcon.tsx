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

export default function PrismaIcon({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 42 50'
      fill='none'
      className={className}
    >
      <path
        d='M41.0808 38.0067L23.9337 1.5924C23.4997 0.679411 22.6 0.0778838 21.5905 0.0256404C20.5786 -0.0421579 19.613 0.458428 19.0851 1.32442L0.487222 31.4468C-0.0901415 32.3754 -0.077994 33.5542 0.518383 34.4706L9.61106 48.5515C10.3175 49.637 11.6539 50.1285 12.8954 49.7593L39.2822 41.9542C40.0861 41.7191 40.7486 41.1472 41.0983 40.3862C41.4432 39.6288 41.4373 38.758 41.0821 38.0055L41.0808 38.0067ZM37.2418 39.5685L14.851 46.1895C14.168 46.3927 13.5124 45.8006 13.6545 45.1114L21.654 6.80744C21.8036 6.09075 22.7933 5.97732 23.1061 6.64042L37.9149 38.0878C38.0474 38.3714 38.049 38.6988 37.9193 38.9837C37.7895 39.2685 37.5415 39.4823 37.2406 39.5685H37.2418Z'
        fill='#fff'
      />
    </svg>
  );
}
