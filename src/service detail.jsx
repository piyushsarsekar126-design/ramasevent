import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Data ko alag file mein rakhna best hai, par yahan main define kar raha hoon
const servicesData = {
  wedding: { title: "Beautiful Wedding Planning", desc: "Creative wedding planning from engagement to reception, including decor and guest management in Pune.", img: "/wedding.jpeg" },
  birthday: { title: "Creative Birthday Party Organizers", desc: "Celebrate milestones with style! We specialize in personalized birthday decorations and unique theme setups.", img: "/birthday.jpg" },
  corporate: { title: "Expert Corporate Event Planning", desc: "From high-profile conferences and product launches to engaging team-building retreats.", img: "/corporate-event.jpg" },
  luxury: { title: "Destination & Luxury Wedding", desc: "Turn your dream wedding into reality with our elegant mandap decor and grand reception management.", img: "/stage descoration.jpg" },
  family: { title: "Family Celebration Experts", desc: "Specializing in cozy and elegant setups for anniversaries or naming ceremonies.", img: "/kids party.jpg" },
  private: { title: "Private Event Planning", desc: "Bespoke event planning for house parties and traditional poojas, ensuring every milestone is unforgettable.", img: "/luxary images.jpg" }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];

  useEffect(() => {
    if (service) {
      const canonical = `https://ramasevents.in/service/${id}`;
      document.title = `${service.title} | Rama's Events Pune`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${service.desc} Best ${service.title} services in Pune by Rama's Events.`);
      }

      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', canonical);
      }
    }
    window.scrollTo(0, 0);
  }, [id, service]);

  if (!service) return <div className="py-20 text-center text-[#db2777] font-bold">Service Not Found!</div>;

  return (
    <div className="min-h-screen bg-[#fdf2f8] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden md:flex">
        <div className="md:w-1/2 h-96 md:h-auto">
          <img 
            src={service.img} 
            alt={`${service.title} - Rama's Events Pune`} 
            width="800"
            height="600"
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl font-black text-[#db2777] mb-6 leading-tight">{service.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.desc}</p>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => window.open(`https://wa.me/917028413027?text=I want to book ${service.title}`, "_blank")}
              className="w-full bg-[#db2777] text-white py-4 rounded-2xl font-bold hover:bg-[#be185d] transition shadow-lg"
            >
              Book via WhatsApp 📲
            </button>
            <button 
              onClick={() => navigate('/book-now')}
              className="w-full border-2 border-[#db2777] text-[#db2777] py-4 rounded-2xl font-bold hover:bg-[#fdf2f8] transition"
            >
              Fill Enquiry Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
