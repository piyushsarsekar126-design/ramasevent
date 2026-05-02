import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className=" top-6 left-0 right-0 max-w-[1400px] w-full bg-white shadow-xl rounded-full z-[100] px-16 py-5 flex items-center justify-between border border-gray-100 mx-auto transition-all duration-300">
      
      {/* 1. Logo */}
      <div className="flex-none cursor-pointer" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
      </div>

      {/* 2. Center: NAV LINKS */}
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex gap-12 font-bold text-gray-800 uppercase text-[12px] tracking-[0.2em] items-center whitespace-nowrap">
          <li onClick={() => navigate('/')} className="cursor-pointer hover:text-[#db2777] transition">Home</li>
          
          <li onClick={() => scrollToSection('themes')} className="cursor-pointer hover:text-[#db2777] transition">Themes</li>
          
          {/* About Us Link */}
          <li>
            <Link to="/about-us" className="cursor-pointer hover:text-[#db2777] transition">About Us</Link>
          </li>

          {/* Services - NEW PAGE ON CLICK + DROPDOWN ON HOVER */}
          <li 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Click karne pe naya page khulega */}
            <Link 
              to="/services" 
              className="flex items-center gap-1 hover:text-[#db2777] transition cursor-pointer"
            >
              Services <span className="text-[10px] opacity-70">▼</span>
            </Link>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 z-[999]">
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl p-5 border border-gray-100">
                  <div className="flex flex-col gap-2">
                    <Link to="/wedding-planner-pune" onClick={() => setIsDropdownOpen(false)} className="text-left py-2 px-3 hover:bg-pink-50 rounded-xl hover:text-[#db2777] font-bold text-[10px] tracking-wider transition">WEDDING PLANNING</Link>
                    <Link to="/birthday-party-decoration-pune" onClick={() => setIsDropdownOpen(false)} className="text-left py-2 px-3 hover:bg-pink-50 rounded-xl hover:text-[#db2777] font-bold text-[10px] tracking-wider transition">BIRTHDAY PARTIES</Link>
                    <Link to="/haldi-mehendi-decoration-pune" onClick={() => setIsDropdownOpen(false)} className="text-left py-2 px-3 hover:bg-pink-50 rounded-xl hover:text-[#db2777] font-bold text-[10px] tracking-wider transition">HALDI & MEHENDI</Link>
                    <Link to="/baby-shower-decoration-pune" onClick={() => setIsDropdownOpen(false)} className="text-left py-2 px-3 hover:bg-pink-50 rounded-xl hover:text-[#db2777] font-bold text-[10px] tracking-wider transition">BABY SHOWER</Link>
                    <Link to="/anniversary-decoration-pune" onClick={() => setIsDropdownOpen(false)} className="text-left py-2 px-3 hover:bg-pink-50 rounded-xl hover:text-[#db2777] font-bold text-[10px] tracking-wider transition">ANNIVERSARY DECOR</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact-us" className="cursor-pointer hover:text-[#db2777] transition">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* 3. Book Now */}
      <Link 
        to="/book-now" 
        className="bg-[#db2777] text-white px-8 py-3 rounded-full font-bold hover:bg-[#be185d] transition shadow-lg text-[12px] tracking-wider"
      >
        BOOK NOW
      </Link>
    </nav>
  );
};

export default Navbar;