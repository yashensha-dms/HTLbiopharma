import React from 'react';
import { useForm } from '../../context/FormContext';

const CTA = () => {
  const { openContact } = useForm();

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Trusted by over <br className="hidden md:block" />
              <span className="text-brand-red">3,000 clients</span> worldwide for <br className="hidden md:block" />
              engineering excellence.
            </h3>
            <p className="text-xl text-gray-500">Get your expert advice today.</p>
          </div>
          
          <button 
            onClick={openContact}
            className="btn-primary min-w-[280px] text-lg py-5 shadow-elevation-2 hover:shadow-elevation-3"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
