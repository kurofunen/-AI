
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../constants.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      <AnimatePresence initial={false} mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src={HERO_SLIDES[index].image} 
              alt={HERO_SLIDES[index].title} 
              className="w-full h-full object-cover ken-burns"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-8xl font-serif-jp font-light tracking-[0.2em] mb-6 uppercase drop-shadow-2xl">
                {HERO_SLIDES[index].title}
              </h1>
              <p className="text-[10px] md:text-xs tracking-[0.6em] font-light uppercase mb-12 opacity-80">
                {HERO_SLIDES[index].subtitle}
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                className="inline-block px-12 py-4 border border-white/40 text-[10px] tracking-[0.4em] uppercase font-bold transition-all duration-500 backdrop-blur-sm pointer-events-auto"
              >
                View Details
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-16 left-0 w-full px-12 flex justify-between items-end z-30">
        <div className="flex items-center space-x-6">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative h-8 flex items-center"
            >
              <span className={`text-[9px] mr-3 font-mono transition-opacity duration-300 ${index === i ? 'opacity-100' : 'opacity-30'}`}>
                0{i + 1}
              </span>
              <div className={`w-12 h-[1px] transition-all duration-700 origin-left ${index === i ? 'bg-white scale-x-100' : 'bg-white/20 scale-x-0.5 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-8">
            <button onClick={prevSlide} className="text-white/40 hover:text-white transition-colors">
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <button onClick={nextSlide} className="text-white/40 hover:text-white transition-colors">
              <ChevronRight size={32} strokeWidth={1} />
            </button>
        </div>
      </div>
      
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left z-30 hidden md:block">
        <span className="text-[9px] tracking-[0.8em] uppercase text-white font-light opacity-30">
          Reissue Records
        </span>
      </div>
    </section>
  );
};

export default Hero;
