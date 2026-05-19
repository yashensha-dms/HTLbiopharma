import React from 'react';

import useSEO from '../hooks/useSEO';

const Projects = () => {
  useSEO({
    title: 'Featured Lifescientific Turnkey Projects',
    description: 'Explore HTL BioPharma\'s global portfolio of successfully handed over pharmaceutical, biotech, and high-precision sterile manufacturing facilities.',
    keywords: 'turnkey facilities portfolio, pharma project execution, biopharma case studies'
  });

  return (
    <div className='pt-32 pb-20 text-center'>
      <h1 className='text-5xl font-medium text-gray-900'>HTL Biopharma - Projects</h1>
    </div>
  );
};

export default Projects;
