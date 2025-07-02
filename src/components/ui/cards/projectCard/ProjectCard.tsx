import Link from 'next/link';
import clsx from 'clsx';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';



export interface ProjectCardProps {
    projectImage: string;
    title: string;
    paragraph: string;
    anchorText: string;
    href: string;
    target?: string;
}


export default function ProjectCard({ 
    projectImage,
    title,
    paragraph,
    anchorText,
    href,
    target,
    }: ProjectCardProps) {

        const textContainerClassNames = clsx(
            styles.projectCardTxt,
            'nwt--flex-n-n-col'
        )

        return (
            <div className={styles.projectCard}>
                <div className={styles.projectCardImage}>
                    <Image src={projectImage} alt={title} width={400} height={225} />
                </div>
                <div className={`${textContainerClassNames}`}>
                    <h3 className="nwt--f-h3-small">
                        {title}
                    </h3>
                    <p>
                        {paragraph}
                    </p>
                    <Link className={styles.projectCardLink} href={href} target={target}>
                        {anchorText}
                    </Link>
                </div>
            </div>
            
        );
}
`


`