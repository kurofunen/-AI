
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MOCK_ALBUMS } from '../constants';

const DiscographySlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="discography" className="relative py-40 bg-[#080808] text-white overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-20 left-12 select-none pointer-events-none opacity-[0.03] z-0">
        <span className="text-[15vw] font-serif-jp italic font-bold tracking-tighter uppercase leading-none whitespace-nowrap">
          Discography
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto px-12 relative z-10">
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-8">
            <h2 className="text-2xl md:text-3xl font-serif-jp font-bold tracking-[0.3em] uppercase">Discography</h2>
            <div className="w-24 h-[1px] bg-white/20"></div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex space-x-8 md:space-x-12 overflow-x-auto pb-16 snap-x no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MOCK_ALBUMS.map((album, index) => (
            <motion.a
              key={album.id}
              href="#"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[280px] md:w-[380px] snap-start group"
            >
              <div className="relative aspect-square mb-8 overflow-hidden bg-white/5">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                {/* Type Badge on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.5em] font-bold border border-white px-4 py-2 uppercase">
                    View {album.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 px-1">
                <span className="text-[10px] md:text-[11px] font-mono opacity-40 tracking-widest block">
                  {album.releaseDate}
                </span>
                <h3 className="text-lg md:text-xl font-serif-jp font-light tracking-widest uppercase leading-tight group-hover:text-white/80 transition-colors">
                  {album.title}
                </h3>
              </div>
            </motion.a>
          ))}
          
          {/* Archive / View All Slide */}
          <motion.a 
            href="#"
            className="flex-shrink-0 w-[280px] md:w-[380px] snap-start flex flex-col items-center justify-center border border-white/5 hover:bg-white/[0.02] transition-all duration-500 aspect-square"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-30">View All</span>
            <div className="w-12 h-[1px] bg-white/10 my-6"></div>
            <span className="handwritten text-4xl opacity-20 italic">Archives</span>
          </motion.a>
        </div>

        {/* Custom Scroll Hint */}
        <div className="flex items-center space-x-4 mt-8 opacity-20">
          <div className="w-12 h-[1px] bg-white"></div>
          <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Slide to explore</span>
        </div>
      </div>
    </section>
  );
};

export default DiscographySlider;
