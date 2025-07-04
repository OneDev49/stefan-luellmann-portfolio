import NextJSIcon from "./tech/NextJSIcon";


export type TechnologyName = 'nextjs';

export const TechIconMap: Record<TechnologyName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    nextjs: NextJSIcon,
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