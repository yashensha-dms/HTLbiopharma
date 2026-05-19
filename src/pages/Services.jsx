import React from 'react';

import useSEO from '../hooks/useSEO';

const Services = () => {
  useSEO({
    title: 'Our Cleanroom & HVAC Engineering Services',
    description: 'HTL BioPharma delivers advanced HVAC design, cleanroom partitioning, building automation, process utilities, and high-purity electrical distribution.',
    keywords: 'cleanroom design services, HVAC engineering, process utilities, high-purity electrical'
  });

  return (
    <div className='pt-32 pb-20 text-center'>
      <h1 className='text-5xl font-medium text-gray-900'>HTL Biopharma - Services</h1>
    </div>
  );
};

export default Services;
