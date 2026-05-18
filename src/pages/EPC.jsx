import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SubPageHero from '../components/Sections/SubPageHero';
import ScrollSwapSection from '../components/Sections/ScrollSwapSection';
import SectionLayout from '../components/Layout/SectionLayout';
import './EPC.css';

gsap.registerPlugin(ScrollTrigger);

const epcExcellenceItems = [
  {
    title: 'Operational<br/>Efficiency',
    description: 'Optimized workflows and resource management to ensure maximum productivity in regulated environments.'
  },
  {
    title: 'Regulatory<br/>Compliance',
    description: 'Strict adherence to global GMP, ASME-BPE, and local standards for full facility validation.'
  },
  {
    title: 'Risk<br/>Mitigation',
    description: 'Proactive identification and handling of potential bottlenecks through HAZOP and FMEA analysis.'
  },
  {
    title: 'Cost<br/>Management',
    description: 'Transparent budget control and procurement strategies to deliver value without quality compromise.'
  },
  {
    title: 'Accelerated<br/>Timelines',
    description: 'Concurrent engineering and construction phases to reduce time-to-market for critical facilities.'
  },
  {
    title: 'Integrated<br/>Quality',
    description: 'Holistic quality control embedded in every phase, from basic design to final commissioning.'
  },
  {
    title: 'Safety<br/>First',
    description: 'Rigorous site safety protocols and hazardous area design to protect people and assets.'
  },
  {
    title: 'Sustainable<br/>Design',
    description: 'Energy-efficient utilities and sustainable material choices for long-term operational viability.'
  },
  {
    title: 'Lifecycle<br/>Support',
    description: 'Comprehensive documentation and handover packages for long-term maintenance and support.'
  },
  {
    title: 'Advanced<br/>Modeling',
    description: 'High-fidelity 3D walkthroughs and digital twins for design clarity and operational training.'
  },
  {
    title: 'Vendor<br/>Management',
    description: 'Single-point coordination of global supply chains and technical FAT/SAT execution.'
  },
  {
    title: 'Seamless<br/>Handover',
    description: 'Structured transfer of ownership with complete MIS reporting and qualification readiness.'
  }
];

const EPC = () => {
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const valueRef = useRef(null);
  const detailRef = useRef(null);
  const multiRef = useRef(null);
  const vmodelRef = useRef(null);
  const approachRef = useRef(null);
  const disciplineRef = useRef(null);

  useGSAP(() => {
    // Intro Section
    const introItems = gsap.utils.toArray('.epc-intro-content > *');
    gsap.fromTo(introItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );

    // Value Section
    const valueItems = gsap.utils.toArray('.value-text-line');
    gsap.fromTo(valueItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: valueRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        }
      }
    );

    // Detail Section
    const detailItems = gsap.utils.toArray('.detail-narrative-p');
    gsap.fromTo(detailItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        }
      }
    );

    // Multi-disciplinary Section
    const multiImage = multiRef.current?.querySelector('.multi-image-box');
    const multiContent = multiRef.current?.querySelector('.multi-content-box');
    const multiBullets = multiRef.current?.querySelectorAll('.multi-bullet');

    if (multiImage) {
      gsap.fromTo(multiImage,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: multiRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );
    }

    if (multiContent) {
      gsap.fromTo([multiContent, ...multiBullets],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: multiRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );
    }

    // V-Model Section
    const vSteps = vmodelRef.current?.querySelectorAll('.v-step');
    const vLinks = vmodelRef.current?.querySelectorAll('.v-link');
    const vMainPath = vmodelRef.current?.querySelector('.v-main-path');

    if (vMainPath) {
      gsap.fromTo(vMainPath,
        { strokeDashoffset: 1200, strokeDasharray: 1200 },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: vmodelRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5,
          }
        }
      );
    }

    if (vSteps) {
      gsap.fromTo(vSteps,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: vmodelRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );
    }

    if (vLinks) {
      gsap.fromTo(vLinks,
        { strokeDashoffset: 100, strokeDasharray: 100, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.3,
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: vmodelRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );
    }

    // Approach Banner Section
    const approachContent = approachRef.current?.querySelectorAll('.approach-content > *');
    if (approachContent) {
      gsap.fromTo(approachContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: approachRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      );
    }

    // Discipline Section
    const disciplineItems = disciplineRef.current?.querySelectorAll('.discipline-item');
    if (disciplineItems) {
      gsap.fromTo(disciplineItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: disciplineRef.current,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,
          }
        }
      );
    }

    // Global Scroll Snapping for sections
    const sectionsCount = gsap.utils.toArray('section').length + 1; // +1 for the hero
    
    ScrollTrigger.create({
      trigger: ".epc-page",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / (sectionsCount - 1),
        duration: { min: 0.2, max: 0.8 },
        delay: 0.1,
        ease: "power2.inOut"
      }
    });

    // Refresh after layout settles
    const refreshTrigger = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshTrigger);
    setTimeout(refreshTrigger, 1000);

    return () => {
      window.removeEventListener('load', refreshTrigger);
    };
  }, { scope: containerRef });

  return (
    <div className="epc-page" ref={containerRef}>
      <SubPageHero 
        title="Delivering Integrated EPC excellence for Regulated Facilities"
        subtitle="Single-window EPC partner with Holistic Ownership, Accountability, and Integrated execution."
        backgroundImage="/images/EPC/EPC%20Header%20Image.png"
      />

      <SectionLayout ref={introRef} className="epc-intro-section">
        <div className="epc-intro-content">
          <h4 className="epc-label">INTEGRATED EPC</h4>
          <h2 className="epc-narrative">
            We provide <span className="red-text">end-to-end</span> engineering, 
            procurement, and construction solutions specifically designed for 
            <span className="red-text">regulated environments</span>. Our holistic 
            approach ensures compliance, efficiency, and seamless execution from 
            initial design to final validation.
          </h2>
        </div>
      </SectionLayout>

      <SectionLayout ref={valueRef} className="epc-value-section" containerClassName="flex flex-col items-center text-center">
        <div className="value-content">
          <h1 className="value-text-line">One partner.</h1>
          <h1 className="value-text-line">One responsibility.</h1>
          <h1 className="value-text-line brand-highlight">HTL Biopharma.</h1>
        </div>
      </SectionLayout>

      <SectionLayout ref={multiRef} className="epc-multi-section" containerClassName="flex flex-col md:flex-row items-center gap-20">
        <div className="multi-image-box flex-1 h-[70vh]">
          <img 
            src="/images/EPC/ChatGPT Image May 4, 2026, 01_19_11 PM.png" 
            alt="Facility Model" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        </div>
        <div className="multi-content-box flex-1">
          <p className="multi-desc mb-10 text-xl leading-relaxed text-gray-600">
            HTL Biopharma delivers fully integrated EPC solutions for regulated life sciences facilities, combining multidisciplinary engineering with disciplined execution. As a single-window EPC partner, we take full ownership—from Engineering adoption to qualification, handover, and commercial readiness.
          </p>
          
          <ul className="multi-bullets text-xl flex flex-col gap-6">
            {[
              "Early engagement ensures viability, sustainability, and constructability",
              "Integrated execution covers design, detailed engineering, procurement, FAT, supply, construction, installation, commissioning, trials, and qualification",
              "Delivery aligns with timelines, budget, and quality standards",
              "Scope includes project planning, civil coordination, procurement, and resource deployment",
              "Commissioning, qualification documentation, MIS reporting, handover packages, and as-built drawings are delivered",
              "Site safety protocols are strictly maintained"
            ].map((bullet, idx) => (
              <li key={idx} className="multi-bullet flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                <span className="text-gray-700 font-light leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionLayout>

      <SectionLayout ref={detailRef} className="epc-multi-section" containerClassName="flex flex-col items-center text-center">
        <div className="detail-narrative-box">
          <p className="detail-narrative-p text-2xl mb-4">
            We act as the client's representative, ensuring seamless coordination across quality, cost, and schedule with single-point accountability.
          </p>
          <p className="detail-narrative-p text-2xl mb-4">
            Process engineering is central—covering PFDs, P&IDs, equipment sizing, CIP/SIP, and ATEX under GMP and ASME-BPE standards, along with hazardous area design and explosion safety.
          </p>
          <p className="detail-narrative-p text-2xl mb-4">
            Through HAZOP, HAZSCAN, FMEA, and Fault Tree Analysis, we ensure risk mitigation and qualification readiness.
          </p>
          <p className="detail-narrative-p text-2xl mb-4">
            Supported by 3D modelling and virtual walkthroughs, we enable design clarity, regulatory compliance, and accelerated facility readiness.
          </p>
        </div>
      </SectionLayout>

      <SectionLayout ref={vmodelRef} className="epc-vmodel-section" containerClassName="flex flex-col lg:flex-row items-center gap-10">
        <div className="vmodel-diagram-box flex-1 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[650px] aspect-[4/3]">
            <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl">
              <line x1="70" y1="80" x2="430" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" className="v-link" />
              <line x1="120" y1="160" x2="380" y2="160" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" className="v-link" />
              <line x1="170" y1="240" x2="330" y2="240" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" className="v-link" />
              <line x1="220" y1="320" x2="280" y2="320" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4" className="v-link" />

              <path 
                d="M70 80 L250 360 L430 80" 
                fill="none" 
                stroke="#1a1a1a" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="v-main-path"
              />
              
              <g className="v-step">
                <circle cx="70" cy="80" r="6" fill="#1a1a1a" />
                <text x="60" y="70" textAnchor="end" className="v-node-label font-bold fill-gray-900">URS</text>
              </g>
              <g className="v-step">
                <circle cx="120" cy="160" r="6" fill="#1a1a1a" />
                <text x="110" y="150" textAnchor="end" className="v-node-label font-bold fill-gray-900">Basic Design</text>
              </g>
              <g className="v-step">
                <circle cx="170" cy="240" r="6" fill="#1a1a1a" />
                <text x="160" y="230" textAnchor="end" className="v-node-label font-bold fill-gray-900">Detailed Design</text>
              </g>
              <g className="v-step">
                <circle cx="220" cy="320" r="6" fill="#1a1a1a" />
                <text x="210" y="310" textAnchor="end" className="v-node-label font-bold fill-gray-900">DQ</text>
              </g>

              <g className="v-step">
                <circle cx="280" cy="320" r="6" fill="#ef4444" />
                <text x="290" y="310" textAnchor="start" className="v-node-label font-bold fill-red-600">IQ</text>
              </g>
              <g className="v-step">
                <circle cx="330" cy="240" r="6" fill="#ef4444" />
                <text x="340" y="230" textAnchor="start" className="v-node-label font-bold fill-red-600">OQ</text>
              </g>
              <g className="v-step">
                <circle cx="380" cy="160" r="6" fill="#ef4444" />
                <text x="390" y="150" textAnchor="start" className="v-node-label font-bold fill-red-600">PQ</text>
              </g>
              <g className="v-step">
                <circle cx="430" cy="80" r="6" fill="#ef4444" />
                <text x="420" y="70" textAnchor="start" className="v-node-label font-bold fill-red-600">Validation</text>
              </g>
            </svg>

            <div className="strategy-row flex justify-center gap-6 mt-16">
              {['Conceptualisation', 'Construction', 'Verification'].map((text, i) => (
                <div key={i} className="strategy-card flex-1 bg-white border border-gray-100 shadow-xl py-4 px-2 text-center rounded-lg transition-all hover:bg-red-50 group">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-red-600 transition-colors">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="vmodel-content-box flex-1 lg:pl-24">
          <h2 className="v-title text-7xl font-light mb-8 leading-none">V MODEL <br/><span className="text-red-600 font-bold">PHILOSOPHY</span></h2>
          <p className="v-desc text-xl font-light leading-relaxed text-gray-700">
            A holistic commissioning and qualification execution model. We ensure systems, utilities, and processes are fully tested and compliant.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="stat-item">
              <h4 className="text-3xl font-bold text-gray-900">100%</h4>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Regulatory Compliance</p>
            </div>
            <div className="stat-item">
              <h4 className="text-3xl font-bold text-gray-900">Zero</h4>
              <p className="text-sm text-gray-500 uppercase tracking-tighter">Validation Gaps</p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="epc-approach-banner" ref={approachRef}>
        <div className="approach-banner-inner">
          <img 
            src="/images/EPC/approach_bg.png" 
            alt="Our Approach" 
            className="approach-bg-img"
          />
          <div className="approach-overlay">
            <div className="container-custom">
              <div className="approach-content">
                <h2 className="approach-title">
                  Know about <br />
                  <span className="font-bold">our approach</span>
                </h2>
                <a href="/approach" className="approach-link">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollSwapSection 
        title="Integrated EPC <br/> Excellence" 
        subtitle="Why Partner with HTL?" 
        items={epcExcellenceItems} 
      />

      <SectionLayout ref={disciplineRef} className="epc-discipline-section">
        <div className="mb-16">
          <h4 className="discipline-label text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">VARIOUS DISCIPLINE</h4>
          <div className="w-12 h-[2px] bg-brand-red"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
          {[
            "Process equipment",
            "Integrated Clean rooms",
            "HVAC System",
            "Electricals’s system",
            "ELVS & BMS / EMS",
            "Plant Automation",
            "Mechanical & Utility system",
            "Piping",
            "GMP drain system",
            "Fire fighting system",
            "ETP/ Biokill system",
            "Warehouse / cold rooms",
            "Laboratory"
          ].map((item, idx) => (
            <div key={idx} className="discipline-item group">
              <div className="flex items-center justify-between py-4 border-b border-gray-100 group-hover:border-brand-red/30 transition-all duration-500 cursor-pointer">
                <span className="text-2xl font-light text-gray-800 group-hover:text-gray-900 group-hover:translate-x-2 transition-all duration-500">
                  {item}
                </span>
                <div className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#ff2b2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default EPC;
