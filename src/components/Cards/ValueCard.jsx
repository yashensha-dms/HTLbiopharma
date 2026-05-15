import React from 'react';

const ValueCard = ({ title, description }) => {
  return (
    <div className="group space-y-4 p-6 rounded-3xl border border-transparent hover:border-gray-100 hover:bg-brand-red/[0.01] transition-all duration-300">
      <div className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500 mb-6"></div>
      <h4 className="text-3xl font-medium text-gray-900 leading-tight font-geist mb-4" dangerouslySetInnerHTML={{ __html: title }}></h4>
      <p className="text-gray-500 leading-relaxed font-geist text-base">{description}</p>
    </div>
  );
};

export default ValueCard;
