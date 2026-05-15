import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import SubPageHero from '../components/Sections/SubPageHero';
import Footer from '../components/Layout/Footer';
import './About.css';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const whySectionRef = useRef(null);
  const sustainabilitySectionRef = useRef(null);
  const verticalIntroRef = useRef(null);

  const whyItems = [
    { text: "GLOBAL PARTNER", length: "40%" },
    { text: "EPC MODEL", length: "80%" },
    { text: "PROVEN EXPERIENCE OF DESIGN & ENGINEERING", length: "70%" },
    { text: "INTEGRATOR OF PROCESS, MEP & OTHER SUPPORT FUNCTION", length: "90%" },
    { text: "PROCESS KNOWHOW", length: "45%" },
    { text: "PROVEN EXPERIENCE OF GMP & REGULATORY COMPLIANCE", length: "38%" }
  ];

  // ANIMATION: Mission & Vision Pinning
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 64px',
        end: '+=250%',
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
      }
    });

    gsap.set(visionRef.current, { opacity: 0, y: 30, visibility: 'hidden' });

    tl.to({}, { duration: 0.5 })
      .to(missionRef.current, { 
        opacity: 0, 
        y: -30, 
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => gsap.set(missionRef.current, { visibility: 'hidden' }),
        onReverseComplete: () => gsap.set(missionRef.current, { visibility: 'visible' })
      })
      .to(visionRef.current, { 
        visibility: 'visible',
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power2.out"
      }, "-=0.3")
      .to({}, { duration: 0.5 });
  }, { scope: containerRef });

  // ANIMATION: Why HTL Section List
  useGSAP(() => {
    const whyItemsElements = gsap.utils.toArray('.why-item');
    
    whyItemsElements.forEach((item, index) => {
      const line = item.querySelector('.why-line');
      const dot = item.querySelector('.why-dot');
      const text = item.querySelector('.why-text');
      const targetLength = whyItems[index].length;

      const whyTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      whyTl.fromTo(text, 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(line, 
        { width: "0%" },
        { width: targetLength, duration: 1.2, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(dot, 
        { left: "0%", opacity: 0 },
        { left: targetLength, opacity: 1, duration: 1.2, ease: "power3.out" },
        "<"
      );
    });
  }, { scope: whySectionRef });

  // ANIMATION: Sustainability Section
  useGSAP(() => {
    const content = sustainabilitySectionRef.current.querySelector('.sustainability-content');
    
    gsap.fromTo(content, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sustainabilitySectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: sustainabilitySectionRef });

  // ANIMATION: Vertical Intro Section
  useGSAP(() => {
    const text = verticalIntroRef.current.querySelector('.vertical-intro-text');
    const nav = verticalIntroRef.current.querySelector('.vertical-intro-nav');

    gsap.fromTo(text, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: verticalIntroRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(nav, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: verticalIntroRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: verticalIntroRef });

  return (
    <div className="about-page">
      <SubPageHero 
        title="Engineering High-Quality, Affordable Healthcare Infrastructure"
        subtitle="Optimised. Compliant. Future-ready Solutions"
        backgroundImage="/images/AboutUs/Header.png"
      />

      <div className="mission-vision-scroll-wrapper" ref={containerRef}>
        <div className="mission-vision-slide" ref={missionRef}>
          <div className="mission-vision-container mission-slide-layout">
            <div className="mission-vision-content">
              <h4 className="section-label">MISSION</h4>
              <p className="section-text">
                To be an eminent force in turnkey engineering services across India and
                the global, delivering the Highest Quality Standards through
                unwavering commitment to our core Values & Integrity
              </p>
            </div>
            <div className="mission-vision-image">
              <img src="/images/AboutUs/Mission%20Victor.png" alt="Mission Target" />
            </div>
          </div>
        </div>

        <div className="mission-vision-slide vision-slide-absolute" ref={visionRef}>
          <div className="mission-vision-container vision-slide-layout">
            <div className="mission-vision-content">
              <h4 className="section-label">VISION</h4>
              <p className="section-text">
                To revolutionise BioPharma infrastructure through Intelligent
                Value Engineering ensuring that every project we deliver is
                Optimized, Compliant & Future-ready.
              </p>
            </div>
            <div className="mission-vision-image">
              <img src="/images/AboutUs/Vision%20Victor.png" alt="Vision Lightbulb" />
            </div>
          </div>
        </div>
      </div>

      <section className="why-htl-section" ref={whySectionRef}>
        <div className="why-htl-container">
          <h2 className="why-htl-title">WHY <span>HTL BIOPHARMA</span>?</h2>
        </div>
        
        <div className="why-list">
          {whyItems.map((item, index) => (
            <div key={index} className="why-item">
              <p className="why-text">{item.text}</p>
              <div className="why-line-wrapper">
                <div className="why-line"></div>
                <div className="why-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="sustainability-section" 
        ref={sustainabilitySectionRef}
        style={{ backgroundImage: 'url("/images/Sustainability/Sustainability-%20Header.jpg")' }}
      >
        <div className="sustainability-overlay"></div>
        <div className="sustainability-content">
          <h2 className="sustainability-title">
            Read our take on
            <span>Sustainability</span>
          </h2>
          <a href="#" className="read-more-link">READ MORE</a>
        </div>
      </section>

      <section className="vertical-intro-section" ref={verticalIntroRef}>
        <div className="vertical-intro-container">
          <div className="vertical-intro-text">
            <p>
              <strong>HTL BioPharma</strong> is a specialised vertical of <span className="red-text">HTL</span>, 
              dedicated to regulatory-driven, controlled clean environments across 
              pharmaceuticals, biotechnology, personal care, cosmetics, and 
              allied sectors. Backed by three decades of engineering and 
              project management excellence, it combines proven delivery, 
              compliance expertise, and a people-first culture to build trusted, 
              future-ready GMP facilities and mission-critical infrastructure.
            </p>

<div className="flex flex-col gap-5">
            {/* <a href="#" className="read-more-link">READ MORE</a> */}
             <button className="arrow-btn">
              <ArrowRight />
            </button>
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
