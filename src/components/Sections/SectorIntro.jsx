import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionLayout from '../Layout/SectionLayout';
import './SectorIntro.css';

gsap.registerPlugin(ScrollTrigger);

const SectorIntro = ({ image, paragraphs }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Image zoom effect on scroll
    gsap.to(imageRef.current, {
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 10%",
        scrub: 1
      }
    });

    // Text fade up
    gsap.fromTo(textRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <SectionLayout ref={sectionRef} className="sector-intro-wrapper">
      <div className="sector-intro">
        <div className="sector-intro-container">
          <div className="sector-intro-image-wrapper">
            <img 
              ref={imageRef}
              src={image} 
              alt="Sector Overview" 
              className="sector-intro-image"
            />
          </div>
          
          <div className="sector-intro-content" ref={textRef}>
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default SectorIntro;
