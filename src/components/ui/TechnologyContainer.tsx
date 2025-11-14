import { TechIcon, TechnologyName } from '../icons/TechIconMap';

import clsx from 'clsx';
import styles from './TechnologyContainer.module.scss';

interface TechnologyContainerProps {
  variant?: 'big' | 'small';
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
    case 'zod':
    case 'redis':
    case 'netlify':
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
      return 'php';

    default:
      return tech;
  }
}

export default function TechnologyContainer({
  variant = 'small',
  technology,
}: TechnologyContainerProps) {
  /* Determine svgSize by variant | in px */
  const svgSize = variant === 'small' ? 20 : 35;

  return (
    <div
      className={clsx(
        styles.mainContainer,
        variant === 'small' ? styles.small : styles.big
      )}
    >
      <div>
        <TechIcon height={svgSize} width={svgSize} name={technology} />
      </div>
      <span>{TechnologyNameMapper(technology)}</span>
    </div>
  );
}
