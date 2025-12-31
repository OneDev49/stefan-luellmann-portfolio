import { cn } from '@/lib/utilities';

interface CodeProps {
  children: React.ReactNode;
}

export default function Code({ children }: CodeProps) {
  const codeClassName = cn(
    'py-0.5 px-1 inline-block rounded bg-black font-mono border border-[#313131] text-sm'
  );

  return <code className={codeClassName}>{children}</code>;
}
