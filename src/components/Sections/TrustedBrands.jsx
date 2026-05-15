import React from 'react';

const brands = [
  { name: 'Godrej', logo: '/images/Logo/brand-logos/resized/Godrej_Enterprises_Group 2.svg' },
  { name: 'IBM', logo: '/images/Logo/brand-logos/resized/IBM_logo 2.svg' },
  { name: 'Kotak', logo: '/images/Logo/brand-logos/resized/Kotak_Mahindra_Group_logo 2.svg' },
  { name: 'Morgan Stanley', logo: '/images/Logo/brand-logos/resized/Morgan_Stanley_Logo_2024 2.svg' },
  { name: 'MSCI', logo: '/images/Logo/brand-logos/resized/MSCI_logo_2019 2.svg' },
  { name: 'Reliance', logo: '/images/Logo/brand-logos/resized/Frame 5124792.svg' },
  { name: 'Citi', logo: '/images/Logo/brand-logos/resized/Citi_logo_March_2023 2.svg' },
  { name: 'Netflix', logo: '/images/Logo/brand-logos/resized/Netflix_2015_logo 2.svg' },
  { name: 'PwC', logo: '/images/Logo/brand-logos/resized/PwC_Company_Logo 2.svg' },
];

const TrustedBrands = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-light text-gray-600 leading-snug">
          Preferred engineering partner for organisations <br className="hidden md:block" />
          redefining performance in every sector.
        </h3>
      </div>

      <div className="flex gap-12 animate-infinite-scroll py-4">
        {/* Double the list for seamless loop */}
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tailwind handles the animation in global CSS usually, but I'll add it to index.css or use a style tag for speed */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBrands;
