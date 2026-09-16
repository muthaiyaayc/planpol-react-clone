import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-products-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      number: "01",
      name: "PlanPol Strategy",
      link: "/products?product=strategy",
    },
    {
      number: "02",
      name: "PlanPol Voice",
      link: "/products?product=voice",
    },
    {
      number: "03",
      name: "PlanPol Booth",
      link: "/products?product=booth",
    },
    {
      number: "04",
      name: "PlanPol Party 360°",
      link: "/products?product=PlanPol%20Party%20360%C2%B0",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white px-0 py-[150px] max-[700px]:py-[100px]">

      {/* HEADING */}
      <div className="home-products-heading mx-auto w-[min(1320px,calc(100%-100px))] max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)]">

        <span className="block text-[10px] font-bold tracking-[0.18em] text-[#777]">
          OUR PRODUCTS
        </span>

        <h2 className="m-[25px_0_30px] max-w-[900px] text-[clamp(60px,7vw,110px)] font-medium leading-[0.88] tracking-[-0.075em] text-[#111] max-[700px]:text-[clamp(48px,14vw,72px)]">
          Built for
          <br />
          <span className="text-[#1557ff]">politics.</span>
        </h2>

        <p className="mb-[75px] max-w-[420px] text-[16px] leading-[1.7] text-[#777] max-[700px]:mb-[55px] max-[700px]:text-[14px]">
          Purpose-built technology that turns political data into actionable intelligence.
        </p>

      </div>

      {/* PRODUCT LIST */}
      <div className="mx-auto w-[min(1320px,calc(100%-100px))] border-t border-[#d9dde4] max-[1000px]:w-[calc(100%-60px)] max-[700px]:w-[calc(100%-40px)]">

        {products.map((product) => (
          <Link key={product.number} to={product.link} className="group grid min-h-[125px] grid-cols-[80px_1fr_40px] items-center border-b border-[#d9dde4] text-[#111] no-underline transition-all duration-300 hover:pl-5 hover:text-[#1557ff] max-[700px]:min-h-[105px] max-[700px]:grid-cols-[40px_1fr_25px]">

            <span className="text-[10px] font-bold tracking-[0.12em] text-[#777] group-hover:text-[#1557ff]">
              {product.number}
            </span>

            <strong className="text-[32px] font-medium tracking-[-0.04em] max-[700px]:text-[27px]">
              {product.name}
            </strong>

            <span className="text-right text-[22px] text-[#1557ff] transition-transform duration-300 group-hover:translate-x-[5px] group-hover:-translate-y-[5px]">
              ↗
            </span>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default ProductsSection;