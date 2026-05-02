import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; // Icons import kiye

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Rama's Events - Event Planner in Pune";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Contact Rama's Events in Pune for expert event planning, luxury decorations, and professional coordination for your special day.");
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section with Pink Overlay */}
      <div className="px-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full rounded-[60px] overflow-hidden bg-cover bg-center flex items-center justify-center text-center px-4"
          style={{ backgroundImage: 'url("/footer.png")' }} 
        >
          <div className="absolute inset-0 bg-[#be185d]/40 backdrop-blur-[2px]"></div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-yellow-400 text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
              Get in Touch with Rama's Events
            </h1>
            <p className="text-white text-xl font-medium opacity-90">
              Let's create your dream event together. Reach out to us today!
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Email Card */}
        <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center">
          <div className="text-[#be185d] text-5xl mb-4">
            <FaEnvelope />
          </div>
          <h2 className="text-2xl font-black text-[#be185d] mb-2">Email Address</h2>
          <p className="text-gray-600 font-medium text-lg">jadhavrameshwar1012@gmail.com</p>
        </motion.div>

        {/* Address Card - Yahan Map Icon Add Kiya Hai */}
        <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center">
          <div className="text-[#be185d] text-5xl mb-4">
            <FaMapMarkerAlt /> 
          </div>
          <h2 className="text-2xl font-black text-[#be185d] mb-2">Address</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            Nadi Patra, Sai Solution Pvt Ltd, Office No 1,<br />
            1st Floor, Building Name Ramlila, Pune 411004
          </p>
        </motion.div>

        {/* Phone Card */}
        <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center">
          <div className="text-[#be185d] text-5xl mb-4">
            <FaPhoneAlt />
          </div>
          <h2 className="text-2xl font-black text-[#be185d] mb-2">Telephone</h2>
          <p className="text-gray-600 font-medium text-lg">+91 7028413027</p>
        </motion.div>
      </div>

      {/* 3. Footer Banner (Ready to Book) */}
      <div className="px-6 pb-20">
        <div 
          className="relative h-[300px] w-full rounded-[50px] overflow-hidden bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
          style={{ backgroundImage: 'url("/footer.png")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">Ready To Book Your Party?</h2>
            <p className="text-xl mb-8 opacity-90 font-medium">Connect with us now for your event planning</p>
            
            <Link 
              to="/book-now" 
              className="bg-[#be185d] hover:bg-[#a0144d] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all uppercase tracking-widest inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;