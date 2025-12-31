import CTAButton from '@/components/ui/CTAButton';
import BackgroundBlob from './background/BackgroundBlob';
import BackgroundShapeOne from './background/BackgroundShapeOne';
import BackgroundShapeTwo from './background/BackgroundShapeTwo';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

export default function ArticleHubHero() {
  return (
    <section className='relative py-36 grid place-items-center text-center'>
      <div className='absolute inset-0 flex justify-center'>
        <BackgroundBlob className='absolute top-0 max-w-full' />
        <BackgroundShapeOne className='absolute opacity-0 left-0 md:opacity-100 max-w-full' />
        <BackgroundShapeTwo className='absolute opacity-0 right-[3%] top-[15%] md:opacity-100 max-w-full' />
      </div>
      <div className='relative z-10 max-w-3xl px-4 mx-auto flex flex-col items-center gap-4'>
        <div>
          <strong className='text-[#36e5fc] font-mono uppercase'>
            Technical, Educational, Advanced
          </strong>
          <h1 className='text-h1 text-transparent font-extrabold capitalize'>
            <span className='bg-gradient-card bg-clip-text'>
              Articles on technical topics
            </span>
          </h1>
        </div>
        <p>
          I publish three articles each week on topics regarding Web
          Development, Full-Stack Development, Technical Advances and News in
          Tech.
        </p>
        <CTAButton
          href='#allArticles'
          animation='all'
          colorStyle='gradientBlue'
          className='gap-1 py-1 px-2 items-center rounded-md font-heading font-extrabold'
        >
          <span>Discover all Articles</span>
          <CaretRightIcon width={16} height={24} />
        </CTAButton>
      </div>
    </section>
  );
}
