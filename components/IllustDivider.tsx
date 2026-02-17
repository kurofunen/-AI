
import React from 'react';
import { motion } from 'framer-motion';

const IllustDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-32 md:py-48 bg-white border-y border-black/[0.03]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center space-y-12"
      >
        <div className="flex items-center space-x-12 w-full px-12 opacity-60">
          <div className="h-[1px] flex-grow bg-black/5"></div>
          <div className="flex items-center space-x-8">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
              <path d="M0 10C10 0 20 20 30 10C40 0 50 20 60 10C70 0 80 20 90 10C100 0 110 20 120 10" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
            <span className="handwritten text-4xl transform rotate-[-3deg] opacity-40 font-thin italic tracking-widest">Aesthetics</span>
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
              <path d="M0 10C10 0 20 20 30 10C40 0 50 20 60 10C70 0 80 20 90 10C100 0 110 20 120 10" stroke="black" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="h-[1px] flex-grow bg-black/5"></div>
        </div>
        
        <div className="text-[9px] tracking-[1em] uppercase font-light opacity-20">
          Reissue Records presents
        </div>
      </motion.div>
    </div>
  );
};

export default IllustDivider;
