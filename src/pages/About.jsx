import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import SubPageHero from '../components/Sections/SubPageHero';
import ValueCard from '../components/Cards/ValueCard';
import SectionLayout from '../components/Layout/SectionLayout';
import './About.css';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);
  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const whySectionRef = useRef(null);
  const sustainabilitySectionRef = useRef(null);
  const verticalIntroRef = useRef(null);
  const valuesSectionRef = useRef(null);
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
          scrub: 1.5,
          anticipatePin: 1,
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

  // ANIMATION: Values Section
  useGSAP(() => {
    const cards = gsap.utils.toArray('.value-card-wrapper');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesSectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: valuesSectionRef });

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

      <SectionLayout ref={whySectionRef} className="why-htl-section">
        <h2 className="why-htl-title">WHY <span>HTL BIOPHARMA</span>?</h2>
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
      </SectionLayout>

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
          <div className="vertical-intro-nav">
            <button className="arrow-btn">
              <ArrowRight />
            </button>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout ref={valuesSectionRef} className="values-section">
        <h2 className="values-title">OUR VALUES</h2>
        <div className="values-grid">
          {valuesData.map((value, index) => (
            <div key={index} className="value-card-wrapper">
              <ValueCard title={value.title} description={value.description} />
            </div>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout 
        ref={sectorsSectionRef} 
        className="sectors-section" 
        fullWidth={true} 
        containerClassName="sectors-container"
      >
        <div className="sectors-left">
          <img src="/images/AboutUs/Sector%20section.png" alt="Biopharma Sector" />
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
