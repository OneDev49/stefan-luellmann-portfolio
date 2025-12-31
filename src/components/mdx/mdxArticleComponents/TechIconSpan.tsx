import { TechIcon, TechnologyName } from '../../icons/TechIconMap';

interface TechIconSpanProps {
  children: React.ReactNode;
  technology: TechnologyName;
}

export default function TechIconSpan({
  children,
  technology,
}: TechIconSpanProps) {
  return (
    <span>
      <TechIcon
        className='mx-1 align-sub inline'
        name={technology}
        height='20'
        width='20'
      />
      <span className='ml-0.5'>{children}</span>
    </span>
  );
}
