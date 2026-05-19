import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionLayout from '../Layout/SectionLayout';
import ValueCard from '../Cards/ValueCard';
import TitleGroup from '../UI/TitleGroup';

gsap.registerPlugin(ScrollTrigger);

const ScrollSwapSection = ({ title, subtitle, items }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);

  const hasMoreThanTwoRows = items.length > 6;

  useGSAP(() => {
    if (!hasMoreThanTwoRows) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 64px",
          end: "+=150%", // Shorter pin distance for better UX
          pin: true,
          pinType: 'transform',
          scrub: 1, // Tighter scrub for better Lenis integration
        }
      });

      const group1Cards = group1Ref.current.querySelectorAll('.swap-card-wrapper');
      const group2Cards = group2Ref.current.querySelectorAll('.swap-card-wrapper');

      // Initial state setup to avoid FOUC or scrubbing issues
      gsap.set(group1Ref.current, { visibility: 'visible', opacity: 1, pointerEvents: 'auto' });
      gsap.set(group2Ref.current, { visibility: 'hidden', opacity: 0, pointerEvents: 'none' });

      tl.fromTo(group1Cards, 
        { y: 0, opacity: 1 },
        {
          y: -40,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.in",
        })
        .to(group1Ref.current, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" })
        .to(group2Ref.current, { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" }, "-=0.4")
        .fromTo(group2Cards, 
          { y: 40, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.05,
            duration: 0.8, 
            ease: "power2.out"
          }
        );
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <SectionLayout 
      ref={sectionRef} 
      className="bg-[#fcfcfc]"
      containerClassName="h-full flex flex-col py-12"
      fullWidth={true}
    >
      {/* Header */}
      <TitleGroup title={title} subtitle={subtitle} />

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
        <div className="relative flex-grow">
          {/* Group 1 - Dictates the height */}
          <div 
            ref={group1Ref}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr relative z-10"
          >
            {items.slice(0, 6).map((item, idx) => (
              <div key={idx} className="swap-card-wrapper h-full">
                <ValueCard {...item} />
              </div>
            ))}
          </div>

          {/* Group 2 - Absolute overlaid on Group 1 */}
          <div 
            ref={group2Ref}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr z-20 mt-6 lg:mt-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:opacity-0 lg:pointer-events-none"
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
