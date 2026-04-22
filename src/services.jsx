import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { title: "Expert Corporate Event Planning in Pune", desc: "From high-profile conferences and product launches to engaging team-building retreats, we provide end-to-end corporate event management.", img: "/corporate-event.jpg" },
  { title: "Beautiful Wedding planning", desc: "Creative wedding planning from engagement to reception, including decor and guest management in Pune.", img: "/wedding.jpeg" },
  { title: "Creative Birthday Party Organizers", desc: "Celebrate milestones with style! We specialize in personalized birthday decorations and unique theme setups.", img: "/birthday.jpg" },
  { title: "Destination & Luxury Wedding Planner", desc: "Turn your dream wedding into reality with our elegant mandap decor and grand reception management.", img: "/stage descoration.jpg" },
  { title: "Family Reunion & Celebration Experts", desc: "Specializing in cozy and elegant setups for anniversaries, naming ceremonies, or grand family reunions.", img: "/kids party.jpg" },
  { title: "Private Event Planning in Pune", desc: "Bespoke event planning for house parties and traditional poojas, ensuring every family milestone is unforgettable.", img: "/luxary images.jpg" }
];

const themeData = [
  { title: "Birthday Themes For Boys", items: ["Superheroes", "Avengers", "Chhota Bheem", "Motu Patlu", "Doraemon", "Minions", "Car Racing", "Jungle Safari", "Paw Patrol", "Mickey Mouse"], customColor: "#1e3a45", pillColor: "bg-white/10", pillWidth: "w-48" },
  { title: "Birthday Themes For Girls", items: ["Barbie", "Princess Castle", "Frozen", "Cinderella", "Minnie Mouse", "Unicorn", "Butterfly Garden", "Mermaids", "Candyland", "Hello Kitty"], customColor: "#9333ea", pillColor: "bg-white/20", pillWidth: "w-64" },
  { title: "Unisex Kids Themes", items: ["Cocomelon", "Peppa Pig", "Under the Sea", "Circus / Carnival", "Farm Theme", "Lego Theme", "Toy Story", "Jungle Safari", "Neon Glow Party", "Waterpark Theme"], customColor: "#c2410c", pillColor: "bg-black/10", pillWidth: "w-72" },
  { title: "Teen Birthday Themes", items: ["Neon Glow", "TikTok Theme", "Bollywood Night", "Hollywood Red Carpet", "Gaming Theme", "Music / DJ Night", "Pool Party", "Boho Theme", "Starry Night", "Retro 90s"], customColor: "#1e1b4b", pillColor: "bg-white/10", pillWidth: "w-56" },
  { title: "1st Birthday Themes (Special)", items: ["Boss Baby", "Mr. ONE-derful", "Miss ONE-derful", "One in a Melon", "Wild One", "Twinkle Star", "One-derland", "One Sweet Baby", "Little Princess", "Baby Angel"], customColor: "#1d4ed8", pillColor: "bg-white/30", pillWidth: "w-60" },
  { title: "Adult Birthday Themes", items: ["Black & Gold Luxury", "White Party", "Red Carpet", "Casino Night", "Masquerade Ball", "Bollywood Theme", "Retro 80's", "Royal Maharaja", "Arabian Nights", "Disco Party"], customColor: "#1c1917", pillColor: "bg-white/10", pillWidth: "w-52" }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (title) => {
    const phoneNumber = "7028413027"; 
    const message = `Hello Rama's Events, I am interested in booking: ${title}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-6 bg-[#fdf2f8] overflow-x-hidden relative">
      
      {/* SERVICE CARDS SECTION */}
      <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
          >
            <div className="overflow-hidden h-56 cursor-pointer" onClick={() => setSelectedService(s)}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-pink-800 mb-3 group-hover:text-purple-700 transition-colors">{s.title}</h2>
              <p className="text-black-600 font-bold text-[14px] mb-8 flex-1 leading-relaxed line-clamp-2">{s.desc}</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedService(s)}
                  className="flex-1 border-2 border-orange-700 text-purple-700 py-2.5 rounded-full text-[10px] font-bold hover:bg-black-50 transition uppercase tracking-tighter"
                >
                  VIEW DETAILS
                </button>
                <button 
                  onClick={() => handleBookNow(s.title)}
                  className="flex-1 bg-pink-700 text-white py-2.5 rounded-full text-[10px] font-bold hover:bg-purple-800 transition shadow-md uppercase tracking-tighter"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* THEME CARDS SECTION */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {themeData.map((theme, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[40px] p-10 md:p-14 shadow-2xl text-white flex flex-col justify-between min-h-[520px] relative overflow-hidden"
            style={{ backgroundColor: theme.customColor }}
          >
            <div onClick={() => handleBookNow(theme.title)} className="cursor-pointer">
              <h3 className="text-[#ffde59] text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                {theme.title}
              </h3>
              <p className="text-white/80 text-[14px] mb-10 leading-relaxed font-medium max-w-sm">
                Amazing and trending decoration themes tailored for a memorable celebration.
              </p>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                {theme.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full shrink-0 opacity-70"></span>
                    <span className="text-[13px] font-bold tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div 
              onClick={() => handleBookNow(theme.title)}
              className={`mt-10 h-6 rounded-full cursor-pointer hover:opacity-80 transition-opacity ${theme.pillWidth} ${theme.pillColor}`}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* VIEW DETAILS MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] overflow-hidden max-w-2xl w-full shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-colors"
              >
                ✕
              </button>

              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-black text-gray-800 mb-4 leading-tight">{selectedService.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{selectedService.desc}</p>
                  
                  <button 
                    onClick={() => handleBookNow(selectedService.title)}
                    className="w-full bg-purple-700 text-white py-4 rounded-2xl font-bold hover:bg-purple-800 transition-colors shadow-lg shadow-purple-200 uppercase tracking-wider text-xs"
                  >
                    BOOK THIS SERVICE NOW
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Services;