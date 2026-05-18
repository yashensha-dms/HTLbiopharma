import React from 'react';

const TitleGroup = ({ title, subtitle, className = "", dark = false }) => {
  return (
    <div className={`mb-10 ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-brand-red"></div>
          <h4 className="text-brand-red font-bold tracking-[0.4em] text-[9px] uppercase">
            {subtitle}
          </h4>
        </div>
      )}
      <h2 className={`text-4xl md:text-5xl font-light leading-tight tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
        {typeof title === 'string' ? (
          title.split('<br/>').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))
        ) : (
          title
        )}
      </h2>
    </div>
  );
};

export default TitleGroup;
