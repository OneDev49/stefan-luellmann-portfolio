'use client';

import { useState } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import CheckIcon from '@/components/icons/glyphs/CheckIcon';
import LinkIcon from '@/components/icons/glyphs/LinkIcon';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  children,
  language = 'typescript',
  filename,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className='my-8 rounded-lg border border-[#333] overflow-hidden bg-[#1e1e1e]'>
      <div className='flex justify-between items-center gap-1 py-2 px-4 bg-[#252526] border-b border-[#333] text-[#ccc] font-mono'>
        <div className='text-sm'>
          {filename && <span>{filename} - </span>}
          {filename && language ? (
            <span>({language})</span>
          ) : (
            <span>{language}</span>
          )}
        </div>
        <button
          type='button'
          onClick={handleCopy}
          disabled={isCopied}
          className='flex items-center gap-2 bg-transparent border-none text-[#888] cursor-pointer transition-colors duration-200 ease-in-out hover:text-[#fff]'
          title='Copy Code the code snippet below'
        >
          {isCopied ? (
            <>
              <CheckIcon height={15} width={15} />
              <span className='text-[12px]'>Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon height={15} width={15} />
              <span className='text-[12px]'>Copy</span>
            </>
          )}
        </button>
      </div>

      <SyntaxHighlighter
        language={language.toLowerCase()}
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        lineNumberStyle={{
          fontSize: '12px',
          marginRight: '10px',
        }}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
          fontSize: '14.4px',
          lineHeight: '1.5',
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
