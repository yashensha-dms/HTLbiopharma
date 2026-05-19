import React from 'react';

const ComplianceGrid = () => {
  const logos = [
    `${import.meta.env.BASE_URL}images/compliance/image.png`,
    `${import.meta.env.BASE_URL}images/compliance/image-2.png`,
    `${import.meta.env.BASE_URL}images/compliance/image-4.png`,
    `${import.meta.env.BASE_URL}images/compliance/image-5.png`,
    `${import.meta.env.BASE_URL}images/compliance/image-6.png`,
    `${import.meta.env.BASE_URL}images/compliance/image-7.png`,
  ];

  return (
    <section className="bg-white py-20 px-5 md:px-20">
      <div className="container-custom">
        {/* <h4 className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-16">COMPLIANCE</h4> */}
        
        <div className="flex flex-wrap gap-12 items-center justify-center transition-opacity duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="w-full max-w-[200px] opacity-70 hover:opacity-100  transition-all duration-300">
              <img 
                src={logo} 
                alt={`Compliance Logo ${index + 1}`} 
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceGrid;
