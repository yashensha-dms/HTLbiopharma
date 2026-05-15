import React from 'react';
import './SubPageHero.css';

const SubPageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="subpage-hero" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="subpage-hero-overlay">
        <div className="container-custom w-full">
          <div className="subpage-hero-content">
            <h1 className="subpage-hero-title">{title}</h1>
            <p className="subpage-hero-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
