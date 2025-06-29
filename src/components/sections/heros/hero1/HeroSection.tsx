import styles from './HeroSection.module.scss';
import GradientButton from '@/components/ui/buttons/gradientbutton/GradientButton';
import clsx from 'clsx';



interface HeroProps {
    heading?: string;
    paragraph?: string;
    gradientButton: {
        href: string,
        title: string,
        variant?: 'blue' | 'orange' | 'green',
    }
}


export default function HeroSection({ heading, paragraph, gradientButton: {href, title, variant} }: HeroProps) {
    
    const contentClassNames = clsx(
        styles.Content,
        'nwt--flex-c-c-n',
        'nwt--txt-center',
    );
    const contentInnerClassName = clsx(
        styles.ContentInner,
        'nwt--flex-c-n-col',
        'nwt--txt-center',
    );

    return (
        <section className={styles.nwtHeroWrapper}>
            <div className={`${contentClassNames}`}>
                <div className={`${contentInnerClassName}`}>
                    <h1 className="nwt--f-h1">
                        {heading}
                    </h1>
                    <p>
                        {paragraph}
                    </p>
                    <GradientButton href={href} title={title} variant={variant} />
                </div>

            </div>

        </section>
    );
}