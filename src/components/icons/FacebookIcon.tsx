
interface IconProps {
    width: number;
    height: number;
    className?: string;
    color?: string;
}



export default function FacebookIcon({ width, height, className, color = '#000' }: IconProps) {

    const IconPath = (
        <path 
            d="M3.786 17.619v12.463H10V17.619h4.634l.964-5.73H10V9.861c0-3.029 1.088-4.189 3.895-4.189l1.982.07V.545c-.766-.229-2.641-.463-3.723-.463-5.727 0-8.368 2.959-8.368 9.34v2.467H.25v5.73h3.536z" 
            
        />
    );


    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 31"
            width={width} 
            height={height}
            fill={color || 'currentColor'}
            className={className}
        >
            {IconPath}
        </svg>
    )
}