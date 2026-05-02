import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Rama's Events - Professional Event Planner in Pune";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Learn more about Rama's Events, your trusted partner for creative event planning and luxury decorations in Pune.");
    }
  }, []);
  const features = [
    { 
      title: "Crafted With Imagination", 
      desc: "Every celebration begins with an idea. We transform your vision into beautiful, meaningful experiences that feel personal and full of charm.", 
      icon: "⭐" 
    },
    { 
      title: "Planning Made Effortless", 
      desc: "From vendor coordination to time-perfect execution, we make planning smooth, stress-free, and enjoyable for you.", 
      icon: "✅" 
    },
    { 
      title: "Designed With Heart", 
      desc: "We pour sincerity and emotion into every detail, creating events that feel warm, soulful, and unforgettable.", 
      icon: "💖" 
    },
    { 
      title: "Your Vision, Our Promise", 
      desc: "Your story matters to us. We tailor every element to match your style, needs, and budget with honesty and care.", 
      icon: "💎" 
    },
  ];

  const trustCards = [
    {
      title: "We Treat Your Day Like Our Own",
      desc: "From the first call to the final goodbye, our team cares like family — nothing is too small when it matters to you.",
      icon: "❤️",
      bgColor: "bg-pink-100"
    },
    {
      title: "Original Ideas, Tenderly Executed",
      desc: "We listen, imagine, and craft designs that reflect your story — not templates dressed up anew.",
      icon: "💡",
      bgColor: "bg-orange-100"
    },
    {
      title: "On Time, On Promise",
      desc: "You'll never chase us for details — we're on-site, punctual and prepared so your day stays calm and joyful.",
      icon: "⏰",
      bgColor: "bg-blue-100"
    },
    {
      title: "We Make It Simple For You",
      desc: "Full-service planning — one point of contact, one clear plan — so you can enjoy your celebration instead of managing it.",
      icon: "🪄",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="px-6 pt-24">
        <motion.div 
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[450px] w-full rounded-[60px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center px-4 shadow-2xl"
          style={{ backgroundImage: 'url("/footer.png")' }} 
        >
          <div className="absolute inset-0 bg-[#4d1a4d]/40"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-yellow-400 text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter drop-shadow-lg">
              About Rama's Events & Management
            </h1>
            <p className="text-white text-xl font-medium opacity-90">
              Luxury themes that redefine celebration — we create atmospheres your guests will never forget.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. MAIN HEADING */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-[#be185d] text-4xl md:text-6xl font-black max-w-5xl mx-auto leading-tight">
          Transforming Concepts Into <br /> Unforgettable Events
        </h2>
      </div>

      {/* 3. FIRST CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12, backgroundColor: "#be185d" }}
            className="bg-white rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-start text-left group transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
            <h2 className="text-[#be185d] group-hover:text-white text-2xl font-black mb-4 transition-colors">{item.title}</h2>
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 4. NEW SECTION: "Why families trust Ramas Events" (Exact Match to Screenshot) */}
      <section className="relative mt-20">
        {/* Wavy SVG Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180" aria-hidden="true">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Gradient Background Container */}
        <div className="bg-gradient-to-br from-[#8b1c5a] via-[#5b106e] to-[#3a0d4d] pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#e287a1] text-3xl md:text-5xl font-black mb-4"
            >
              Why families trust Ramas Events
            </motion.h2>
            <p className="text-white/70 text-lg mb-16 italic">Small gestures. Big feelings. We design moments your loved ones will keep talking about.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
                >
                  {/* Icon Circle */}
                  <div className={`${card.bgColor} w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner`}>
                    {card.icon}
                  </div>
                  
                  <h4 className="text-gray-900 font-black text-xl mb-4 leading-tight">{card.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-16">
              <Link 
                to='/contact-us'
                className="bg-[#be185d]/30 hover:bg-[#be185d]/50 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md inline-block"
                aria-label="Contact us to plan your event"
              >
                Let's plan something beautiful
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;