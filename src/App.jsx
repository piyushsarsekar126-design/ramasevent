import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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
import Footer from './footer';
import ServiceLandingPage from './ServiceLandingPage';
import { landingPagesData } from './serviceData';

const Home = () => {
  useEffect(() => {
    document.title = "Rama's Events | Best Event Planner & Decoration in Pune";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Rama's Events offers premier event planning and decoration services in Pune for weddings, birthdays, corporate events, and private celebrations.");
    }
  }, []);

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <main>
        <div className="py-12 px-6 text-center max-w-4xl mx-auto">
          <p className="text-gray-800 text-xl leading-relaxed font-medium">
            Looking for the <span className="text-[#db2777] font-bold underline decoration-pink-300">best event planner in Pune</span>? 
            Rama's Events specializes in creating premium experiences for weddings, corporate gatherings, 
            and birthday celebrations with exquisite decorations and professional management.
          </p>
        </div>

        {/* SEO Keyword Section */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-10 text-gray-900 uppercase tracking-tight">Our Specialized Services in Pune</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 font-bold">01</div>
                <h3 className="text-pink-600 font-bold text-lg mb-2 text-center uppercase tracking-wide">Wedding Planner Pune</h3>
                <p className="text-gray-600 text-sm text-center">Creating dream weddings with premium management and exquisite setups.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 font-bold">02</div>
                <h3 className="text-pink-600 font-bold text-lg mb-2 text-center uppercase tracking-wide">Birthday Decoration Pune</h3>
                <p className="text-gray-600 text-sm text-center">Best birthday party decoration in Pune for kids and adults with unique themes.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 font-bold">03</div>
                <h3 className="text-pink-600 font-bold text-lg mb-2 text-center uppercase tracking-wide">Event Management Pune</h3>
                <p className="text-gray-600 text-sm text-center">Top corporate event management pune services for professional business gatherings.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 font-bold">04</div>
                <h3 className="text-pink-600 font-bold text-lg mb-2 text-center uppercase tracking-wide">Baby Shower Decoration Pune</h3>
                <p className="text-gray-600 text-sm text-center">Elegant baby shower setups with customized props and creative balloon designs.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 font-bold">05</div>
                <h3 className="text-pink-600 font-bold text-lg mb-2 text-center uppercase tracking-wide">Haldi Mehendi Pune</h3>
                <p className="text-gray-600 text-sm text-center">Vibrant haldi mehendi decoration pune styles for traditional celebrations.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="themes">
          <Services />
          <Themes />
        </div>
      </main>  
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
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
            
            <Route path="/services" element={<ServicesPage />} /> 
            <Route path="/services-pune" element={<Navigate to="/services" replace />} />
            
            <Route path="/book-now" element={<BookingPage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />

            {/* SEO Landing Pages */}
            <Route path="/birthday-party-decoration-pune" element={<ServiceLandingPage {...landingPagesData.birthday} />} />
            <Route path="/baby-shower-decoration-pune" element={<ServiceLandingPage {...landingPagesData.babyShower} />} />
            <Route path="/haldi-mehendi-decoration-pune" element={<ServiceLandingPage {...landingPagesData.haldiMehendi} />} />
            <Route path="/anniversary-decoration-pune" element={<ServiceLandingPage {...landingPagesData.anniversary} />} />
            <Route path="/wedding-planner-pune" element={<ServiceLandingPage {...landingPagesData.wedding} />} />

            {/* Legacy/Redirects */}
            <Route path="/themes" element={<Navigate to="/#themes" replace />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
          <button 
            onClick={() => window.open("tel:+917028413027")} 
            className="bg-blue-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="Call Rama's Events"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.26a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
          
          <button 
            onClick={() => window.open("https://wa.me/917028413027")} 
            className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="WhatsApp Rama's Events"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>

        {/* Scroll to Top */}
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#db2777] p-3 rounded-xl shadow-2xl text-white hover:bg-[#be185d] transition-colors" aria-label="Scroll to top">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;