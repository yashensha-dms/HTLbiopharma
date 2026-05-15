import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { timelineData } from '../../data/timeline';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const container = useRef();
  const leftRef = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    
    items.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => updateActive(index),
        onEnterBack: () => updateActive(index),
      });
    });

    const updateActive = (index) => {
      // Update year active state
      const years = gsap.utils.toArray('.timeline-year');
      years.forEach((y, i) => {
        if (i === index) y.classList.add('active');
        else y.classList.remove('active');
      });

      // Update image active state
      const images = gsap.utils.toArray('.timeline-image');
      images.forEach((img, i) => {
        if (i === index) {
          gsap.to(img, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' });
        } else {
          gsap.to(img, { opacity: 0, scale: 1.05, duration: 0.6, ease: 'power2.out' });
        }
      });
    };

    // Sticky behavior for the left side
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: leftRef.current,
      pinSpacing: false,
    });

  }, { scope: container });

  return (
    <>
      {/* Desktop View */}
      <section ref={container} className="relative py-24 bg-white overflow-hidden hidden lg:block">
        <div className="container-custom flex justify-between relative">
          
          {/* Left Side: Fixed Years and Images */}
          <div ref={leftRef} className="w-1/3 h-screen flex flex-col justify-center sticky top-0">
            <div className="flex items-center gap-20">
              {/* Years Column */}
              <div className="flex flex-col space-y-6">
                {timelineData.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className={`timeline-year text-3xl font-medium transition-all duration-500 cursor-pointer opacity-30 ${idx === 0 ? 'active' : ''}`}
                    style={{ letterSpacing: '-1.3px' }}
                  >
                    {item.year}
                  </div>
                ))}
              </div>

              {/* Images Stack */}
              <div className="relative w-[300px] h-[400px] overflow-hidden rounded-2xl shadow-elevation-3">
                {timelineData.map((item, idx) => (
                  <img
                    key={`img-${item.id}`}
                    src={item.image}
                    alt={item.year}
                    className={`timeline-image absolute inset-0 w-full h-full object-cover ${idx === 0 ? 'opacity-100' : 'opacity-0 scale-105'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Scrollable Content */}
          <div className="w-1/2 space-y-60 pb-[20vh]">
            {timelineData.map((item, idx) => (
              <div 
                key={`detail-${item.id}`} 
                className="timeline-item space-y-6 min-h-[40vh] flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 text-brand-red font-medium uppercase tracking-wider">
                  <div className="w-10 h-px bg-gray-300"></div>
                  {item.date}
                  <div className="w-10 h-px bg-gray-300"></div>
                </div>
                <h3 className="text-5xl font-medium text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="py-16 bg-white lg:hidden">
        <div className="container-custom">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-8">Timeline</h2>
          <div className="space-y-12">
            {timelineData.map((item) => (
              <div key={`mobile-${item.id}`} className="space-y-4">
                <div className="text-4xl font-bold text-gray-200">{item.year}</div>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-elevation-2">
                  <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <div className="text-brand-red font-medium text-sm">{item.date}</div>
                  <h3 className="text-2xl font-medium text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CSS for custom active states that GSAP triggers */}
      <style dangerouslySetInnerHTML={{ __html: `
        .timeline-year.active {
          opacity: 1 !important;
          color: #ff2b2b !important;
          font-weight: bold;
          transform: translateX(10px);
        }
        .timeline-year {
          position: relative;
        }
        .timeline-year::before {
          content: '';
          position: absolute;
          left: -40px;
          top: 50%;
          width: 0;
          height: 1px;
          background: #ff2b2b;
          transition: width 0.4s ease;
        }
        .timeline-year.active::before {
          width: 30px;
        }
      `}} />
    </>
  );
};

export default Timeline;
