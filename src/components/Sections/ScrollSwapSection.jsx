import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionLayout from '../Layout/SectionLayout';
import ValueCard from '../Cards/ValueCard';

gsap.registerPlugin(ScrollTrigger);

const ScrollSwapSection = ({ title, subtitle, items }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);

  const hasMoreThanTwoRows = items.length > 6;

  useGSAP(() => {
    if (!hasMoreThanTwoRows) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 64px",
        end: "+=150%", // Shorter pin distance for better UX
        pin: true,
        scrub: 1, // Tighter scrub for better Lenis integration
        anticipatePin: 1
      }
    });

    const group1Cards = group1Ref.current.querySelectorAll('.swap-card-wrapper');
    const group2Cards = group2Ref.current.querySelectorAll('.swap-card-wrapper');

    // Initial state
    gsap.set(group2Ref.current, { visibility: 'hidden', opacity: 0, pointerEvents: 'none' });

    tl.to(group1Cards, {
        y: -40,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.inOut",
      })
      .set(group1Ref.current, { visibility: 'hidden', pointerEvents: 'none' })
      .set(group2Ref.current, { visibility: 'visible', opacity: 1, pointerEvents: 'auto' })
      .fromTo(group2Cards, 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.05,
          duration: 1, 
          ease: "power2.out"
        }
      );

  }, { scope: sectionRef });

  return (
    <SectionLayout 
      ref={sectionRef} 
      className="bg-[#fcfcfc]"
      containerClassName="h-full flex flex-col py-12"
      fullWidth={true}
    >
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
      {!hasMoreThanTwoRows ? (
        <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {items.map((item, idx) => (
            <div key={idx} className="h-full">
              <ValueCard {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex-grow min-h-[500px]">
          {/* Group 1 */}
          <div 
            ref={group1Ref}
            className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {items.slice(0, 6).map((item, idx) => (
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
            {items.slice(6, 12).map((item, idx) => (
              <div key={idx} className="swap-card-wrapper h-full">
                <ValueCard {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionLayout>
  );
};

export default ScrollSwapSection;
