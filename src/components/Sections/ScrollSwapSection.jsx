import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import ValueCard from '../Cards/ValueCard';

gsap.registerPlugin(ScrollTrigger);

const ScrollSwapSection = ({ title, subtitle, items }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 64px",
        end: "+=300%",
        pin: true,
        scrub: 2, // Slower, more controlled scrub
        anticipatePin: 1,
        snap: {
          snapTo: "labels", // Snap to the labels we define below
          duration: { min: 0.3, max: 0.8 },
          delay: 0.1,
          ease: "power2.inOut"
        }
      }
    });

    const group1Cards = group1Ref.current.querySelectorAll('.swap-card-wrapper');
    const group2Cards = group2Ref.current.querySelectorAll('.swap-card-wrapper');

    // Initial state
    gsap.set(group2Ref.current, { visibility: 'hidden', opacity: 0 });

    tl.addLabel("start")
      .to(group1Cards, {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.inOut",
      })
      .addLabel("swap") // Stop point for the swap
      .to({}, { duration: 2 }) // Increased reading pause
      .set(group1Ref.current, { visibility: 'hidden' })
      .set(group2Ref.current, { visibility: 'visible', opacity: 1 })
      .fromTo(group2Cards, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.05,
          duration: 1, 
          ease: "power2.out",
          onStart: () => {
            gsap.set(group2Ref.current, { pointerEvents: 'auto' });
            gsap.set(group1Ref.current, { pointerEvents: 'none' });
          }
        }
      )
      .addLabel("end");

  }, { scope: sectionRef });

  const firstGroup = items.slice(0, 6);
  const secondGroup = items.slice(6, 12);

  return (
    <section 
      ref={sectionRef} 
      className="w-full h-[calc(100vh-64px)] bg-[#fcfcfc] overflow-hidden flex flex-col justify-center"
    >
      <div ref={containerRef} className="container-custom w-full h-full flex flex-col justify-center py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <h4 className="text-brand-red font-bold tracking-[0.4em] text-[9px] uppercase">
              {subtitle}
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight tracking-tight">
            {title.split('<br/>').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('<br/>').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Card Area */}
        <div className="relative flex-grow min-h-[500px]">
          {/* Group 1 */}
          <div 
            ref={group1Ref}
            className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {firstGroup.map((item, idx) => (
              <div key={idx} className="swap-card-wrapper h-full">
                <ValueCard {...item} />
              </div>
            ))}
          </div>

          {/* Group 2 */}
          <div 
            ref={group2Ref}
            className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr opacity-0 pointer-events-none"
          >
            {secondGroup.map((item, idx) => (
              <div key={idx} className="swap-card-wrapper h-full">
                <ValueCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSwapSection;
