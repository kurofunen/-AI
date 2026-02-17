
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NewsList from './components/NewsList';
import IllustDivider from './components/IllustDivider';
import DiscographySlider from './components/DiscographySlider';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      <CustomCursor />
      <Navigation />
      
      {/* Smooth entry animation for the whole page */}
      <div className="animate-in fade-in duration-1000 ease-out">
        <Hero />
        
        {/* Content sections with proper layering and spacing */}
        <div className="relative bg-white z-20 shadow-[0_-40px_100px_rgba(0,0,0,0.1)]">
          <section id="news" className="bg-white">
            <NewsList />
          </section>
          
          <IllustDivider />
          
          <section id="discography" className="bg-[#080808]">
            <DiscographySlider />
          </section>
          
          {/* Profile Section - Enhanced to match reference site style */}
          <section id="profile" className="py-48 bg-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] select-none flex items-center justify-center">
                <span className="text-[25vw] font-serif-jp italic font-bold tracking-tighter">Profile</span>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-16 h-[1px] bg-black mx-auto mb-12 opacity-20"></div>
              <h2 className="text-[10px] tracking-[0.8em] font-bold uppercase mb-16 opacity-40">Creative Identity</h2>
              
              <p className="text-xl md:text-3xl font-serif-jp font-light tracking-[0.1em] leading-[2.2] mb-12 px-4">
                ハチ名義でボカロシーンを席巻し、<br />
                2012年本名の米津玄師として活動を開始。<br />
                独自のサウンドと詩世界で、<br />
                現代日本のポップシーンにおける唯一無二の存在感を放つ。
              </p>
              
              <div className="mt-16 flex flex-col items-center">
                <span className="handwritten text-6xl opacity-30 italic block mb-4">Kenshi Yonezu</span>
                <a href="#profile" className="text-[9px] tracking-[0.5em] font-bold border-b border-black/20 pb-1 hover:border-black transition-colors uppercase">View Full Profile</a>
              </div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </main>
  );
};

export default App;
