import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import SubPageHero from '../components/Sections/SubPageHero';
import ScrollSwapSection from '../components/Sections/ScrollSwapSection';
import SectionLayout from '../components/Layout/SectionLayout';
import TitleGroup from '../components/UI/TitleGroup';
import './About.css';

import useSEO from '../hooks/useSEO';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useSEO({
    title: 'About HTL BioPharma | Our Engineering Heritage & Leadership',
    description: 'Discover HTL BioPharma\'s heritage, specialized leadership, and single-window mission to advance regulated lifecycle infrastructure for life sciences, cosmetics, and medical devices.',
    keywords: 'HTL BioPharma legacy, biopharma engineering leadership, GMP facility partner, turnkey cleanroom experts'
  });

  const pageRef = useRef(null);
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const whySectionRef = useRef(null);
  const sustainabilitySectionRef = useRef(null);
  const verticalIntroRef = useRef(null);
  const sectorsSectionRef = useRef(null);

  const whyItems = [
    { text: "GLOBAL PARTNER", length: "40%" },
    { text: "EPC MODEL", length: "80%" },
    { text: "PROVEN EXPERIENCE OF DESIGN & ENGINEERING", length: "70%" },
    { text: "INTEGRATOR OF PROCESS, MEP & OTHER SUPPORT FUNCTION", length: "90%" },
    { text: "PROCESS KNOWHOW", length: "45%" },
    { text: "PROVEN EXPERIENCE OF GMP & REGULATORY COMPLIANCE", length: "38%" }
  ];

  const valuesData = [
    {
      title: "Safety <br />First",
      description: "Our services & works are carried out with the highest standard of safety & ethics."
    },
    {
      title: "Quality <br />Consistency",
      description: "We delivered only quality solutions, to achieve maximum purpose driven satisfactory."
    },
    {
      title: "Efficiency & <br />Proficiency",
      description: "We are committed to maximize available resources to achieve the best result collectively."
    },
    {
      title: "Engineering <br />Capabilities",
      description: "Ultra-clean fabrication facilities engineered and built to support precision semiconductor manufacturing environments."
    },
    {
      title: "Honesty and <br />Integrity",
      description: "Honesty and integrity is our core code of conduct, we foster trust, accountability, professionalism and ethical practices."
    },
    {
      title: "Pursuit of <br />Excellence",
      description: "We are devoted to achieve excellence in all our works, providing sustainable solutions to complex challenges."
    }
  ];

  const sectors = [
    { name: "Pharmaceuticals", path: "/pharmaceuticals" },
    { name: "BioPharma & Life Sciences", path: "/biopharmaceuticals" },
    { name: "Medical Devices", path: "/medical-devices" },
    { name: "Cosmetic & Personal Care", path: "/cosmetics" },
    { name: "Industrial Application", path: "/industrial-appliances" }
  ];

  // Handle layout-settle ScrollTrigger refresh
  useGSAP(() => {
    const refreshTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshTrigger);
    
    const timer1 = setTimeout(refreshTrigger, 200);
    const timer2 = setTimeout(refreshTrigger, 1000);
    const timer3 = setTimeout(refreshTrigger, 2000);

    return () => {
      window.removeEventListener('load', refreshTrigger);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  });

  // ANIMATION: Global Background Transition
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: verticalIntroRef.current,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => gsap.to(pageRef.current, { backgroundColor: '#000000', duration: 1, ease: 'power2.inOut' }),
      onLeaveBack: () => gsap.to(pageRef.current, { backgroundColor: '#ffffff', duration: 1, ease: 'power2.inOut' }),
      onLeave: () => gsap.to(pageRef.current, { backgroundColor: '#ffffff', duration: 1, ease: 'power2.inOut' }),
      onEnterBack: () => gsap.to(pageRef.current, { backgroundColor: '#000000', duration: 1, ease: 'power2.inOut' }),
    });
  }, { scope: pageRef });

  // ANIMATION: Mission & Vision Pinning
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop only: Pin and animate slide transitions
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          pinType: 'transform',
          scrub: 1.5,
        }
      });

      gsap.set(visionRef.current, { autoAlpha: 0, y: 30 });
      gsap.set(missionRef.current, { autoAlpha: 1, y: 0 });

      tl.to({}, { duration: 0.5 })
        .to(missionRef.current, { 
          autoAlpha: 0, 
          y: -30, 
          duration: 1,
          ease: "power2.inOut",
        })
        .to(visionRef.current, { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1,
          ease: "power2.out"
        }, "-=0.3")
        .to({}, { duration: 0.5 });
    });

    // Mobile & Tablet: display naturally stacked as relative blocks
    mm.add("(max-width: 1024px)", () => {
      gsap.set(visionRef.current, { autoAlpha: 1, y: 0, clearProps: "all" });
      gsap.set(missionRef.current, { autoAlpha: 1, y: 0, clearProps: "all" });
    });

    return () => mm.revert();
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
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
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

  // Values Section uses ScrollSwapSection which manages its own presentation and layout

  // ANIMATION: Sectors Section
  useGSAP(() => {
    const left = sectorsSectionRef.current.querySelector('.sectors-left');
    const img = left.querySelector('img');
    const items = gsap.utils.toArray('.sector-item');

    gsap.fromTo(left, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectorsSectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(items, 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectorsSectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax on image
    gsap.to(img, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectorsSectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: sectorsSectionRef });

  return (
    <div className="about-page" ref={pageRef}>
      <SubPageHero 
        title="Engineering High-Quality, Affordable Healthcare Infrastructure"
        subtitle="Optimised. Compliant. Future-ready Solutions"
        backgroundImage={`${import.meta.env.BASE_URL}images/AboutUs/Header.png`}
      />

      <div className="mission-vision-scroll-wrapper" ref={containerRef}>
        <div className="mission-vision-slide" ref={missionRef}>
          <div className="mission-vision-container mission-slide-layout">
            <div className="mission-vision-content">
              <span className="section-label">MISSION</span>
              <p className="section-text">
                To be an eminent force in turnkey engineering services across
                India and the global, delivering the <span className="highlight">Highest Quality Standards</span> through unwavering commitment to our core <span className="highlight">Values & Integrity</span>.
              </p>
            </div>
            <div className="mission-vision-image">
              <img src={`${import.meta.env.BASE_URL}images/AboutUs/Vision%20Victor.png`} alt="Mission Target" />
            </div>
          </div>
        </div>

        <div className="mission-vision-slide vision-slide-absolute" ref={visionRef}>
          <div className="mission-vision-container vision-slide-layout">
            <div className="mission-vision-content">
              <span className="section-label">VISION</span>
              <p className="section-text">
                To revolutionise BioPharma infrastructure through <span className="highlight">Intelligent Value Engineering</span> ensuring that every project we deliver is <strong className="text-black">Optimized, Compliant & Future-ready</strong>.
              </p>
            </div>
            <div className="mission-vision-image">
              <img src={`${import.meta.env.BASE_URL}images/AboutUs/Mission%20Victor.png`} alt="Vision Lightbulb" />
            </div>
          </div>
        </div>
      </div>

      <SectionLayout ref={whySectionRef} className="why-htl-section" fullWidth={true}>
        <div className="why-htl-container">
          <TitleGroup 
            title="Why HTL BioPharma?" 
            subtitle="Our Strengths" 
            dark={true}
            className="!mb-16"
          />
          <div className="why-list">
            {whyItems.map((item, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');
              return (
                <div key={index} className="why-item">
                  <div className="why-text-wrapper">
                    <span className="why-number">{displayIndex}</span>
                    <p className="why-text">{item.text}</p>
                  </div>
                  <div className="why-line-wrapper">
                    <div className="why-line"></div>
                    <div className="why-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionLayout>

      <section 
        className="sustainability-section" 
        ref={sustainabilitySectionRef}
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/sustainability/Sustainability-Header.jpg)` }}
      >
        <div className="sustainability-overlay"></div>
        <div className="sustainability-content">
          <h2 className="sustainability-title">
            Read our take on
            <span>Sustainability</span>
          </h2>
          <Link to="/sustainability" className="read-more-link">READ MORE</Link>
        </div>
      </section>

      <SectionLayout ref={verticalIntroRef} className="vertical-intro-section">
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
         
        </div>
      </SectionLayout>

      <ScrollSwapSection 
        title="Our Core Values" 
        subtitle="Our Values" 
        items={valuesData} 
      />

      <SectionLayout 
        ref={sectorsSectionRef} 
        className="sectors-section" 
        fullWidth={true} 
        containerClassName="sectors-container"
      >
        <div className="sectors-left">
          <img src={`${import.meta.env.BASE_URL}images/AboutUs/Sector%20section.png`} alt="Biopharma Sector" />
        </div>
        <div className="sectors-right">
          <h4 className="sectors-label">SECTORS</h4>
          <div className="sectors-list">
            {sectors.map((sector, index) => (
              <Link to={sector.path} key={index} className="sector-item group block">
                <h3>{sector.name}</h3>
                <div className="sector-arrow">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default About;
