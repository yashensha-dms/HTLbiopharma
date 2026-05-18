import React from 'react';
import { Link } from 'react-router-dom';

const SectorItem = ({ title, description, image, link }) => {
  return (
    <div className="group py-12 border-b border-gray-200 last:border-0">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-20 items-center">
        {/* Image Container */}
        <div className="aspect-square overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content Container */}
        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed max-w-2xl text-sm md:text-base">
            {description}
          </p>
          <Link 
            to={link || "#"} 
            className="inline-block text-brand-red text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

const SectorsSection = ({ items = [] }) => {
  return (
    <section className="bg-white py-20 px-5 md:px-20">
      <div className="container-custom">
        <h4 className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-16">SECTORS</h4>
        
        <div className="flex flex-col">
          {items.map((item, index) => (
            <SectorItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
export { SectorItem };
