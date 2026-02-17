
import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_NEWS } from '../constants.tsx';
import { ChevronRight } from 'lucide-react';

const NewsList: React.FC = () => {
  return (
    <section id="news" className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex items-center space-x-12 mb-20">
        <h2 className="text-6xl font-serif-jp font-light tracking-widest uppercase italic">News</h2>
        <div className="h-[1px] flex-grow bg-black/5"></div>
        <a href="#news" className="text-[10px] tracking-[0.4em] font-bold hover:underline opacity-50 flex items-center">
          VIEW ALL <ChevronRight size={12} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-0">
        {MOCK_NEWS.map((item, index) => (
          <motion.a
            key={item.id}
            href={`#news/${item.id}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row items-start md:items-center py-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors px-6 -mx-6"
          >
            <div className="flex flex-col md:w-48 mb-4 md:mb-0">
              <span className="text-2xl font-serif-jp font-light tracking-tighter opacity-80 mb-1">
                {item.date.split('.')[1]}.{item.date.split('.')[2]}
              </span>
              <span className="text-[10px] font-mono opacity-30">
                {item.date.split('.')[0]}
              </span>
            </div>
            
            <div className="flex-grow flex items-center space-x-8">
              <span className="text-[9px] px-3 py-1 bg-black text-white tracking-widest font-bold self-start md:self-center">
                {item.category}
              </span>
              <h3 className="text-lg md:text-2xl font-light tracking-wider leading-relaxed group-hover:pl-4 transition-all duration-500 font-serif-jp">
                {item.title}
              </h3>
            </div>
            
            <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
              <ChevronRight size={24} strokeWidth={1} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
