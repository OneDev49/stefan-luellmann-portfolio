import { slugify } from '@/lib/mdx/mdx-utils';

import Section from './Section';
import Spacer from './Spacer';
import CodeBlock from './CodeBlock';
import HyperLink from './Hyperlink';
import Code from './Code';
import TechIconSpan from './TechIconSpan';
import Callout from './Callout';
import List from './List';

const headingClassName = 'scroll-mt-[70px] font-extrabold';

const H2 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h2>{children}</h2>;
  const slug = slugify(children);
  return (
    <h2 id={slug} className={`${headingClassName} text-h3 mt-6 mb-3`}>
      {children}
    </h2>
  );
};

const H3 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h3>{children}</h3>;
  const slug = slugify(children);
  return (
    <h3 id={slug} className={`${headingClassName} text-h4 mt-7 mb-5`}>
      {children}
    </h3>
  );
};

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...props} />
);

const UL = (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />;

export const coreMdxComponents = {
  CodeBlock,
  Code,
  Callout,
  TechIconSpan,
  HyperLink,
  Spacer,
  Section,
  List,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
};
