import React from 'react';
import SubPageHero from '../components/Sections/SubPageHero';
import ApproachFlow from '../components/Sections/ApproachFlow';
import useSEO from '../hooks/useSEO';

const Approach = () => {
  useSEO({
    title: 'Our Scientific Approach to Engineering Excellence',
    description: 'HTL BioPharma\'s proven scientific approach integrates engineering precision, validation readiness, and regulatory compliance to accelerate facility launch.',
    keywords: 'scientific approach engineering, validation design, pharmaceutical facility blueprint'
  });

  return (
    <div className="approach-page">
      <SubPageHero 
        title="Our Scientific Approach to Excellence" 
        subtitle="Our well structured proven approach ensures efficient execution, regulatory compliance, and accelerated facility readiness."
        backgroundImage={`${import.meta.env.BASE_URL}images/OurApproach/Our%20approach%20header.png`}
      />
      <ApproachFlow />
    </div>
  );
};

export default Approach;
