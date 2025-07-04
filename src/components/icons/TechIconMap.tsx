import NextJSIcon from './tech/NextJSIcon';
import ReactIcon from './tech/ReactIcon';
import TypeScriptIcon from './tech/TypeScriptIcon';
import SASSIcon from './tech/SASSIcon';
import MDXIcon from './tech/MDXIcon';
import VercelIcon from './tech/VercelIcon';
import PostgreSQLIcon from './tech/PostgreSQLIcon';
import PrismaIcon from './tech/PrismaIcon';
import NodeJSIcon from './tech/NodeJSIcon';
import NextAuthJSIcon from './tech/NextAuthJSIcon';
import TailwindCSSIcon from './tech/TailwindCSSIcon';
import SupabaseIcon from './tech/SupabaseIcon';
import ZustandIcon from './tech/ZustandIcon';

export type TechnologyName =
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'sass'
  | 'mdx'
  | 'vercel'
  | 'postgresql'
  | 'prisma'
  | 'nodejs'
  | 'nextauthjs'
  | 'tailwindcss'
  | 'supabase'
  | 'zustand';

export const TechIconMap: Record<
  TechnologyName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  nextjs: NextJSIcon,
  react: ReactIcon,
  typescript: TypeScriptIcon,
  sass: SASSIcon,
  mdx: MDXIcon,
  vercel: VercelIcon,
  postgresql: PostgreSQLIcon,
  prisma: PrismaIcon,
  nodejs: NodeJSIcon,
  nextauthjs: NextAuthJSIcon,
  tailwindcss: TailwindCSSIcon,
  supabase: SupabaseIcon,
  zustand: ZustandIcon,
};

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: TechnologyName;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, ...props }) => {
  const IconComponent = TechIconMap[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};
