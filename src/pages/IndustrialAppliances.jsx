import React from 'react';
import SectorPageLayout from '../components/Layout/SectorPageLayout';
import useSEO from '../hooks/useSEO';

const IndustrialAppliances = () => {
  useSEO({
    title: 'Semiconductor & Advanced Tech Controlled Environments',
    description: 'Contamination-controlled infrastructure and ultra-pure utilities for solar cells, microelectronics, and advanced industrial application environments.',
    keywords: 'semiconductor cleanroom, solar cell facility builders, high-purity utility infrastructure'
  });

  const introParagraphs = [
    "HTL Biopharma delivers robust engineering solutions as a trusted EPC partner, with proven capability to execute controlled environment infrastructure for critical and complex manufacturing applications requiring precision and high operational reliability.",
    "Our expertise includes large-scale HVAC and cleanroom systems integrated with customised BMS and supporting infrastructure such as utilities, hook-up services, gas distribution systems, piping, and electrical (LT, HT, ELVS). We deliver projects aligned with high engineering standards and strict safety norms.",
    "Through disciplined execution, HTL Biopharma enables industrial manufacturers to operate efficient, resilient, and future-ready facilities designed to meet the most rigorous operational and safety requirements."
  ];

  const subSegments = [
    {
      title: "Semi-conductors",
      description: "Ultra-clean facilities for precision semiconductor manufacturing."
    },
    {
      title: "Electronics",
      description: "Controlled facilities for stable electronics manufacturing."
    },
    {
      title: "Photovoltaic/Renewables",
      description: "Advanced facilities for photovoltaic and clean energy production."
    },
    {
      title: "Aerospace",
      description: "Precision-controlled facilities for aerospace manufacturing."
    },
    {
      title: "Defence",
      description: "Secure, controlled facilities for defence manufacturing."
    },
    {
      title: "EV Battery",
      description: "Controlled facilities for EV battery manufacturing."
    },
    {
      title: "Advanced Materials",
      description: "Specialised facilities for advanced material processing."
    },
    {
      title: "Optics & Electronic",
      description: "Precision facilities for optics and electronic systems."
    },
    {
      title: "R&D Laboratories",
      description: "Controlled environments for research and testing."
    },
    {
      title: "Pilot Plant",
      description: "Flexible facilities for scale-up and process validation."
    },
    {
      title: "Nanotechnology",
      description: "Ultra-controlled facilities for nanoscale manufacturing."
    }
  ];

  return (
    <SectorPageLayout
      heroTitle={<>Delivering High-Performance Infrastructure for<br />Mission Critical Industrial Applications</>}
      heroSubtitle="Robust engineering solutions for complex, controlled environment manufacturing infrastructure."
      heroBgImage="/images/sectors/header.png"
      introImage="/images/sectors/industrial-appliances-intro.png"
      introParagraphs={introParagraphs}
      subSegmentsTitle="SUB SEGMENTS"
      subSegmentsSubtitle="INDUSTRIAL APPLIANCES"
      subSegments={subSegments}
    />
  );
};

export default IndustrialAppliances;
