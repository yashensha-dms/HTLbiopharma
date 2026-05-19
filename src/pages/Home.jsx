import React from 'react';
import Hero from '../components/Sections/Hero';
import IntroSection from '../components/Sections/IntroSection';
import EPCExcellence from '../components/Sections/EPCExcellence';
import SectorsSection from '../components/Sections/SectorsSection';
import ComplianceGrid from '../components/Sections/ComplianceGrid';

const getSectorsData = () => [
  {
    title: "Pharmaceuticals",
    description: "HTL Biopharma delivers integrated EPC solutions for GMP-compliant pharmaceutical facilities. We Engineer and build regulated, audit-ready environments aligned with global standards — enabling compliant production, operational precision, and scalable growth.",
    image: `${import.meta.env.BASE_URL}images/sectors/pharmaceuticals.png`,
    link: "/pharmaceuticals"
  },
  {
    title: "BioPharma & Life Sciences",
    description: "Advancing biopharma and life sciences infrastructure with end-to-end EPC solutions, we engineer validation-ready, high-performance facilities that support biologics manufacturing, research innovation, and compliance with evolving global regulatory frameworks.",
    image: `${import.meta.env.BASE_URL}images/sectors/biopharmaceuticals.png`,
    link: "/biopharmaceuticals"
  },
  {
    title: "Medical Devices",
    description: "Enabling precision medical device manufacturing, we engineer compliant, cleanroom-driven facilities aligned with global regulatory standards, integrating validated utilities, quality control systems, and controlled environments to ensure traceability, operational reliability, and scalable, high-performance production.",
    image: `${import.meta.env.BASE_URL}images/sectors/medical-devices.png`,
    link: "/medical-devices"
  },
  {
    title: "Cosmetic & Personal Care",
    description: "Advancing cosmetic and personal care manufacturing infrastructure, we build regulated, contamination-controlled facilities as per the international standards, enabling precision formulation, operational efficiency, and scalable production that meets evolving global quality and safety expectations.",
    image: `${import.meta.env.BASE_URL}images/sectors/cosmetics.png`,
    link: "/cosmetics"
  },
  {
    title: "Industrial Application",
    description: "Powering advanced industrial applications, we build cleanroom-integrated facilities for solar, semiconductor, and electronics manufacturing, delivering contamination-controlled environments, high-purity utilities, and precision-engineered infrastructure that support performance-driven production aligned with global quality and operational standards.",
    image: `${import.meta.env.BASE_URL}images/sectors/industrial-appliances.png`,
    link: "/industrial-appliances"
  }
];

import useSEO from '../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Regulated Facility EPC & Turnkey Engineering',
    description: 'HTL BioPharma is a leading single-window EPC turnkey engineering partner delivering sterile cleanrooms, dynamic HVAC systems, and sustainable facilities for the lifescientific industries.',
    keywords: 'HTL BioPharma, pharmaceutical EPC, cleanroom design, life sciences facility, HVAC engineering, sterile utilities'
  });

  return (
    <div className="flex flex-col">
      <Hero 
        title={"Enabling the World’s \nMost Regulated Industries."}
        subtitle={"Read more about us"}
      />
      <IntroSection />
      <EPCExcellence />
      <SectorsSection items={getSectorsData()} />
      <ComplianceGrid />
      {/* We will add Biopharma specific sections here next */}
    </div>
  );
};

export default Home;
