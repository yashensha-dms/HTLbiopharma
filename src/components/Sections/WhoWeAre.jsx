import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-peach/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
            A legacy of three decades <br className="hidden md:block" /> delivering excellence.
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Established in 1996, HTL is a leading MEP engineering firm with a legacy of three decades delivering turnkey, innovative, and sustainable solutions. With a strong footprint across India, the Middle East, and Africa, we combine engineering excellence, process discipline, and domain expertise to create high-performance systems that elevate mission-critical, luxury, and complex infrastructure projects, delivering outstanding customer value and lasting impact.
          </p>
        </div>

        {/* About Specific Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
          {[
            { label: 'Offices', value: '12+' },
            { label: 'Countries', value: '03+' },
            { label: 'Years in Business', value: '30+' },
            { label: 'Team Strength', value: '600+' }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <span className="text-sm font-bold tracking-wider text-gray-400 uppercase">{stat.label}</span>
              <div className="w-full h-px bg-gray-200"></div>
              <span className="text-4xl md:text-6xl font-medium text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
