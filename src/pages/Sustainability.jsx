import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Check } from 'lucide-react';
import SubPageHero from '../components/Sections/SubPageHero';
import SectionLayout from '../components/Layout/SectionLayout';
import CTA from '../components/Sections/CTA';
import './Sustainability.css';

import useSEO from '../hooks/useSEO';

gsap.registerPlugin(ScrollTrigger);

const Sustainability = () => {
  useSEO({
    title: 'Engineering Sustainable Infrastructure & Green Utilities',
    description: 'Delivering environmentally responsible pharmaceutical and biotech infrastructure. We engineer optimized water recycling loops, ZLD, solar integration, and low-carbon operational footprint.',
    keywords: 'sustainable pharma facility, green utility engineering, zero liquid discharge, solar utility integration, carbon reduction lifescientific'
  });

  const containerRef = useRef(null);
  const contentSectionRef = useRef(null);
  const globeRef = useRef(null);
  const rightContentRef = useRef(null);

  useGSAP(() => {
    // Globe entrance animation
    gsap.fromTo(globeRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: 1
        }
      }
    );

    // Right content cascade animations
    const children = rightContentRef.current?.children;
    if (children) {
      const itemsToAnimate = Array.from(children);
      gsap.fromTo(itemsToAnimate,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentSectionRef.current,
            start: 'top 85%',
            end: 'top 25%',
            scrub: 1
          }
        }
      );
    }

    // LAYOUT STABILIZER: Recalculate ScrollTrigger on image loads and window events (Lenis & GSAP alignment)
    const images = containerRef.current?.querySelectorAll('img');
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount >= images.length) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    if (images && images.length > 0) {
      images.forEach(img => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad);
        }
      });
    }

    const handleResizeOrLoad = () => {
      ScrollTrigger.refresh();
    };

    // Safe delayed refresh on mount to let sibling components (ScrollSwapSection etc.) register first
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    window.addEventListener('load', handleResizeOrLoad);
    window.addEventListener('resize', handleResizeOrLoad);

    return () => {
      clearTimeout(initTimeout);
      if (images) {
        images.forEach(img => {
          img.removeEventListener('load', handleImageLoad);
          img.removeEventListener('error', handleImageLoad);
        });
      }
      window.removeEventListener('load', handleResizeOrLoad);
      window.removeEventListener('resize', handleResizeOrLoad);
    };
  }, { scope: containerRef });

  const bulletPoints = [
    "Optimised facility footprint and sustainable construction materials",
    "Energy-efficient equipment to reduce operational demand",
    "Water recycling loops, rainwater harvesting, and Zero Liquid Discharge (ZLD) systems",
    "Use of natural gas over heavier fuels to reduce emissions",
    "Integration of solar energy to lower grid dependency and lifecycle carbon footprint",
    "Promotion of biodegradable materials and reduction of single-use plastics (where process integrity permits)",
    "Air and gas pollution control systems to maintain emissions within environmental limits"
  ];

  return (
    <div className="sustainability-page" ref={containerRef}>
      <SubPageHero 
        title="Engineering Sustainable Pharmaceutical Infrastructure"
        subtitle="From engineering to delivery, optimising energy, water, waste, and carbon while maintaining uncompromising regulatory compliance."
        backgroundImage={`${import.meta.env.BASE_URL}images/sustainability/Sustainability- Header.jpg`}
      />

      <SectionLayout ref={contentSectionRef} className="sus-content-section" fullWidth={true}>
        <div className="sus-container">
          {/* Left Column: Visual vector */}
          <div className="sus-left">
            <div className="sus-globe-wrapper" ref={globeRef}>
              <div className="sus-globe-glow"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/sustainability/vector.png`} 
                alt="Sustainability Globe Vector" 
                className="sus-globe-img"
              />
            </div>
          </div>

          {/* Right Column: Detailed narrative & checklist */}
          <div className="sus-right" ref={rightContentRef}>
            <p className="sus-intro-para">
              At <strong>HTL Biopharma</strong>, sustainability is engineered into every facility—not added later. We design pharmaceutical and biotech infrastructure to be environmentally responsible while fully compliant with global regulatory standards. From early stages, we evaluate energy, water, waste, and carbon footprint—driving deliberate engineering and project management decisions.
            </p>

            <div className="sus-bullets-list">
              {bulletPoints.map((text, index) => (
                <div key={index} className="sus-bullet-item">
                  <div className="sus-bullet-icon-box">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="sus-bullet-text">{text}</span>
                </div>
              ))}
            </div>

            <div className="sus-closing-box">
              <p className="sus-closing-text">
                At HTL Biopharma, delivering world-class regulated facilities and building sustainable infrastructure is one unified ambition—ensuring long-term environmental responsibility alongside operational excellence.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <CTA />
    </div>
  );
};

export default Sustainability;
