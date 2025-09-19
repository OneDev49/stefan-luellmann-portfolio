import { TechIcon, TechnologyName } from '../icons/TechIconMap';
import styles from './TechnologyContainer.module.scss';

interface TechnologyContainerProps {
  technology: TechnologyName;
}

function TechnologyNameMapper(tech: TechnologyName) {
  switch (tech) {
    case 'nextjs':
    case 'git':
    case 'figma':
    case 'javascript':
    case 'prisma':
    case 'supabase':
    case 'nodejs':
    case 'react':
    case 'vercel':
    case 'zustand':
    case 'docker':
      return tech.charAt(0).toUpperCase() + tech.slice(1);

    case 'mdx':
    case 'sass':
    case 'css3':
    case 'html5':
      return tech.toUpperCase();

    case 'nextauthjs':
      return 'NextAuthJS';

    case 'mysql':
      return 'MySQL';

    case 'postgresql':
      return 'PostgreSQL';

    case 'tailwindcss':
      return 'TailwindCSS';

    case 'typescript':
      return 'TypeScript';

    case 'wordpress':
      return 'WordPress';

    case 'php':
      return;

    default:
      return;
  }
}

export default function TechnologyContainer({
  technology,
}: TechnologyContainerProps) {
  return (
    <div className={`${styles.mainContainer} nwt--flex-c-n-n`}>
      <div className={styles.imageContainer}>
        <TechIcon height={20} width={20} name={technology} />
      </div>
      <span>{TechnologyNameMapper(technology)}</span>
    </div>
  );
}
