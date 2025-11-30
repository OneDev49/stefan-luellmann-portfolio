import { slugify } from '@/lib/mdx';

import TextBlock from '@/components/mdx/mdxArticleComponents/TextBlock';
import Highlight from '@/components/mdx/mdxArticleComponents/Highlight';
import TextSpacer from '@/components/mdx/mdxArticleComponents/TextSpacer';
import styles from './mdxParentFile.module.scss';

const H2 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h2>{children}</h2>;
  const slug = slugify(children);
  return (
    <h2 id={slug} className={styles.caseStudyHeading}>
      {children}
    </h2>
  );
};

const H3 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h3>{children}</h3>;
  const slug = slugify(children);
  return (
    <h3 id={slug} className={styles.caseStudyHeading}>
      {children}
    </h3>
  );
};

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={styles.caseStudyParagraph} {...props} />
);

const UL = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={styles.caseStudyUnorderedList} {...props} />
);

export const coreMdxComponents = {
  TextSpacer,
  TextBlock,
  Highlight,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
};
