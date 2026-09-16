import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#1557ff] text-white max-[700px]:min-h-[550px]">

      {/* ORBIT CIRCLES */}
      <div className="pointer-events-none absolute right-[-230px] top-[-180px] z-0 h-[650px] w-[650px] rounded-full border border-white/15 max-[700px]:right-[-260px] max-[700px]:top-[-120px] max-[700px]:h-[450px] max-[700px]:w-[450px]">
        <div className="absolute inset-[45px] rounded-full border border-white/10" />
        <div className="absolute inset-[100px] rounded-full border border-white/10" />
        <div className="absolute inset-[150px] rounded-full border border-white/10" />
      </div>

      <div className="pointer-events-none absolute right-[-125px] top-[-75px] z-0 h-[440px] w-[440px] rounded-full border border-white/10 max-[700px]:right-[-185px] max-[700px]:top-[-60px] max-[700px]:h-[300px] max-[700px]:w-[300px]">
        <div className="absolute inset-[45px] rounded-full border border-white/10" />
        <div className="absolute inset-[100px] rounded-full border border-white/10" />
      </div>

      {/* CONTENT */}
      <div className="relative z-[3] mx-auto w-[min(1320px,calc(100%-100px))] max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)]">

        <span className="block text-[10px] font-bold tracking-[0.18em] text-white/70">
          LET'S WORK TOGETHER
        </span>

        <h2 className="m-[25px_0_45px] text-[clamp(65px,8vw,125px)] font-medium leading-[0.86] tracking-[-0.08em] text-white max-[700px]:text-[62px]">
          Let's make
          <br />
          <span className="opacity-[0.65]">data work.</span>
        </h2>

        <Link to="/contact" className="group inline-flex items-center gap-[35px] rounded-full border border-white/50 px-[22px] py-[17px] text-[13px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1557ff]">
          <span>Talk to us</span>

          <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>

      </div>

    </section>
  );
}

export default CTASection;