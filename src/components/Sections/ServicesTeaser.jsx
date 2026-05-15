import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTeaser = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-normal leading-[1.1] tracking-tight text-gray-900 mb-8">
            Delivering Service Excellence Through Quality, Safety, and Global Engineering Standards Across India, Middle East & Africa
          </h2>
          <p className="text-xl font-light text-gray-500 italic">
            Driven by precision, built on best-in-class standards on every project.
          </p>
        </div>
        
        <Link to="/services" className="btn-primary shrink-0 mb-2">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesTeaser;
