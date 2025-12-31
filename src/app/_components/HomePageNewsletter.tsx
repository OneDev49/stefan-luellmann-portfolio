import { siteData } from '@/config/siteData';

import WaveTransition from '@/components/effects/WaveTransition';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';

export default function HomePageNewsletter() {
  return (
    <section className='relative bg-[#020d7e] mb-36 overflow-hidden text-center lg:text-left'>
      <WaveTransition
        position='top'
        color='#000414'
        variant='inner'
        config={{
          height: 75,
        }}
      />
      <div className='max-w-7xl w-full mx-auto px-4 flex items-center justify-between gap-4'>
        <div className='space-y-4 py-20 max-w-[700px] mx-auto lg:mx-0'>
          <h2 className='text-h2 text-transparent font-extrabold capitalize'>
            <span className='bg-gradient-card bg-clip-text'>
              Deep Dive Newsletter, Every two Weeks
            </span>
          </h2>
          <p className='grid gap-6  shadow-xl'>
            <span>
              Get <strong>the real engineering documentation</strong>, including
              Technical Deep Dives, Performance Analytics, Build Logs and Edge
              Case Solutions <strong>every two weeks here on Sundays</strong>.
            </span>
            <span>
              Subscribe to the <strong>Bi-Weekly Dev Digest</strong> to get the
              full briefing delivered to your inbox the moment it goes live.
              Start your week with the complete source code and context, while
              the rest of the web is still waiting for the teasers.
            </span>
          </p>
        </div>
        <div className='pt-20 self-end hidden lg:block'>
          <div className='border rounded-t-lg overflow-hidden border-gray-800 shadow-[0_0_15px_2px_rgb(38,0,255)]'>
            <ImageSkeletonLoader
              loading='eager'
              className='h-auto w-auto max-h-[450px] min-w-[450px]'
              priority={true}
              draggable='false'
              src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yhp5hfvIFems6u5ObJfIoqgYZlSkEzWDyL3tQ`}
              alt="I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives!"
              title="Hey there, I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives"
              height={450}
              width={450}
              sizes='50vw'
            />
          </div>
        </div>
      </div>
      <WaveTransition
        position='bottom'
        color='#000414'
        variant='inner'
        config={{
          height: 75,
        }}
      />
    </section>
  );
}
