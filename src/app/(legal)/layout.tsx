import clsx from 'clsx';
import styles from './legalLayout.module.scss';

export default function LegalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperClassName = clsx(styles.wrapper, 'nwt--width');
  return (
    <div className={wrapperClassName}>
      <article className={styles.article}>{children}</article>
    </div>
  );
}
