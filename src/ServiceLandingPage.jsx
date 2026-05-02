import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const ServiceLandingPage = ({ title, description, content, h1, metaDesc, faqs, slug }) => {
  useEffect(() => {
    const canonical = `https://ramasevents.in/${slug}`;
    document.title = `${title} | Rama's Events Pune`;
    
    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metaDesc);

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);

    // OG & Twitter tags update
    const updateTag = (selector, attr, value) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };

    updateTag('meta[property="og:title"]', 'content', `${title} | Rama's Events Pune`);
    updateTag('meta[property="og:description"]', 'content', metaDesc);
    updateTag('meta[property="og:url"]', 'content', canonical);
    updateTag('meta[property="twitter:title"]', 'content', `${title} | Rama's Events Pune`);
    updateTag('meta[property="twitter:description"]', 'content', metaDesc);
    updateTag('meta[property="twitter:url"]', 'content', canonical);

    window.scrollTo(0, 0);
  }, [title, metaDesc, slug]);

  const handleWhatsApp = () => {
    const phoneNumber = "917028413027";
    const message = `Hello Rama's Events, I am interested in ${title} services in Pune.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80" 
            alt={title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#db2777] mb-6 leading-tight uppercase italic"
          >
            {h1}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-800 font-medium mb-8"
          >
            {description}
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="bg-[#db2777] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 mx-auto"
          >
            Book Now via WhatsApp <FaWhatsapp className="text-2xl" />
          </motion.button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="prose prose-pink prose-lg max-w-none text-gray-700 leading-relaxed">
          {content.split('\n\n').map((para, i) => (
            <p key={i} className="mb-6">{para}</p>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100">
            <FaCalendarAlt className="text-3xl text-[#db2777] mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Planning</h3>
            <p className="text-sm opacity-80">Detailed coordination from start to finish by Pune's best event experts.</p>
          </div>
          <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100">
            <FaCheckCircle className="text-3xl text-[#db2777] mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Decor</h3>
            <p className="text-sm opacity-80">High-quality themes and unique decorations tailored to your vision.</p>
          </div>
          <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100">
            <FaWhatsapp className="text-3xl text-[#db2777] mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Support</h3>
            <p className="text-sm opacity-80">Quick communication and transparent pricing for all services.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12 text-gray-800 uppercase tracking-tighter">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-[#db2777]">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="bg-[#db2777] rounded-[50px] p-12 text-center text-white max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Make Your Celebration Unforgettable</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">Contact Rama's Events today for the best {title} in Pune.</p>
          <button 
            onClick={handleWhatsApp}
            className="bg-white text-[#db2777] px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl relative z-10"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceLandingPage;
