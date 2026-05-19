import React from 'react';
import SectorPageLayout from '../components/Layout/SectorPageLayout';
import useSEO from '../hooks/useSEO';

const Cosmetics = () => {
  useSEO({
    title: 'Cosmetic & Personal Care Cleanroom Engineering',
    description: 'Designing contamination-controlled cosmetic manufacturing plants as per international standards. Scalable personal care formulation spaces with premium utility controls.',
    keywords: 'cosmetic plant layout, personal care manufacturing design, contamination controlled formulation rooms'
  });

  const introParagraphs = [
    "Cosmeceuticals and medical aesthetics represent a strategic extension of HTL Biopharma's pharmaceutical and regulatory expertise.",
    "HTL Biopharma delivers precision-engineered manufacturing environments for cosmetics and personal care production, integrating hygienic process design with advanced automation systems. Our expertise enables single-window solutions across hygiene, process engineering, compliance, automation, and project management.",
    "We optimise facility design and MEP infrastructure to support efficient, large-scale manufacturing operations. By aligning engineering with GMP principles and operational performance, HTL Biopharma enables reliable production, regulatory compliance, and scalable growth.",
    "Our capabilities span the full spectrum of cosmetics and personal care manufacturing including skincare, haircare, liquids, emulsions, aerosols, personal hygiene, oral care, beauty & makeup, and fragrances."
  ];

  return (
    <SectorPageLayout
      heroTitle="Delivering Cosmeceuticals Manufacturing Infrastructure"
      heroSubtitle="Hygienic process facilities engineered for automated, high-volume cosmetics and personal care production with strict quality and regulatory compliance."
      heroBgImage="/images/sectors/header.png"
      introImage="/images/sectors/cosmetics-intro.png"
      introParagraphs={introParagraphs}
    />
  );
};

export default Cosmetics;
