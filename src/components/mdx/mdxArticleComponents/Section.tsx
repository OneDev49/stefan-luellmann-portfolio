import { cn } from '@/lib/utilities';

interface ContentBlockProps {
  position?: 'top' | false;
  children: React.ReactNode;
}

export default function Section({
  position = false,
  children,
}: ContentBlockProps) {
  const sectionClassName = cn(
    'mt-16 mb-16 text-[#e2e3e7] [&_p]:mb-3 [&_p+ol]:mt-0 [&_p+ul]:mt-0',
    position === 'top' && 'mt-0'
  );

  return <section className={sectionClassName}>{children}</section>;
}
