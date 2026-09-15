import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Products.css";

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

  if (
    normalized.includes("party") ||
    normalized.includes("360")
  ) {
    return products.find((product) => product.id === "party360");
  }

  return products.find((product) => product.id === "strategy");
};

const Products = () => {
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
  }, [searchParams]);

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
      product.id === "party360"
        ? "PlanPol Party 360°"
        : product.shortName;

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

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

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
    <main className="products-page">

      {/* HERO */}
      <section
        ref={heroRef}
        className="products-hero"
      >
        <div className="products-hero-orb products-hero-orb-one" />
        <div className="products-hero-orb products-hero-orb-two" />

        <div className="products-hero-inner">

          <div className="products-breadcrumb">
            <span>Home</span>
            <span>/</span>
            <strong>Products</strong>
          </div>

          <h1>
            Political Intelligence,
            <br />
            <span>Powered by AI.</span>
          </h1>

          <p>
            Data-driven political products designed to help
            you understand, influence, and win.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section
        ref={introRef}
        className="products-intro"
      >
        <div className="products-container">

          <span className="products-eyebrow">
            OUR PRODUCTS
          </span>

          <h2>
            Turn Data Into Your
            <br />
            <span>Winning Advantage</span>
          </h2>

          <p>
            PlanPol brings political intelligence,
            technology, and strategy together through
            products built for the realities of modern
            politics.
          </p>

        </div>
      </section>

      {/* PRODUCT SELECTOR */}
      <section className="products-showcase">

        <div
          ref={selectorRef}
          className="products-container"
        >

          <div className="products-selector">

            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                className={`product-selector-button ${
                  activeProduct.id === product.id
                    ? "active"
                    : ""
                }`}
                aria-pressed={
                  activeProduct.id === product.id
                }
                onClick={() => changeProduct(product)}
              >
                <span className="product-selector-icon">
                  {product.icon}
                </span>

                <span>
                  {product.shortName}
                </span>
              </button>
            ))}

          </div>

        </div>

        {/* ACTIVE PRODUCT */}
        <div className="products-container product-main">

          <div
            ref={contentRef}
            className="product-content"
          >

            <span className="products-eyebrow">
              {activeProduct.name}
            </span>

            <h2>
              {activeProduct.challenge}
            </h2>

            <p className="product-description">
              {activeProduct.description}
            </p>

            <div className="product-features">

              {activeProduct.features.map(
                (feature, index) => (
                  <div
                    className="product-feature"
                    key={feature}
                  >
                    <span className="product-feature-number">
                      0{index + 1}
                    </span>

                    <span className="product-feature-line" />

                    <span className="product-feature-text">
                      {feature}
                    </span>
                  </div>
                )
              )}

            </div>

            <Link
              to="/trial"
              className="product-start-button"
            >
              <span>Start Trial</span>
              <span className="product-button-arrow">
                →
              </span>
            </Link>

          </div>

          {/* PRODUCT VISUAL */}
          <div
            ref={visualRef}
            className="product-visual"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            <div
              ref={glowRef}
              className="product-glow"
            />

            <div className="product-orbit product-orbit-one">
              <span className="product-orbit-dot dot-one" />
              <span className="product-orbit-dot dot-two" />
            </div>

            <div className="product-orbit product-orbit-two">
              <span className="product-orbit-dot dot-three" />
            </div>

            <div
              ref={cardRef}
              className="product-card"
            >

              <div className="product-card-top">
                <span>PLANPOL</span>

                <span className="product-card-status">
                  AI POWERED
                </span>
              </div>

              <div className="product-card-icon">
                {activeProduct.icon}
              </div>

              <div className="product-card-title">
                {activeProduct.name}
              </div>

              <div className="product-card-subtitle">
                Political Intelligence Platform
              </div>

              <div className="product-card-lines">

                <span />
                <span />
                <span />

              </div>

              <div className="product-card-bottom">

                <span>
                  DATA
                </span>

                <span>
                  STRATEGY
                </span>

                <span>
                  AI
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="products-cta"
      >

        <div className="products-cta-glow" />

        <div className="products-container">

          <span className="products-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            Your next move
            <br />
            starts with <span>data.</span>
          </h2>

          <p>
            Experience the power of PlanPol's
            AI-driven political intelligence.
          </p>

          <Link
            to="/trial"
            className="products-cta-button"
          >
            Start Free Trial
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Products;