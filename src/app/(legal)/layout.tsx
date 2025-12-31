export default function LegalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h1ClassName =
    '[&_h1]:text-h1 [&_h1]:pb-8 [&_h1]:capitalize [&_h1]:font-extrabold';
  const h2ClassName =
    '[&_h2]:text-h3 [&_h2]:font-extrabold [&_h2]:underline [&_h2]:capitalize [&_h2]:pb-2';
  const h3ClassName = '[&_h3]:text-h4 [&_h3]:font-extrabold [&_h3]:pb-2';
  const h4ClassName = '[&_h4]:text-h5 [&_h4]:font-extrabold [&_h4]:pb-2';

  const adjacentSiblingClassName =
    '[&_p+h2]:pt-16 [&_p+h3]:pt-6 [&_p+h4]:pt-6 [&_ul+h3]:pt-6 [&_ul+h4]:pt-6 [&_h2+h3]:pt-4 [&_h3+h4]:pt-4';

  const linkClassName =
    "[&_a]:inline-block [&_a]:relative [&_a]:text-[#80e1ff] [&_a::before]:content-[''] [&_a::before]:absolute [&_a::before]:-bottom-0.5 [&_a::before]:right-0 [&_a::before]:h-[2px] [&_a::before]:w-0 [&_a::before]:bg-gradient-to-r [&_a::before]:from-blue-500 [&_a::before]:to-emerald-500 [&_a::before]:rounded-full [&_a::before]:transition-all [&_a::before]:duration-300 [&_a:hover::before]:left-0 [&_a:hover::before]:right-0 [&_a:hover::before]:w-full";

  return (
    <div className='my-52 mx-auto max-w-7xl'>
      <article
        className={`${h1ClassName} ${h2ClassName} ${h3ClassName} ${h4ClassName} ${adjacentSiblingClassName} ${linkClassName} max-w-[72ch]`}
      >
        {children}
      </article>
    </div>
  );
}
