'use client';

import { useState } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import styles from './CodeBlock.module.scss';
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
    <div className={styles.codeBlockWrapper}>
      <div className={styles.header}>
        <span className={styles.language}>{filename || language}</span>
        <button
          onClick={handleCopy}
          className={styles.copyButton}
          title='Copy Code'
        >
          {isCopied ? (
            <>
              <CheckIcon className={styles.icon} />
              <span className={styles.copyText}>Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className={styles.icon} />
              <span className={styles.copyText}>Copy</span>
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
