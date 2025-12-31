import { TechIcon, TechnologyName } from '../icons/TechIconMap';
import { cn } from '@/lib/utilities';

interface TechnologyContainerProps {
  styleSize?: 'big' | 'small' | 'none';
  svgWidth: number;
  svgHeight: number;
  variant?: 'all' | 'icon' | 'text';
  technology: TechnologyName;
  className?: string;
  background?: boolean;
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
  variant = 'all',
  styleSize = 'small',
  svgHeight,
  svgWidth,
  technology,
  className,
  background = true,
}: TechnologyContainerProps) {
  const techClassName = cn(
    ' flex items-center',
    styleSize === 'small'
      ? 'gap-2 py-0.5 px-2'
      : styleSize === 'big'
      ? 'gap-4 py-1 px-2'
      : '',
    background === true &&
      'bg-black rounded-lg border border-[#002b98] shadow-[0_0_15px_5px_rgba(0,81,255,0.25)]',
    className
  );

  return (
    <div className={techClassName}>
      {(variant === 'all' || variant === 'icon') && (
        <div>
          <TechIcon height={svgHeight} width={svgWidth} name={technology} />
        </div>
      )}
      {(variant === 'all' || variant === 'text') && (
        <span>{TechnologyNameMapper(technology)}</span>
      )}
    </div>
  );
}
