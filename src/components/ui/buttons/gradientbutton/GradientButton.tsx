import Link from 'next/link';
import clsx from 'clsx';
import styles from './GradientButton.module.scss';



interface GradientButtonProps {
    href: string;
    title: string;
    target?: string;
    variant?: 'blue' | 'orange' | 'green';
    className?: string;
}


export default function GradientButton({ 
    href, 
    title,
    target,
    variant = 'blue',
    className
    }: GradientButtonProps) {

        const buttonClassNames = clsx(
            styles.nwtGradientButton,
            {
                [styles.nwtBlueGradient]: variant == 'blue',
                [styles.nwtOrangeGradient]: variant == 'orange',
                [styles.nwtGreenGradient]: variant == 'green',
            },
            'nwt--flex-c-c-n',
            className
        );

        return (
            <Link className={`${buttonClassNames} `} href={href} target={target}>
                {title}
            </Link>
        );
}