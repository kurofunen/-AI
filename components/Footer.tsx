
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16 px-12 border-t border-black/[0.05]">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-12 mb-32">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-serif-jp font-bold tracking-[0.3em] mb-8">KENSHI YONEZU</h2>
            <div className="space-y-6">
                <p className="text-[10px] tracking-widest leading-loose opacity-40 uppercase font-bold">
                    Official Website & Online Shop<br />
                    Managed by REISSUE RECORDS inc.
                </p>
                <div className="flex space-x-4">
                   <div className="w-10 h-[1px] bg-black opacity-10"></div>
                </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col space-y-12">
            <div>
                <h3 className="text-[10px] tracking-[0.4em] font-bold uppercase mb-6 opacity-80">Socials</h3>
                <div className="flex flex-col space-y-4 text-[11px] tracking-[0.2em] font-light opacity-50">
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">X (TWITTER)</a>
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">INSTAGRAM</a>
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">YOUTUBE</a>
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">TIKTOK</a>
                </div>
            </div>
          </div>

          <div className="flex flex-col space-y-12">
            <div>
                <h3 className="text-[10px] tracking-[0.4em] font-bold uppercase mb-6 opacity-80">Information</h3>
                <div className="flex flex-col space-y-4 text-[11px] tracking-[0.2em] font-light opacity-50">
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">CONTACT</a>
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">PRIVACY POLICY</a>
                    <a href="#" className="hover:opacity-100 hover:text-black transition-opacity">ONLINE SHOP</a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-12">
          <div className="mb-8 md:mb-0">
            <p className="text-[9px] tracking-[0.3em] font-light opacity-30 text-center md:text-left">
              © REISSUE RECORDS INC. ALL RIGHTS RESERVED.<br className="md:hidden" />
              NO REPRODUCTION OR REPUBLICATION WITHOUT PERMISSION.
            </p>
          </div>
          
          <div className="flex items-center space-x-12 opacity-30 text-[9px] tracking-widest uppercase">
            <span>Scroll To Top</span>
            <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500"
            >
                ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
