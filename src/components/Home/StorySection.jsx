import { Link } from "react-router-dom";

function StorySection() {
  return (
    <section className="bg-white py-40 max-[700px]:py-[90px]">
      <div className="mx-auto grid w-[min(1320px,calc(100%-100px))] grid-cols-2 items-center gap-[100px] max-[1000px]:w-[calc(100%-60px)] max-[1000px]:gap-[50px] max-[700px]:w-[calc(100%-40px)] max-[700px]:grid-cols-1 max-[700px]:gap-[55px]">

        {/* COMPASS IMAGE */}
        <div className="relative flex min-h-[540px] items-center justify-center max-[700px]:min-h-[350px]">

          <div className="absolute h-[430px] w-[430px] rounded-full border border-[#dce1e8] before:absolute before:inset-[45px] before:rounded-full before:border before:border-[#e7eaf0] after:absolute after:inset-[100px] after:rounded-full after:border after:border-[#e7eaf0] max-[700px]:h-[300px] max-[700px]:w-[300px]"></div>

          <img src="/compass.png" alt="" className="relative z-[2] w-[min(90%,460px)] object-contain" />

        </div>

        {/* STORY CONTENT */}
        <div className="home-story-copy">

          <span className="block text-[10px] font-bold tracking-[0.18em] text-[#777]">
            DATA + TECHNOLOGY
          </span>

          <h2 className="m-[25px_0_30px] text-[clamp(55px,6vw,90px)] font-medium leading-[0.9] tracking-[-0.07em] max-[700px]:text-[54px]">
            Making
            <br />
            complexity
            <br />
            <span className="text-[#1557ff]">
              simple.
            </span>
          </h2>

          <p className="mb-[30px] max-w-[440px] text-[16px] font-normal leading-[1.75] text-[#70757e]">
            We combine political experience
            with technology, data and research
            to uncover what really matters
            to people.
          </p>

          <Link to="/our-story" className="inline-flex items-center gap-[15px] text-[13px] font-semibold text-[#111] no-underline">
            Discover our story

            <span className="text-[18px] text-[#1557ff] transition-transform duration-300 ease-in-out hover:translate-x-1 hover:-translate-y-1 motion-reduce:transition-none">
              ↗
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default StorySection;