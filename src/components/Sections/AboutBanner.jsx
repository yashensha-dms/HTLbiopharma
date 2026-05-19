import React from 'react';

const AboutBanner = () => {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/AboutUs/Header.png`} 
          alt="About HTL" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-7xl font-medium text-white leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Inspiring the youth <br /> of tomorrow.
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Building lasting impact through engineering leadership and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
