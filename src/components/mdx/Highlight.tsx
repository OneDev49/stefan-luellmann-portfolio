import clsx from 'clsx';
import { TechIcon, TechnologyName } from '../icons/TechIconMap';
import styles from './Highlight.module.scss';

interface HighlightProps {
  children: React.ReactNode;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'code' | 'none';
  type?: 'technology' | 'singleWord';
  technology?: TechnologyName;
}

export default function Highlight({
  children,
  color = 'none',
  type = 'singleWord',
  technology = 'mdx',
}: HighlightProps) {
  const highlightClassName = clsx(styles.highlight, {
    [styles[type]]: type,
    [styles[color]]: color,
  });

  if (type === 'singleWord') {
    return <span className={highlightClassName}>{children}</span>;
  }

  if (type === 'technology') {
    return (
      <span className={highlightClassName}>
        <TechIcon name={technology} height='20' width='20' />
        <span>{children}</span>
      </span>
    );
  }
}
