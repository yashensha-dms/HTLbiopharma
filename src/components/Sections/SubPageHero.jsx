import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './SubPageHero.css';

const SubPageHero = ({ title, subtitle, backgroundImage, image }) => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const bgImage = backgroundImage || image;

  // ANIMATION: Premium Reveal & Zoom Parallax
  useGSAP(() => {
    // Mount text fade-in
    gsap.fromTo('.subpage-hero-title', 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out', delay: 0.2 }
    );
    gsap.fromTo('.subpage-hero-subtitle', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'power4.out', delay: 0.45 }
    );

    // Scroll parallax zoom out
    gsap.fromTo(bgRef.current,
      { scale: 1.15, yPercent: 0 },
      {
        scale: 1.0,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }, { scope: heroRef });

  return (
    <section className="subpage-hero" ref={heroRef}>
      {/* Absolute Parallax Background */}
      <div 
        className="subpage-hero-bg" 
        ref={bgRef}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Overlay & Content Container */}
      <div className="subpage-hero-overlay">
        <div className="container-custom w-full">
          <div className="subpage-hero-content">
            <h1 className="subpage-hero-title">{title}</h1>
            <p className="subpage-hero-subtitle">
              <span className="subtitle-decor"></span>
              <span className="subtitle-text">{subtitle}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
