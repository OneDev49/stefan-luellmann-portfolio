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

export default function CSS3Icon({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 256 290'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M127.586 289.666L23.404 260.744L0.1875 0.34375H255.297L232.056 260.703L127.586 289.666Z'
        fill='#264DE4'
      />
      <path
        d='M212.159 244.126L232.02 21.6367H127.742V267.53L212.159 244.126Z'
        fill='#2965F1'
      />
      <path
        d='M53.4141 118.215L56.2765 150.152H127.745V118.215H53.4141Z'
        fill='#EBEBEB'
      />
      <path
        d='M47.6562 53.5742L50.5595 85.5116H127.739V53.5742H47.6562Z'
        fill='#EBEBEB'
      />
      <path
        d='M127.745 201.159L127.605 201.197L92.0367 191.592L89.7629 166.121H57.7031L62.1775 216.267L127.598 234.428L127.745 234.387V201.159Z'
        fill='#EBEBEB'
      />
      <path
        d='M201.87 118.216L207.636 53.5742H127.633V85.5116H172.635L169.729 118.216H127.633V150.152H166.96L163.253 191.572L127.633 201.186V234.413L193.106 216.267L193.586 210.871L201.091 126.792L201.87 118.216Z'
        fill='#fff'
      />
    </svg>
  );
}
