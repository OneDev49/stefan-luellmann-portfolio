
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


export default function NextJSIcon({ 
        width = 40, 
        height = 40, 
        className,
    }: IconProps) {
    

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            className={className}
        >
            <g clip-path="url(#clip0_2983_67)">
                <mask id="mask0_2983_67" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
                    <path 
                        d="M20.0781 40C31.1238 40 40.0781 31.0457 40.0781 20C40.0781 8.9543 31.1238 0 20.0781 0C9.03243 0 0.078125 8.9543 0.078125 20C0.078125 31.0457 9.03243 40 20.0781 40Z" 
                        fill="currentColor"
                    />
                </mask>
                <g mask="url(#mask0_2983_67)">
                    <path 
                        d="M20.0781 40C31.1238 40 40.0781 31.0457 40.0781 20C40.0781 8.9543 31.1238 0 20.0781 0C9.03243 0 0.078125 8.9543 0.078125 20C0.078125 31.0457 9.03243 40 20.0781 40Z" 
                        fill="currentColor"
                    />
                    <path 
                        d="M33.3021 35.0044L15.443 12H12.0781V27.9933H14.77V15.4186L31.189 36.6322C31.9299 36.1364 32.6357 35.5922 33.3021 35.0044Z" 
                        fill="url(#paint0_linear_2983_67)"
                    />
                    <path 
                        d="M28.2995 12H25.6328V28H28.2995V12Z" 
                        fill="url(#paint1_linear_2983_67)"
                    />
                </g>
            </g>
            <defs>
                <linearGradient 
                    id="paint0_linear_2983_67" 
                    x1="21.4677" 
                    y1="23.5828" 
                    x2="33.5756" 
                    y2="34.9358" 
                    gradientUnits="userSpaceOnUse"
                >
                <stop/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
                </linearGradient>
                <linearGradient 
                    id="paint1_linear_2983_67" 
                    x1="30.5756" 
                    y1="12" 
                    x2="30.5326" 
                    y2="23.64" 
                    gradientUnits="userSpaceOnUse"
                >
                <stop/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}