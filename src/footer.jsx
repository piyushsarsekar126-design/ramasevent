import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#900c7f] text-white pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* 1. Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Homepage
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/about-us" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> About Us
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/services" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Our Services
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/contact-us" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 2. Popular Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">Popular Services</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/wedding-planner-pune" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Wedding Planning
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/birthday-party-decoration-pune" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Birthday Decoration
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/baby-shower-decoration-pune" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Baby Shower Decor
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/haldi-mehendi-decoration-pune" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Haldi & Mehendi
              </Link>
            </li>
            <li className="hover:translate-x-2 transition-transform cursor-pointer">
              <Link to="/anniversary-decoration-pune" className="flex items-center gap-2">
                <span className="text-[10px]">▶</span> Anniversary Decor
              </Link>
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

        {/* 3. Map Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#f87171]" />
            Our Location:
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60532.66677365705!2d73.79853760910653!3d18.515717000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb59a6ba0ad9%3A0x761384e64d67d5c2!2sRama&#39;s%20events%20%26%20management!5e0!3m2!1sen!2sin!4v1776854715356!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 4. Social Media - Professional Icons Added */}
        <div>
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=100083840807092&sk=about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg" aria-label="Visit our Facebook page">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ramas_events__management?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg" aria-label="Visit our Instagram profile">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@Ramaseventsandmanagement" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg" aria-label="Visit our YouTube channel">
              <FaYoutube />
            </a>
            <a href="https://in.pinterest.com/ramas_events__management/?invite_code=d34b2ff4f1374e0d983f531874022e0e&sender=585186682739949656" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-[#900c7f] transition-all duration-300 shadow-lg" aria-label="Visit our Pinterest profile">
              <FaPinterestP />
            </a>
          </div>
        </div>

      </div>
      
      <div className="mt-12 pt-6 border-t border-white/20 text-center text-xs opacity-70 italic">
        © 2026 RamasEvents | Made with ❤ by <a href="https://ldma.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">Latur Digital marketing</a>
      </div>
    </footer>
  );
};

export default Footer;