
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
        viewBox: '0 0 320 512',
        path: 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z',
    },
    solid: {
        viewBox: '0 0 448 512',
        path: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z',
    },
};


type IconVariant = keyof typeof iconVariants;


interface IconProps {
    width: number | string;
    height: number | string;
    className?: string;
    color?: string;
    variant?: IconVariant;
}


export default function FacebookIcon({ 
        width = 24, 
        height = 24, 
        className, 
        variant = 'regular', 
        color 
    }: IconProps) {
    
    const selectedVariant = iconVariants[variant];

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox={selectedVariant.viewBox}
            width={width} 
            height={height}
            fill={color || 'currentColor'}
            className={className}
        >
            <path d={selectedVariant.path} />
        </svg>
    )
}