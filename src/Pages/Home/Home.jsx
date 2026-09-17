import HeroSection from "../../components/Home/HeroSection";
import StatsSection from "../../components/Home/StatsSection";
import AwardsSection from "../../components/Home/AwardsSection";
import StorySection from "../../components/Home/StorySection";
import TeamSection from "../../components/Home/TeamSection";

function Home() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#111]">
      <HeroSection />

      <StatsSection />

      <AwardsSection />

      <StorySection />

      <TeamSection />
    </main>
  );
}

export default Home;