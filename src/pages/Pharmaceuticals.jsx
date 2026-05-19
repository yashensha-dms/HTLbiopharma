import React from 'react';
import SectorPageLayout from '../components/Layout/SectorPageLayout';
import useSEO from '../hooks/useSEO';

const Pharmaceuticals = () => {
  useSEO({
    title: 'Pharmaceutical Facility EPC & GMP Cleanrooms',
    description: 'Providing engineering, procurement, and construction for FDA/WHO compliant oral solid dosage, sterile injectables, and API facilities with robust environmental controls.',
    keywords: 'OSD facility builders, sterile injectable cleanroom, API plant engineering, FDA WHO compliance, pharmaceutical construction'
  });

  const introParagraphs = [
    "HTL Biopharma delivers precision-engineered pharmaceutical manufacturing environments through fully integrated EPC execution. From complex biologics processing plants to sterile formulation or API facilities, our engineering ensures compliance with global regulatory frameworks including GMP, FDA, EU, WHO, EMEA, UK MHRA, PIC/S, TGA, ANVISA, Schedule M or any other global / local regulatory requirements.",
    "Our multidisciplinary teams integrate Project Management, Regulatory expertise, and Process Knowhow with HVAC, Cleanrooms, Electrical, ELVS, BMS, Plant Automation, Utilities, Piping, and GMP drainage systems to deliver compliant, reliable, and optimised facilities.",
    "With deep regulatory understanding and operational focus, HTL Biopharma enables faster facility readiness while maintaining uncompromising standards of Quality, Safety, and Process Integrity."
  ];

  const subSegments = [
    {
      title: "Sterile Formulation",
      description: "Sterile facilities are engineered, built, and qualified with controlled environments and GMP compliance."
    },
    {
      title: "Large Volume<br/>Parenteral (LVP)",
      description: "Aseptic LVP facilities are engineered, built, and qualified for high-throughput sterile manufacturing under GMP."
    },
    {
      title: "Non-Sterile<br/>Formulation",
      description: "Formulation facilities are engineered, built, and qualified for solid and semi-solid dosage forms under GMP."
    },
    {
      title: "MDI & DPI",
      description: "MDI/DPI facilities are engineered, built, and qualified with precision dosing under GMP."
    },
    {
      title: "Containment Facilities<br/>(HPAPI / Oncology / Cytotoxic)",
      description: "High-containment facilities are engineered, built, and qualified with OEB-based isolation under GMP."
    },
    {
      title: "Active Pharmaceutical<br/>Ingredients (API)",
      description: "Process-intensive API plants are engineered, built, and qualified with advanced utilities and GMP compliance."
    },
    {
      title: "Specialty Chemicals",
      description: "Chemical process facilities are engineered, built, and qualified with integrated safety and control systems."
    },
    {
      title: "Veterinary<br/>Formulations",
      description: "Veterinary facilities are engineered, built, and qualified for diverse dosage forms."
    },
    {
      title: "Nutraceuticals",
      description: "GMP-compliant nutraceutical facilities are engineered, built, and qualified for efficient production."
    },
    {
      title: "Pilot Plant",
      description: "Pilot facilities are engineered, built, and qualified under GMP."
    },
    {
      title: "R&D",
      description: "R&D facilities are engineered, built, and qualified for research and development under GMP."
    }
  ];

  return (
    <SectorPageLayout
      heroTitle={<>Engineering High-Performance<br />Pharmaceutical Infrastructure</>}
      heroSubtitle="Facilities engineered, built, and qualified to global standards for safe, efficient, and scalable drug production."
      heroBgImage="/images/sectors/header.png"
      introImage="/images/sectors/pharmaceuticals-intro.png"
      introParagraphs={introParagraphs}
      subSegmentsTitle="SUB SEGMENTS"
      subSegmentsSubtitle="PHARMACEUTICALS"
      subSegments={subSegments}
    />
  );
};

export default Pharmaceuticals;
