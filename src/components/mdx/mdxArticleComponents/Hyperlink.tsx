import { cn } from '@/lib/utilities';

import Link from 'next/link';
import ExternalLinkIcon from '@/components/icons/ui/ExternalLinkIcon';

interface HyperLinkProps {
  children: string;
  href: string;
  className?: string;
}

export default function HyperLink({
  children,
  href,
  className,
}: HyperLinkProps) {
  const linkClassName = cn(
    'text-[#46e3ff] underline underline-offset-2 transition-all duration-200 ease-in-out inline-flex items-center gap-1 hover:text-[#aef3ff]',
    className
  );

  const isExternal = href.startsWith('http') || href.startsWith('//');

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${linkClassName} mx-1`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
        <ExternalLinkIcon height={15} width={15} />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}
