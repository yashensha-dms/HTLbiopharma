import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './InnerPageHero.css';

gsap.registerPlugin(ScrollTrigger);

const InnerPageHero = ({ title, subtitle, bgImage }) => {
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Parallax effect for background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Fade in text animations
    gsap.fromTo(contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.1,
        onComplete: () => ScrollTrigger.refresh()
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="inner-hero" ref={sectionRef}>
      <div className="inner-hero-bg" ref={bgRef}>
        <img src={bgImage} alt="Hero Background" />
      </div>
      <div className="inner-hero-overlay"></div>
      
      <div className="inner-hero-content" ref={contentRef}>
        <h1 className="inner-hero-title">{title}</h1>
        <p className="inner-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default InnerPageHero;
