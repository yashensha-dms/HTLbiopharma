import React from 'react';

import useSEO from '../hooks/useSEO';

const Compliance = () => {
  useSEO({
    title: 'Global GMP & Regulatory Compliance Standards',
    description: 'HTL BioPharma maintains full validation and strict adherence to global GMP, FDA, EU, WHO, Schedule M, and ISO standards.',
    keywords: 'regulatory compliance GMP, FDA cleanroom audit, validation standards biopharma'
  });

  return (
    <div className='pt-32 pb-20 text-center'>
      <h1 className='text-5xl font-medium text-gray-900'>HTL Biopharma - Compliance</h1>
    </div>
  );
};

export default Compliance;
