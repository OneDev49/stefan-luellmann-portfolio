import { cn } from '@/lib/utilities';

interface TextSpacerProps {
  size?: 1 | 2 | 4 | 8 | 16;
}

export default function Spacer({ size = 1 }: TextSpacerProps) {
  const TextSpacerClassName = cn(
    size === 1 && 'py-4',
    size === 2 && 'py-8',
    size === 4 && 'py-16',
    size === 8 && 'py-32',
    size === 16 && 'py-64'
  );

  return <div className={TextSpacerClassName} />;
}
