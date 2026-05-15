import React from 'react';

const values = [
  {
    title: 'Excellence by Design',
    description: 'Delivering innovative, precise, high-quality engineering solutions rooted in expert design.'
  },
  {
    title: 'People First',
    description: 'Prioritising growth, safety, and well-being to build lasting relationships.'
  },
  {
    title: 'Integrity Always',
    description: 'Upholding honesty, transparency, and ethical practices in every aspect of our work and partnerships.'
  },
  {
    title: 'Innovation with Purpose',
    description: 'Driving meaningful advancements that enhance performance, efficiency, and sustainability.'
  },
  {
    title: 'Process-Led Delivery',
    description: 'Building responsibly that protect both planet and people.'
  },
  {
    title: 'Sustainable Thinking',
    description: 'Building responsibly with practices that protect people and the planet.'
  }
];

const Values = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-4">Core Principles</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-gray-900">OUR VALUES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value, idx) => (
            <div key={idx} className="group space-y-6 p-8 rounded-3xl border border-gray-100 hover:border-brand-red/20 hover:bg-brand-red/[0.02] transition-all duration-300">
              <div className="w-12 h-px bg-brand-red group-hover:w-20 transition-all duration-500"></div>
              <h4 className="text-2xl font-medium text-gray-900 leading-tight">
                {value.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>{word} {i === 0 && <br className="hidden md:block" />}</React.Fragment>
                ))}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
