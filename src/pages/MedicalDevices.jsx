import React from 'react';
import SectorPageLayout from '../components/Layout/SectorPageLayout';
import useSEO from '../hooks/useSEO';

const MedicalDevices = () => {
  useSEO({
    title: 'Medical Device Cleanroom Build & ISO Validation',
    description: 'State-of-the-art controlled environments, cleanrooms, and high-purity utilities optimized for orthopedic, cardiovascular, and diagnostic medical device assembly.',
    keywords: 'medical device cleanroom, ISO 14644 compliance, diagnostic device assembly cleanrooms'
  });

  const introParagraphs = [
    "HTL Biopharma delivers precision-engineered cleanroom environments and facility infrastructure for advanced medical device manufacturing. Our expertise spans ISO-classified cleanroom design, HVAC systems, and stringent particulate control to support production of implants, diagnostics, and precision healthcare technologies.",
    "We integrate validated utilities, contamination-controlled environments, and regulatory-compliant systems to meet global standards including ISO 13485 (QMS), USFDA 21 CFR Part 820, EU MDR, GMP, and other international requirements—ensuring consistent product quality, operational reliability, and compliance.",
    "Our multidisciplinary teams combine Project Management, Regulatory expertise, and Process Knowhow with HVAC, Cleanrooms, Electrical, ELVS, BMS, Plant Automation, Utilities, Piping, and GMP drainage systems to deliver reliable, compliant, and optimised manufacturing facilities.",
    "With deep regulatory and operational expertise, HTL Biopharma enables manufacturing of syringes & needles, catheters, surgical gloves, diagnostic kits, cardiac stents, orthopedic/dental implants, imaging components, and drug delivery devices—accelerating facility readiness while maintaining uncompromising standards of Quality, Safety, and Process Integrity."
  ];

  const subSegments = [
    {
      title: "Implants & Invasive<br/>Devices",
      description: "Controlled facilities for precision implant and invasive device manufacturing."
    },
    {
      title: "High-Precision<br/>Medical Equipment",
      description: "Precision facilities for advanced medical equipment manufacturing."
    },
    {
      title: "Diagnostic Kits &<br/>IVD",
      description: "Cleanroom facilities for reliable diagnostic and IVD manufacturing."
    },
    {
      title: "Sterile Device<br/>Assembly & Packaging",
      description: "ISO-classified facilities for sterile assembly and packaging."
    },
    {
      title: "Single-Use Medical<br/>Devices",
      description: "Controlled environments for high-volume disposable device production."
    }
  ];

  return (
    <SectorPageLayout
      heroTitle={<>Engineering Precision Cleanroom Infrastructure for<br />Medical Device Manufacturing</>}
      heroSubtitle="ISO-compliant controlled environments engineered, built, and qualified for sterile and non-sterile medical device manufacturing, diagnostic production, and high-precision healthcare technologies."
      heroBgImage={`${import.meta.env.BASE_URL}images/sectors/header.png`}
      introImage={`${import.meta.env.BASE_URL}images/sectors/medical-devices-intro.png`}
      introParagraphs={introParagraphs}
      subSegmentsTitle="SUB SEGMENTS"
      subSegmentsSubtitle=""
      subSegments={subSegments}
    />
  );
};

export default MedicalDevices;
