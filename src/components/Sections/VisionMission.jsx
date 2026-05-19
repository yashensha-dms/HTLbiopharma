import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Vision */}
          <div className="group flex flex-col md:flex-row gap-8 items-center md:items-start p-8 rounded-3xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-gray-100">
            <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl shadow-elevation-2">
              <img 
                src={`${import.meta.env.BASE_URL}images/about/Vision.webp`} 
                alt="Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase">Our Vision</h2>
              <h3 className="text-3xl font-medium text-gray-900 leading-tight">Asia & Africa's Leading Force</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most eminent force in MEP engineering across Asia and Africa, delivering sustainable, innovative environments where performance, comfort, and excellence converge.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group flex flex-col md:flex-row gap-8 items-center md:items-start p-8 rounded-3xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-gray-100">
            <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl shadow-elevation-2">
              <img 
                src={`${import.meta.env.BASE_URL}images/about/Mission.webp`} 
                alt="Mission" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase">Our Mission</h2>
              <h3 className="text-3xl font-medium text-gray-900 leading-tight">Raising the Standards</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Raising the Standards of MEP delivery through innovation, discipline, and a relentless commitment to quality, empowering every project to be future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
