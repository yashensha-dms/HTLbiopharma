import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Paragraph } from '../UI/Typography';

const EPCExcellence = () => {
  return (
    <section className="relative h-screen w-full bg-black flex items-center overflow-hidden">

      <div className="container-custom relative z-10 px-5 md:px-20 w-full flex justify-between items-center">
        <div className="max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
            Delivering Integrated <br />
            <span className="text-brand-red font-bold">EPC Excellence</span> for Regulated <br />
            Life Sciences Infrastructure
          </h2>
          
          <Paragraph className="text-white/80 max-w-lg !text-base md:!text-lg">
            Single-window EPC partner with Holistic Ownership, Accountability, and Integrated execution.
          </Paragraph>

          <div className="pt-4">
            <a href="#" className="text-white uppercase tracking-widest text-sm border-b border-white pb-2 hover:text-brand-red hover:border-brand-red transition-colors">
              READ MORE
            </a>
          </div>
        </div>

        {/* Large Arrow Button */}
        <div className="hidden md:block">
          <button className="w-20 h-20 rounded-full bg-white flex items-center justify-center group hover:bg-brand-red transition-all duration-300">
            <ChevronRight className="w-8 h-8 text-black group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EPCExcellence;
