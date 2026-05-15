import React from 'react';

export const Paragraph = ({ children, className = "" }) => {
  return (
    <p className={`text-lg md:text-xl text-gray-800 font-regular leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
