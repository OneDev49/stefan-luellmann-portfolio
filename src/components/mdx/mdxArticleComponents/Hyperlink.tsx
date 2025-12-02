import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import styles from './Hyperlink.module.scss';
import Link from 'next/link';

interface HyperLinkProps {
  children: string;
  href: string;
  className?: string;
}

export default function HyperLink({
  children,
  href,
  className = '',
}: HyperLinkProps) {
  const linkClassName = `${styles.link} ${className}`;

  const isExternal = href.startsWith('http') || href.startsWith('//');

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkClassName}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        <GlobeIcon height={20} width={20} className={styles.icon} />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}
