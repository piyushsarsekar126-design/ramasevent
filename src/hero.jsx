import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-4 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
          alt="Luxury Event Decoration in Pune - Rama's Events" 
          width="1920"
          height="1080"
          loading="eager"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-white max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black text-yellow-400 mb-6 uppercase tracking-tighter drop-shadow-2xl italic">
          Best Event Planner & Decoration in Pune
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
          Transforming your celebrations into unforgettable memories with luxury themes, 
          elegant decor, and seamless planning for every special occasion in Pune.
        </p>
      </div>
    </section>
  );
};

export default Hero;