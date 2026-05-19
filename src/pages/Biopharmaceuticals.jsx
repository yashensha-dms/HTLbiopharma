import React from 'react';
import SectorPageLayout from '../components/Layout/SectorPageLayout';
import useSEO from '../hooks/useSEO';

const Biopharmaceuticals = () => {
  useSEO({
    title: 'Biopharmaceuticals & Life Science Infrastructure',
    description: 'Advanced facility design and EPC turnkey engineering for monoclonal antibodies, vaccines, cell & gene therapies, and state-of-the-art biologics research hubs.',
    keywords: 'biologics facility engineering, vaccine cleanroom build, biotech labs design, sterile biopharma solutions'
  });

  const introParagraphs = [
    "HTL Biopharma delivers precision-engineered biopharmaceutical facilities through fully integrated EPC execution. From single-use (disposable) to stainless steel systems for mAbs, vaccines (human & animal), recombinant proteins, CGT, biosimilars, ADCs, and fermentation-based applications, we ensure compliance with GMP, FDA, EU, WHO, EMEA, UK MHRA, PIC/S, TGA, ANVISA, Schedule M, and global standards.",
    "Our teams integrate Project Management, Regulatory expertise, and Bioprocess knowhow with HVAC, Cleanrooms, Electrical, ELVS, BMS, Plant Automation, Utilities, Piping, and GMP drainage to deliver reliable, compliant, and optimised research and production facilities.",
    "We specialise in high-containment BSL-2/3/4 environments, large-scale bioreactor integration, and aseptic fill-finish operations—ensuring product integrity across USP and DSP bioprocessing. HTL Biopharma enables accelerated facility readiness with uncompromising Quality, Safety, and Process integrity, and engineers, supplies, and validates Biokill systems for BSL-2/3/4 facilities in full compliance with biosafety regulations."
  ];

  const subSegments = [
    {
      title: "Biotech Drug<br/>Substance (DS)",
      description: "USP & DSP facilities for biologic drug substance with GMP compliance."
    },
    {
      title: "Blood Plasma<br/>Fractionation",
      description: "Large-scale plasma fractionation facilities for complex biologic processing."
    },
    {
      title: "Biotech Drug<br/>Product (DP)",
      description: "Sterile fill-finish facilities for aseptic biologic drug product manufacturing."
    },
    {
      title: "Cell & Gene Therapies<br/>(CGT)",
      description: "Closed single-use facilities for advanced CGT manufacturing under GMP."
    },
    {
      title: "Vaccines – Human &<br/>Animal (DS & DP)",
      description: "Integrated GMP facilities for vaccine DS and DP manufacturing."
    },
    {
      title: "Fermentation<br/>Facilities",
      description: "Fermentation facilities for industrial biologics applications."
    }
  ];

  return (
    <SectorPageLayout
      heroTitle={<>Engineering Integrated<br />Biopharmaceutical Facilities</>}
      heroSubtitle="Designed for biologics, vaccines, and plasma manufacturing under global regulatory standards."
      heroBgImage="/images/Sector%20pages/ALL%20SECTOR%20HEADER%20.png"
      introImage="/images/Sector%20pages/Biopharmaceuticals/Screenshot%202026-05-04%20at%202.51.51%E2%80%AFPM.png"
      introParagraphs={introParagraphs}
      subSegmentsTitle="SUB SEGMENTS"
      subSegmentsSubtitle="BIOPHARMACEUTICALS"
      subSegments={subSegments}
    />
  );
};

export default Biopharmaceuticals;
