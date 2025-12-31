import BackgroundBlob from '@/app/articles/_components/background/BackgroundBlob';
import BackgroundShapeOne from '@/app/articles/_components/background/BackgroundShapeOne';
import BackgroundShapeTwo from '@/app/articles/_components/background/BackgroundShapeTwo';

export default function CaseStudiesHero() {
  return (
    <section className='relative pt-36 grid place-items-center text-center'>
      <div className='absolute inset-0 flex justify-center'>
        <BackgroundBlob className='absolute top-0 max-w-full' />
        <BackgroundShapeOne className='absolute opacity-0 left-0 md:opacity-100 max-w-full' />
        <BackgroundShapeTwo className='absolute opacity-0 right-[3%] top-[15%] md:opacity-100 max-w-full' />
      </div>
      <div className='relative z-10 max-w-3xl px-4 mx-auto'>
        <strong className='text-[#36e5fc] font-mono uppercase'>
          Detailed, Precise, Extensive
        </strong>
        <h1 className='text-h1 text-transparent font-extrabold capitalize'>
          <span className='bg-gradient-card bg-clip-text'>
            Case Studies for each Project
          </span>
        </h1>
        <p className='mt-4'>
          I write detailed case studies for all the projects I work on, both
          Personal Projects and Client Projects.
        </p>
      </div>
    </section>
  );
}
