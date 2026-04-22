import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#900c7f] text-white pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* 1. Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
              <span className="text-[10px]">▶</span> Homepage
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
              <span className="text-[10px]">▶</span> About Us
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
              <span className="text-[10px]">▶</span> Our Services
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
              <span className="text-[10px]">▶</span> Themes
            </li>  
            <li className="hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
              <span className="text-[10px]">▶</span> Contact Us
            </li>
          </ul>
        </div>

        {/* 2. Reach us on */}
        <div>
          <h3 className="text-xl font-bold mb-6">Reach us on</h3>
          <div className="space-y-4 text-sm opacity-90">
            <div className="flex items-center gap-3 group cursor-pointer">
              <FaEnvelope className="text-lg group-hover:scale-110 transition-transform" />
              <span className="break-all">jadhavrameshwar1012@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <FaPhoneAlt className="text-lg group-hover:scale-110 transition-transform" />
              <span>7028413027</span>
            </div>
          </div>
        </div>

        {/* 3. Address Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#f87171]" />
            Address:
          </h3>
          <div className="text-sm leading-relaxed opacity-90">
            <p>Nadi Patra, Sai Solution Pvt Ltd</p>
            <p>Office No 1, 1st Floor, Building Name Ramlila,</p>
            <p>Jangali Maharaj Rd, Deccan Gymkhana,</p>
            <p>Pune, Maharashtra 411004</p>
          </div>
        </div>

        {/* 4. Social Media - Professional Icons Added */}
        <div>
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg">
              <FaPinterestP />
            </a>
          </div>
        </div>

      </div>
      
      <div className="mt-12 pt-6 border-t border-white/20 text-center text-xs opacity-70 italic">
        © 2026 RamasEvents | Made with ❤ by Latur Digital marketing
      </div>
    </footer>
  );
};

export default Footer;