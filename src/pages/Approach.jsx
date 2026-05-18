import React from 'react';
import SubPageHero from '../components/Sections/SubPageHero';
import ApproachFlow from '../components/Sections/ApproachFlow';

const Approach = () => {
  return (
    <div className="approach-page">
      <SubPageHero 
        title="Our Scientific Approach to Excellence" 
        subtitle="Our well structured proven approach ensures efficient execution, regulatory compliance, and accelerated facility readiness."
        backgroundImage="/images/OurApproach/Our%20approach%20header.png"
      />
      <ApproachFlow />
    </div>
  );
};

export default Approach;
