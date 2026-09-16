import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "strategy",
    name: "PlanPol Strategy",
    shortName: "Strategy",
    icon: "♟",
    description:
      "Turn political data into smarter strategy, stronger visibility, and consistent growth.",
    challenge: "Work Smart, Get Noticed",
    features: [
      "Grow Your Influence, Daily",
      "Know Your Strengths, Play to Win",
      "Shape Your Political Future",
    ],
  },
  {
    id: "voice",
    name: "PlanPol Voice",
    shortName: "Voice",
    icon: "◉",
    description:
      "Build your political voice, stay relevant, and make sure your message reaches the right people.",
    challenge: "Be the First to Speak",
    features: [
      "Stay Present, Every Single Time",
      "Own Your Narrative",
      "Fuel the Movement",
    ],
  },
  {
    id: "booth",
    name: "PlanPol Booth",
    shortName: "Booth",
    icon: "⌂",
    description:
      "Go deeper into booth-level intelligence and turn hyper-local insights into ground-level action.",
    challenge: "Know Your Booth, Win Your Seat",
    features: [
      "Go Hyper-Local To Stay Ahead",
      "Equip Your Ground Force",
      "Own the Ground Game",
    ],
  },
  {
    id: "party360",
    name: "PlanPol Party 360°",
    shortName: "Party 360°",
    icon: "✦",
    description:
      "Bring political intelligence together and build a stronger, data-driven political organisation.",
    challenge: "Choose Data, Win Big",
    features: [
      "Build the Winning Machine",
      "Lead with Intelligence",
      "Navigate the Noise",
    ],
  },
];

const resolveProduct = (value) => {
  if (!value) return products[0];

  const normalized = value.toLowerCase().replace(/\s+/g, "");

  if (normalized.includes("voice")) {
    return products.find((product) => product.id === "voice");
  }

  if (normalized.includes("booth")) {
    return products.find((product) => product.id === "booth");
  }

  if (normalized.includes("party") || normalized.includes("360")) {
    return products.find((product) => product.id === "party360");
  }

  return products.find((product) => product.id === "strategy");
};

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialProduct = resolveProduct(searchParams.get("product"));

  const [activeProduct, setActiveProduct] = useState(initialProduct);

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const selectorRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const selected = resolveProduct(searchParams.get("product"));

    if (selected && selected.id !== activeProduct.id) {
      setActiveProduct(selected);
    }
  }, [searchParams, activeProduct.id]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        introRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        selectorRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: selectorRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cardRef.current || !visualRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: -35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        visualRef.current,
        {
          opacity: 0,
          x: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        }
      );

      gsap.to(cardRef.current, {
        y: -12,
        rotation: 1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.65,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".product-orbit-one", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".product-orbit-two", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".product-orbit-dot", {
        rotation: 360,
        duration: 7,
        repeat: -1,
        ease: "none",
      });
    }, visualRef);

    return () => ctx.revert();
  }, [activeProduct]);

  const changeProduct = (product) => {
    if (product.id === activeProduct.id) return;

    const queryName =
      product.id === "party360" ? "PlanPol Party 360°" : product.shortName;

    const updateUrl = () => {
      setSearchParams({
        product: queryName,
      });
    };

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveProduct(product);
        updateUrl();
      },
    });

    tl.to([contentRef.current, visualRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  const handleMouseMove = (event) => {
    if (!visualRef.current || !cardRef.current) return;

    const rect = visualRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 12,
      rotateX: -y * 12,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <main className="products-page relative w-full overflow-hidden bg-white text-[#10152f]">
      {/* HERO */}
      <section ref={heroRef} className="products-hero relative flex min-h-[600px] items-center overflow-hidden bg-[radial-gradient(circle_at_75%_20%,rgba(61,105,255,0.15),transparent_35%),linear-gradient(135deg,#f8faff_0%,#eef3ff_50%,#ffffff_100%)]">
        <div className="products-hero-orb products-hero-orb-one pointer-events-none absolute right-[-120px] top-[70px] h-[430px] w-[430px] rounded-full border border-[rgba(49,91,234,0.14)] blur-[1px] shadow-[inset_0_0_100px_rgba(49,91,234,0.05),0_0_100px_rgba(49,91,234,0.08)]" />

        <div className="products-hero-orb products-hero-orb-two pointer-events-none absolute bottom-[-80px] right-[110px] h-[180px] w-[180px] rounded-full bg-[rgba(49,91,234,0.07)] blur-[30px]" />

        <div className="products-hero-inner relative z-[2] mx-auto w-[min(1180px,calc(100%-48px))] pt-[60px]">
          <div className="products-breadcrumb mb-[28px] flex items-center gap-[10px] text-[12px] font-medium uppercase tracking-[0.08em] text-[#7a8097]">
            <span>Home</span>
            <span>/</span>
            <strong className="font-bold text-[#315bea]">Products</strong>
          </div>

          <h1 className="m-0 max-w-[800px] text-[clamp(52px,7vw,92px)] font-bold leading-[0.98] tracking-[-0.055em]">
            Political Intelligence,
            <br />
            <span className="text-[#315bea]">Powered by AI.</span>
          </h1>

          <p className="mt-[34px] max-w-[580px] text-[19px] leading-[1.7] text-[#626a83]">
            Data-driven political products designed to help you understand,
            influence, and win.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section ref={introRef} className="products-intro bg-white px-0 py-[145px] pb-[120px] text-center">
        <div className="products-container mx-auto w-[min(1180px,calc(100%-48px))]">
          <span className="products-eyebrow mb-[22px] inline-block text-[11px] font-bold leading-none tracking-[0.18em] text-[#315bea]">
            OUR PRODUCTS
          </span>

          <h2 className="m-0 mx-auto text-[clamp(42px,5vw,68px)] font-bold leading-[1.04] tracking-[-0.045em]">
            Turn Data Into Your
            <br />
            <span className="text-[#315bea]">Winning Advantage</span>
          </h2>

          <p className="mx-auto mt-[30px] max-w-[650px] text-[17px] leading-[1.8] text-[#697087]">
            PlanPol brings political intelligence, technology, and strategy
            together through products built for the realities of modern
            politics.
          </p>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="products-showcase bg-white pb-[150px]">
        <div ref={selectorRef} className="products-container mx-auto w-[min(1180px,calc(100%-48px))]">
          <div className="products-selector grid grid-cols-4 gap-[10px] rounded-[20px] border border-[#e4e8f2] bg-[#f8f9fc] p-[10px] shadow-[0_20px_60px_rgba(20,35,80,0.06)]">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                className={`product-selector-button relative flex min-h-[72px] items-center justify-center gap-[12px] rounded-[13px] border-0 bg-transparent text-[14px] font-semibold text-[#70778d] transition-all duration-[350ms] ease-in-out hover:-translate-y-[2px] hover:text-[#315bea] ${activeProduct.id === product.id ? "active bg-white text-[#315bea] shadow-[0_10px_30px_rgba(26,43,90,0.09)]" : ""}`}
                aria-pressed={activeProduct.id === product.id}
                onClick={() => changeProduct(product)}
              >
                <span className="product-selector-icon inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#edf2ff] text-[15px] text-[#315bea]">
                  {product.icon}
                </span>

                <span>{product.shortName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE PRODUCT */}
        <div className="products-container product-main mx-auto grid min-h-[650px] w-[min(1180px,calc(100%-48px))] grid-cols-2 items-center gap-[90px] pt-[100px]">
          <div ref={contentRef} className="product-content max-w-[550px]">
            <span className="products-eyebrow mb-[22px] inline-block text-[11px] font-bold leading-none tracking-[0.18em] text-[#315bea]">
              {activeProduct.name}
            </span>

            <h2 className="m-0 text-[clamp(40px,5vw,64px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#11162f]">
              {activeProduct.challenge}
            </h2>

            <p className="product-description mb-[45px] mt-[30px] max-w-[510px] text-[17px] leading-[1.8] text-[#697087]">
              {activeProduct.description}
            </p>

            <div className="product-features mb-[42px] flex flex-col">
              {activeProduct.features.map((feature, index) => (
                <div
                  className="product-feature grid min-h-[62px] grid-cols-[35px_1px_1fr] items-center gap-x-[18px] border-b border-[#e8ebf3] first:border-t"
                  key={feature}
                >
                  <span className="product-feature-number text-[10px] font-bold tracking-[0.08em] text-[#315bea]">
                    0{index + 1}
                  </span>

                  <span className="product-feature-line h-[20px] w-px bg-[#d9deeb]" />

                  <span className="product-feature-text text-[14px] font-semibold text-[#323950]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/trial"
              className="product-start-button inline-flex min-w-[175px] items-center justify-center gap-[22px] rounded-[100px] bg-[#315bea] px-[24px] py-[16px] text-[13px] font-bold text-white no-underline shadow-[0_15px_35px_rgba(49,91,234,0.25)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_20px_45px_rgba(49,91,234,0.32)]"
            >
              <span>Start Trial</span>

              <span className="product-button-arrow inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.18)] text-[16px]">
                →
              </span>
            </Link>
          </div>

          {/* PRODUCT VISUAL */}
          <div
            ref={visualRef}
            className="product-visual relative flex min-h-[600px] items-center justify-center [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={glowRef}
              className="product-glow absolute h-[340px] w-[340px] rounded-full bg-[rgba(49,91,234,0.16)] blur-[65px]"
            />

            <div className="product-orbit product-orbit-one pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(49,91,234,0.18)] [transform:rotate(-20deg)]">
              <span className="product-orbit-dot dot-one absolute left-[90px] top-[24px] h-[9px] w-[9px] rounded-full bg-[#315bea] shadow-[0_0_20px_rgba(49,91,234,0.55)]" />

              <span className="product-orbit-dot dot-two absolute bottom-[95px] right-[35px] h-[9px] w-[9px] rounded-full bg-[#315bea] shadow-[0_0_20px_rgba(49,91,234,0.55)]" />
            </div>

            <div className="product-orbit product-orbit-two pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(49,91,234,0.25)] [transform:rotate(30deg)]">
              <span className="product-orbit-dot dot-three absolute bottom-[70px] left-[40px] h-[9px] w-[9px] rounded-full bg-[#315bea] shadow-[0_0_20px_rgba(49,91,234,0.55)]" />
            </div>

            <div
              ref={cardRef}
              className="product-card relative z-[3] flex aspect-[0.72] w-[min(390px,80%)] flex-col overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.25)] bg-[linear-gradient(145deg,#172348_0%,#0d1430_48%,#080c20_100%)] p-[28px] text-white shadow-[0_45px_90px_rgba(11,20,55,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] [transform-style:preserve-3d] will-change-transform before:absolute before:right-[-100px] before:top-[-100px] before:h-[230px] before:w-[230px] before:rounded-full before:bg-[rgba(49,91,234,0.3)] before:blur-[20px] after:pointer-events-none after:absolute after:inset-[15px] after:rounded-[20px] after:border after:border-[rgba(255,255,255,0.06)]"
            >
              <div className="product-card-top relative z-[2] flex items-center justify-between text-[9px] font-bold tracking-[0.15em] text-[rgba(255,255,255,0.55)]">
                <span>PLANPOL</span>

                <span className="product-card-status rounded-[100px] border border-[rgba(120,150,255,0.3)] px-[8px] py-[6px] text-[7px] text-[#9db3ff]">
                  AI POWERED
                </span>
              </div>

              <div className="product-card-icon relative z-[2] mx-auto mb-[30px] mt-auto flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[rgba(123,151,255,0.35)] bg-[radial-gradient(circle,rgba(67,105,255,0.3),rgba(67,105,255,0.04))] text-[42px] shadow-[0_0_60px_rgba(49,91,234,0.2)]">
                {activeProduct.icon}
              </div>

              <div className="product-card-title relative z-[2] text-[27px] font-bold leading-[1.1] tracking-[-0.025em]">
                {activeProduct.name}
              </div>

              <div className="product-card-subtitle relative z-[2] mt-[9px] text-[10px] text-[rgba(255,255,255,0.45)]">
                Political Intelligence Platform
              </div>

              <div className="product-card-lines relative z-[2] mt-[30px] flex gap-[6px]">
                <span className="h-[3px] w-[45%] rounded-[10px] bg-[#315bea]" />
                <span className="h-[3px] w-[30%] rounded-[10px] bg-[rgba(255,255,255,0.14)]" />
                <span className="h-[3px] w-[15%] rounded-[10px] bg-[rgba(255,255,255,0.14)]" />
              </div>

              <div className="product-card-bottom relative z-[2] mt-auto flex justify-between border-t border-[rgba(255,255,255,0.08)] pt-[25px] text-[7px] tracking-[0.15em] text-[rgba(255,255,255,0.38)]">
                <span>DATA</span>
                <span>STRATEGY</span>
                <span>AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="products-cta relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(73,109,255,0.2),transparent_45%),#0a1028] px-0 py-[150px] text-center text-white">
        <div className="products-cta-glow pointer-events-none absolute left-1/2 top-[20%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[rgba(49,91,234,0.14)] blur-[100px]" />

        <div className="products-container relative z-[2] mx-auto w-[min(1180px,calc(100%-48px))]">
          <span className="products-eyebrow mb-[22px] inline-block text-[11px] font-bold leading-none tracking-[0.18em] text-[#91a8ff]">
            READY TO GET STARTED?
          </span>

          <h2 className="m-0 text-[clamp(46px,6vw,78px)] font-bold leading-none tracking-[-0.05em]">
            Your next move
            <br />
            starts with <span className="text-[#6687ff]">data.</span>
          </h2>

          <p className="mx-auto mb-[40px] mt-[28px] max-w-[530px] text-[16px] leading-[1.7] text-[rgba(255,255,255,0.55)]">
            Experience the power of PlanPol&apos;s AI-driven political
            intelligence.
          </p>

          <Link
            to="/trial"
            className="products-cta-button inline-flex items-center justify-center gap-[18px] rounded-[100px] bg-white px-[27px] py-[17px] text-[13px] font-bold text-[#152044] no-underline transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
          >
            Start Free Trial

            <span className="inline-flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#315bea] text-white">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Products;