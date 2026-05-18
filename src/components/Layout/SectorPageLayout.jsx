import React from 'react';
import InnerPageHero from '../Sections/InnerPageHero';
import SectorIntro from '../Sections/SectorIntro';
import ScrollSwapSection from '../Sections/ScrollSwapSection';

const SectorPageLayout = ({ 
  heroTitle, 
  heroSubtitle, 
  heroBgImage, 
  introImage, 
  introParagraphs, 
  subSegmentsTitle = "SUB SEGMENTS",
  subSegmentsSubtitle,
  subSegments,
  children 
}) => {
  return (
    <div className="sector-page-layout">
      <InnerPageHero 
        title={heroTitle}
        subtitle={heroSubtitle}
        bgImage={heroBgImage}
      />
      
      {introParagraphs && introParagraphs.length > 0 && (
        <SectorIntro 
          image={introImage}
          paragraphs={introParagraphs}
        />
      )}

      {subSegments && subSegments.length > 0 && (
        <ScrollSwapSection 
          title={subSegmentsTitle} 
          subtitle={subSegmentsSubtitle} 
          items={subSegments} 
        />
      )}

      {children}
    </div>
  );
};

export default SectorPageLayout;
