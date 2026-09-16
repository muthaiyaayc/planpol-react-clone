import HeroSection from "../../components/Home/HeroSection";
import StatsSection from "../../components/Home/StatsSection";
import StorySection from "../../components/Home/StorySection";
import AwardsSection from "../../components/Home/AwardsSection";
import ExperienceSection from "../../components/Home/ExperienceSection";
import TeamSection from "../../components/Home/TeamSection";
import ProductsSection from "../../components/Home/ProductsSection";
import CTASection from "../../components/Home/CTASection";

function Home() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#111]">
      <HeroSection />
      <StatsSection />
      <StorySection />
      <AwardsSection />
      <ExperienceSection />
      <TeamSection />
      <ProductsSection />
      <CTASection />
    </main>
  );
}

export default Home;