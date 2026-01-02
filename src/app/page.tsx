import HomePageCTA from './_components/HomePageCTA';
import HomePageHero from './_components/HomePageHero';
import HomePageBento from './_components/HomePageBento';
import LatestArticles from '@/components/sections/LatestArticles';

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <HomePageBento />
      <HomePageCTA />
      <LatestArticles heading='Discover my latest Technical Deep Dives' />
    </>
  );
}
