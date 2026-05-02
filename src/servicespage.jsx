import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Our Services | Rama's Events - Event Decoration in Pune";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Explore our wide range of event services in Pune, including weddings, birthdays, corporate events, and private celebrations with premium decorations.");
    }
  }, []);
  // Saare cards yahan add kar diye hain
  const serviceList = [
    {
      title: "Wedding & Engagement Planning and Decoration",
      desc: "Professional wedding and engagement planning and decoration services in Pune with elegant décor and seamless coordination.",
      badge: "Premium",
      link: "/wedding-planner-pune"
    },
    {
      title: "Baby Shower Decoration in Pune",
      desc: "Beautiful baby shower decoration in Pune with pastel themes, customized setups, and complete event styling.",
      link: "/baby-shower-decoration-pune"
    },
    {
      title: "Reception Decoration in Pune",
      desc: "Elegant reception decoration in Pune including stage décor, lighting, floral designs, and luxury themes.",
      link: "/service/reception"
    },
    {
      title: "Birthday Party Planning and Decoration",
      desc: "Creative birthday party planning and decoration in Pune for kids and adults with theme-based décor.",
      link: "/birthday-party-decoration-pune"
    },
    {
      title: "Naming Ceremony Decoration in Pune",
      desc: "Traditional and modern naming ceremony decoration in Pune for newborn blessings and family gatherings.",
      link: "/service/naming-ceremony"
    },
    {
      title: "Flower Decoration Services in Pune",
      desc: "Fresh flower decoration services in Pune for weddings, receptions, parties, and special occasions.",
      link: "/service/flowers"
    },
    {
      title: "Balloon Decoration in Pune",
      desc: "Trendy balloon decoration in Pune with arches, backdrops, and customized balloon themes for all events.",
      link: "/service/balloon"
    },
    {
      title: "Haldi & Mehendi Decoration in Pune",
      desc: "Colourful haldi and mehendi decoration in Pune with traditional, floral, and vibrant décor themes.",
      link: "/haldi-mehendi-decoration-pune"
    },
    {
      title: "Surprise Decoration in Pune",
      desc: "Romantic and creative surprise decoration in Pune including room décor, midnight surprises, and proposals.",
      link: "/service/surprise"
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* 1. Our Services Badge */}
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 shadow-sm"
        >
          Our Services
        </motion.span>

        {/* 2. Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[#E75480] text-4xl md:text-6xl font-black mb-6 tracking-tight"
        >
          Making Every Celebration Memorable
        </motion.h1>

        {/* 3. Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
          From intimate baby showers to grand wedding celebrations, we create moments that stay forever.
        </p>

        {/* 4. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[40px] p-10 text-left shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden group border border-gray-50 flex flex-col justify-between h-full"
            >
              {service.badge && (
                <span className="absolute top-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-md z-10">
                  {service.badge}
                </span>
              )}

              <div>
                <h2 className="text-[pink] text-2xl font-black mb-5 leading-tight transition-colors group-hover:text-[#db2777]">
                  {service.title}
                </h2>
                <p className="text-black-400 text-[15px] leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>
              </div>

              <Link 
                to={service.link}
                className="text-[#db2777] font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                 <span className="text-xl"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;