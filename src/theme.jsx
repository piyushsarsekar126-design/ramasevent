import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Wedding Planning',
    message: ''
  });

  const handleWhatsApp = () => {
    const phoneNumber = "918421299301"; 
    const message = `*New Booking Enquiry*%0A*Name:* ${formData.name}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fdf2f8] py-20 px-6 flex items-center justify-center">
      <div className="bg-white rounded-[40px] shadow-2xl max-w-5xl w-full overflow-hidden md:flex">
        
        {/* Left Side: Form */}
        <div className="md:w-3/5 p-10 md:p-16">
          {/* Pink Text for Headings */}
          <h2 className="text-[#be185d] font-bold mb-2 uppercase tracking-widest text-[10px]">Full Name</h2>
          <input 
            type="text" 
            placeholder="Enter your name" 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-4 bg-gray-50 rounded-2xl mb-6 outline-none border border-transparent focus:border-[#f472b6] transition" 
          />
          
          <h2 className="text-[#be185d] font-bold mb-2 uppercase tracking-widest text-[10px]">Select Service</h2>
          <select 
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full p-4 bg-gray-50 rounded-2xl mb-6 outline-none border border-transparent focus:border-[#f472b6] transition appearance-none"
          >
            <option>Wedding Planning</option>
            <option>Birthday Party</option>
            <option>Corporate Event</option>
            <option>Private Event</option>
          </select>

          <h2 className="text-[#be185d] font-bold mb-2 uppercase tracking-widest text-[10px]">Your Message</h2>
          <textarea 
            placeholder="Tell us about your event..." 
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-4 bg-gray-50 rounded-2xl mb-10 h-32 outline-none border border-transparent focus:border-[#f472b6] transition resize-none"
          ></textarea>

          {/* Bright Pink Button */}
          <button 
            onClick={handleWhatsApp}
            className="w-full bg-[#db2777] text-white py-5 rounded-2xl font-bold mb-4 hover:bg-[#be185d] transition shadow-lg flex items-center justify-center gap-2"
          >
            Send via WhatsApp <FaWhatsapp />
          </button>
          
          {/* Pink Border Button */}
          <button className="w-full border-2 border-[#db2777] text-[#db2777] py-5 rounded-2xl font-bold hover:bg-[#fdf2f8] transition flex items-center justify-center gap-2">
            Send via Email <FaEnvelope />
          </button>
        </div>

        {/* Right Side: Pink Info Box */}
        <div className="md:w-2/5 bg-[#db2777] p-12 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-black mb-6 leading-tight">Let's Create Magic!</h1>
          <p className="opacity-90 mb-12 leading-relaxed font-medium">
            Rama's Events is here to make your celebrations unforgettable. Reach out to us directly for quick bookings.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full text-xl"><FaPhone /></div>
              <div>
                <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Call Us</p>
                <p className="text-lg font-bold">+91 7028413027</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full text-xl"><FaMapMarkerAlt /></div>
              <div>
                <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Location</p>
                <p className="text-lg font-bold">Latur, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;