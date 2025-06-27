import Link from 'next/link';
import clsx from 'clsx';
import styles from './GradientButton.module.scss';



interface LinkProps {
    href: string;
    title: string;
    target?: string;
    variant?: 'blue' | 'orange' | 'green';
}


export default function GradientButton({ 
    href, 
    title,
    target,
    variant = 'blue'
    }: LinkProps) {

        const buttonClassNames = clsx(
            styles.nwtGradientButton,
            {
                [styles.nwtBlueGradient]: variant == 'blue',
                [styles.nwtOrangeGradient]: variant == 'orange',
                [styles.nwtGreenGradient]: variant == 'green',
            }
        );

        return (
            <Link className={`${buttonClassNames} nwt--flex-c-c-n`} href={href} target={target}>
                {title}
            </Link>
        );
}