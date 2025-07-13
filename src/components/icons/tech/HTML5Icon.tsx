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

export default function HTML5Icon({
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
        d='M255.571 0.5L232.329 260.86L127.86 289.822L23.6775 260.901L0.460938 0.5H255.571Z'
        fill='#E44D26'
      />
      <path
        d='M128.016 267.686L212.432 244.282L232.293 21.793H128.016V267.686Z'
        fill='#F16529'
      />
      <path
        d='M82.8329 85.6679H128.013V53.7305H47.9297L48.6942 62.2987L56.5437 150.309H128.013V118.372H85.7516L82.8329 85.6679Z'
        fill='#EBEBEB'
      />
      <path
        d='M90.0363 166.277H57.9766L62.4509 216.423L127.872 234.584L128.019 234.544V201.316L127.879 201.353L92.3101 191.749L90.0363 166.277Z'
        fill='#EBEBEB'
      />
      <path
        d='M127.906 150.308H167.233L163.526 191.728L127.906 201.342V234.568L193.379 216.423L193.859 211.027L201.364 126.947L202.143 118.371H127.906V150.308Z'
        fill='#fff'
      />
      <path
        d='M127.906 85.5898V85.6679H205.049L205.69 78.4893L207.145 62.2987L207.909 53.7305H127.906V85.5898Z'
        fill='#fff'
      />
    </svg>
  );
}
