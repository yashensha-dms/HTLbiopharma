import React from 'react';

import useSEO from '../hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact Our Engineering Consultants',
    description: 'Get in touch with HTL BioPharma to schedule an expert facility consult or request information about our single-window turnkey EPC capabilities.',
    keywords: 'contact HTL BioPharma, cleanroom project inquiry, pharmaceutical EPC consult'
  });

  return (
    <div className='pt-32 pb-20 text-center'>
      <h1 className='text-5xl font-medium text-gray-900'>HTL Biopharma - Contact</h1>
    </div>
  );
};

export default Contact;
