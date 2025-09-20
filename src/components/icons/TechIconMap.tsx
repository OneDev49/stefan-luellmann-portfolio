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
import GitIcon from './tech/GitIcon';
import DockerIcon from './tech/DockerIcon';
import CSS3Icon from './tech/CSS3Icon';
import FigmaIcon from './tech/FigmaIcon';
import HTML5Icon from './tech/HTML5Icon';
import JavaScriptIcon from './tech/JavaScriptIcon';
import PHPIcon from './tech/PHPIcon';
import MySQLIcon from './tech/MySQLIcon';
import WordPressIcon from './tech/WordPressIcon';
import ZodIcon from './tech/ZodIcon';
import RedisIcon from './tech/RedisIcon';

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
  | 'zustand'
  | 'git'
  | 'docker'
  | 'css3'
  | 'figma'
  | 'html5'
  | 'javascript'
  | 'php'
  | 'mysql'
  | 'wordpress'
  | 'zod'
  | 'redis';

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
  git: GitIcon,
  docker: DockerIcon,
  css3: CSS3Icon,
  figma: FigmaIcon,
  html5: HTML5Icon,
  javascript: JavaScriptIcon,
  php: PHPIcon,
  mysql: MySQLIcon,
  wordpress: WordPressIcon,
  zod: ZodIcon,
  redis: RedisIcon,
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
