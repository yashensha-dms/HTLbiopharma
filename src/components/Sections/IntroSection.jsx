import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Paragraph } from '../UI/Typography';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  return (
    <section className="bg-black py-20 px-5 md:px-20">
      <div className="container-custom bg-white rounded-[40px] md:rounded-[80px] p-12 md:p-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left Column */}
          <div className="relative pt-12 md:pt-0">
            {/* Quote Icon - Exact Position */}
            <div className="absolute top-0 right-0 md:-right-8 drop-shadow-[0_10px_20px_rgba(235,0,27,0.3)] rotate-180">
              <svg width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-red w-12 h-10 md:w-[90px] md:h-[70px]">
                <path d="M0 60V25.7143L15.4286 0H32.5714L22.2857 25.7143H32.5714V60H0ZM43.4286 60V25.7143L58.8571 0H76L65.7143 25.7143H76V60H43.4286Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-gray-900 max-w-md">
              Engineering <br className="hidden md:block" />
              Regulated <br className="hidden md:block" />
              Environments <br className="hidden md:block" />
              For A <span className="font-bold">Better <br className="hidden md:block" /> Tomorrow.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-10 pt-4 md:pt-20">
            <Paragraph>
              At HTL Biopharma, we understand that progress in critical industries demands precision, discipline, and uncompromising standards. The facilities we engineered and build are not merely structures — they are ecosystems of compliance, performance, and reliability.
            </Paragraph>
            <Paragraph>
              Serving highly regulated sectors worldwide, we deliver end-to-end EPC solutions that transform vision into validated reality. Through integrated engineering, global standards, and technical expertise, we enable our clients to operate with confidence — <span className="text-brand-red">today</span> and into the <span className="text-brand-red">future</span>.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
