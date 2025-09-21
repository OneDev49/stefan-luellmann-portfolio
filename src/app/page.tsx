import IntroductionSection from './_components/IntroductionSection';
import ArticleAdvertisementSection from './_components/ArticleAdvertisementSection';
import ProjectShowcaseSection from './_components/ProjectShowcaseSection';
import CTASection from './_components/CTASection';
import MainpageHeroSection from './_components/MainpageHeroSection';

export default function HomePage() {
  return (
    <main>
      <MainpageHeroSection />
      <IntroductionSection />
      <ArticleAdvertisementSection />
      <ProjectShowcaseSection />
      <CTASection />
    </main>
  );
}
