import NextJSIcon from "./tech/NextJSIcon";
import ReactIcon from "./tech/ReactIcon";
import TypeScriptIcon from "./tech/TypeScriptIcon";
import SASSIcon from "./tech/SASSIcon";
import MDXIcon from "./tech/MDXIcon";
import VercelIcon from "./tech/VercelIcon";


export type TechnologyName = 'nextjs' | 'react' | 'typescript' | 'sass' | 'mdx' | 'vercel';

export const TechIconMap: Record<TechnologyName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    nextjs: NextJSIcon,
    react: ReactIcon,
    typescript: TypeScriptIcon,
    sass: SASSIcon,
    mdx: MDXIcon,
    vercel: VercelIcon,
}

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
    name: TechnologyName;
}



export const TechIcon: React.FC<TechIconProps> = ({
    name,
    ...props
}) => {
    const IconComponent = TechIconMap[name];
    if(!IconComponent) {
        return null;
    }
    return <IconComponent {...props} />;
}