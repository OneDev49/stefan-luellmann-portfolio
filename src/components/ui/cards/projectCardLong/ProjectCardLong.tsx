import clsx from 'clsx';
import styles from './ProjectCardLong.module.scss';
import Image from 'next/image';
import GradientButton, {GradientButtonProps} from '@/components/ui/buttons/gradientbutton/GradientButton';



export interface ProjectCardLongProps {
    title: string;
    projectImage: string;
    gradientButtonLiveDemo: GradientButtonProps;
    gradientButtonBlogArticle: GradientButtonProps;
    gradientButtonGitHub: GradientButtonProps;



    paragraph: string;
}


export default function ProjectCardLong({ 
    projectImage,
    title,
    paragraph,
    gradientButtonLiveDemo,
    gradientButtonBlogArticle,
    gradientButtonGitHub,
    }: ProjectCardLongProps) {

        const textContainerClassNames = clsx(
            styles.projectCardContent,
            'nwt--flex-n-n-col'
        )

        const linkBlockClassNames = clsx(
            styles.projectCardLinks,
            'nwt--flex-n-n-col'
        )

        return (
            <div className={styles.projectCard}>
                <div className={`${textContainerClassNames}`}>
                    <h3 className="nwt--f-h3-small">
                        {title}
                    </h3>     
                </div>

                <div className={styles.projectCardImage}>
                    {/* Place for Image */}
                </div>

                <div className={`${textContainerClassNames}`}>
                    <div className={`${linkBlockClassNames}`}>
                        <GradientButton {...gradientButtonLiveDemo} />
                        <div className="">
                            <GradientButton {...gradientButtonBlogArticle} />
                            <GradientButton {...gradientButtonGitHub} />
                        </div>
                    </div>
                    <div>
                        <strong>
                            Description of the Project
                        </strong>
                        <p>
                            {paragraph}
                        </p>
                    </div>
                    <div>
                        <strong>
                            Technologies Used:
                        </strong>
                        <div className={styles.projectCardTech}>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        );
}
`


`