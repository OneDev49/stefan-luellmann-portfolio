import { cn } from '@/lib/utilities';

interface ListProps {
  type?: 'ul' | 'ol';
  children: React.ReactNode;
}

export default function List({ type = 'ul', children }: ListProps) {
  const listContainerClassName = cn(
    '[&_ol>li]:my-1 [&_ul>li]:my-1 [&_ol]:my-5 [&_ul]:my-5 [&_ol]:pl-6 [&_ul]:pl-6',
    type === 'ul' && '[&_ul]:list-disc',
    type === 'ol' && '[&_ol]:list-decimal'
  );

  return <div className={listContainerClassName}>{children}</div>;
}
