/**
 * @license
 * SVG Code by:
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free
 * Copyright 2025 Fonticons, Inc.
 *
 * For more information, check the LICENSE.txt of the Repository
 */

const iconVariants = {
  regular: {
    viewBox: '0 0 512 512',
    path: 'M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z',
  },
  solid: {
    viewBox: '0 0 512 512',
    path: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
  },
};

type IconVariant = keyof typeof iconVariants;

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
  variant?: IconVariant;
}

export default function EnvelopeIcon({
  width = 24,
  height = 24,
  className,
  variant = 'regular',
  color,
}: IconProps) {
  const selectedVariant = iconVariants[variant];

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={selectedVariant.viewBox}
      width={width}
      height={height}
      fill={color || 'currentColor'}
      className={className}
    >
      <path d={selectedVariant.path} />
    </svg>
  );
}
