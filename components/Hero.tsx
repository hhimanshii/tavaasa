'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             {/* Using a placeholder image for now - in production this should be a high-quality cafe shot */}
             {/* We'll use a solid color gradient fallback until image loads */}
            <div className="absolute inset-0 bg-tavaasa-brown/20 z-10"></div>
             {/* Placeholder for actual hero image - user can replace src */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat grayscale-[20%] sepia-[10%]"></div>
        </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-16">
        <span className="inline-block py-1 px-3 border border-white/40 rounded-full text-white/90 text-sm font-medium tracking-wide mb-6 bg-black/20 backdrop-blur-sm animate-fade-in-up">
            📍 Dehradun, Uttarakhand
        </span>
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
          Freshly Brewed <br/> 
          <span className="text-tavaasa-yellow text-stroke-sm">Wood-Fired</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Laughter, conversations, and the aroma of artisanal bakes. <br/> Come for the coffee, stay for the vibe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#menu"
            className="px-8 py-4 bg-tavaasa-yellow text-tavaasa-brown font-bold text-lg rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all shadow-lg border-2 border-transparent"
          >
            View Menu
          </Link>
          <Link
            href="#story"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transform hover:scale-105 transition-all backdrop-blur-sm shadow-lg"
          >
           Our Story
          </Link>
        </div>
      </div>

       {/* Scroll Indicator */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-80 hover:opacity-100 hidden md:block">
           <Link href="#menu" aria-label="Scroll down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
           </Link>
       </div>
    </section>
  );
}
