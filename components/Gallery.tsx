import Link from 'next/link';
import { Instagram } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-tavaasa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-tavaasa-brown font-display font-bold text-4xl md:text-5xl mb-2">Moments @ Tavaasa</h2>
            <p className="text-gray-500 text-lg font-light">Follow the herd on Instagram.</p>
          </div>
          <Link 
            href="https://www.instagram.com/tavaasacafe/" 
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-white text-tavaasa-brown rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-tavaasa-yellow transition-all"
          >
            <Instagram size={20} className="text-tavaasa-yellow" />
            <span className="font-medium">@tavaasacafe</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square">
               <div 
                 className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                 style={{ backgroundImage: `url('${src}')` }}
               ></div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <Instagram className="text-white drop-shadow-md" size={32} />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
