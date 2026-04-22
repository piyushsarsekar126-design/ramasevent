import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './navbar';
import Hero from './hero';
import Services from './services';
import ServicesPage from './servicespage';
import ServiceDetail from './service detail'; 
import Themes from './theme';
import Contact from './contact';
import BookingPage from './booking'; 
import About from './About'; 
import Footer from './footer'; // Check spelling: footer vs Footer

const Home = () => {
  return (
    <>
      <div id="home"><Hero /></div>
      <main>
        <div className="py-12 px-6 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            Looking for an <span className="font-bold">event planner in Pune</span>? Rama's Events delivers professional event planning and decoration services for weddings, corporate events, birthdays, and private celebrations.
          </p>
        </div>
        <div id="themes">
          <Services />
          <Themes />
        </div>
      </main>  
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#fff7fb] font-sans flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesPage />} /> 
            <Route path="/book-now" element={<BookingPage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
          <div onClick={() => window.open("tel:+917028413027")} className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-blue-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.26a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
          {/* Add WhatsApp SVG here as well */}
        </div>

        {/* Scroll to Top */}
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#db2777] p-2 rounded shadow-lg text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;  