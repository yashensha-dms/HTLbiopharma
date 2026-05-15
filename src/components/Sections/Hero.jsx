import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useForm } from '../../context/FormContext';
import { Paragraph } from '../UI/Typography';

const Hero = ({ 
  title = "Engineering Infrastructure,\nDelivering Trust.", 
  subtitle = "Delivering integrated MEP services, powering India’s Real Estate with Engineering, supply chain & management solutions." 
}) => {
  const container = useRef();
  const { openContact } = useForm();

  useGSAP(() => {
    gsap.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.stat-item', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 1,
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full overflow-hidden h-[calc(100vh-64px)] max-lg:h-[calc(100vh-70px)] max-sm:h-[calc(100vh-65px)]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/Home Video.webm" type="video/webm" />
        </video>
        {/* Robust Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-1" />
        <div className="absolute inset-0 bg-black/20 z-1" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-20 container-custom">
        <div className="hero-content max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-normal leading-tight tracking-tight text-white mb-6 whitespace-pre-line">
            {title}
          </h1>
          <Paragraph className="text-white/90 mb-10 max-w-2xl">
            {subtitle}
          </Paragraph>
          <button 
            onClick={openContact}
            className="btn-primary"
          >
            Explore Capabilities
          </button>
        </div>
      </div>

      {/* Stats Matrix */}
      {/* <div className="absolute bottom-0 left-0 w-full z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 hidden md:block">
        <div className="container-custom px-5 md:px-20 py-8 grid grid-cols-4 gap-8">
          {[
            { label: 'Clients served', value: '3000+' },
            { label: 'No of Repeat Clients', value: '86%' },
            { label: 'Sq. Ft covered', value: '50M+' },
            { label: 'CSAT Score', value: '9.2' },
          ].map((stat, i) => (
            <div key={i} className="stat-item flex flex-col justify-between h-full">
              <h4 className="text-white/60 text-sm uppercase tracking-wider mb-4">{stat.label}</h4>
              <div className="w-full h-[1px] bg-white/30 mb-4" />
              <h2 className="text-white text-4xl font-medium">{stat.value}</h2>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
