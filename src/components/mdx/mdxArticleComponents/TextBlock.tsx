import styles from './TextBlock.module.scss';

interface ContentBlockProps {
  children: React.ReactNode;
}

export default function TextBlock({ children }: ContentBlockProps) {
  return <div className={styles.textBlock}>{children}</div>;
}
