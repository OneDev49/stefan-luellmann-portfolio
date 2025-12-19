import HomePageCTA from './_components/HomePageCTA';
import HomePageHero from './_components/HomePageHero';
import HomePageBento from './_components/HomePageBento';
import HomePageNewsletter from './_components/HomePageNewsletter';
import HomepageLatestArticle from './_components/HomepageLatestArticles';

export default function HomePage() {
  return (
    <main>
      <HomePageHero />
      <HomePageBento />
      <HomePageNewsletter />
      <HomepageLatestArticle />
      <HomePageCTA />
    </main>
  );
}
