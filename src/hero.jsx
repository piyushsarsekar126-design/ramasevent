import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-4 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
          alt="Event Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-white background-light-pink max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          Luxury Event Planning & Decoration Services in Pune
        </h1>
        <p className="text-lg md:text-xl text-black-200">
          Premium event planners in Pune creating weddings, birthdays, and corporate celebrations with elegant themes, flawless decor, and unforgettable experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;