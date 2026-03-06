interface CodeProps {
  children: React.ReactNode;
}

export default function Code({ children }: CodeProps) {
  return (
    <code className='py-[0.1em] px-[0.2em] inline-block rounded bg-gray-300 dark:bg-black font-mono border border-[#acacac] dark:border-[#313131] text-[0.875em]'>
      {children}
    </code>
  );
}
