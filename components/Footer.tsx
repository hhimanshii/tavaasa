import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-tavaasa-brown text-white/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-b border-white/10 pb-12">
          
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-tavaasa-yellow flex items-center justify-center text-tavaasa-brown font-bold text-lg">🦙</div>
               <span className="font-display font-bold text-3xl tracking-wide text-white">
                Tavaasa
              </span>
             </div>
             <p className="text-white/60 font-light leading-relaxed max-w-xs">
                Your new favourite café in town. Freshly brewed, wood-fired & lama-approved.
             </p>
             <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tavaasa-yellow hover:text-tavaasa-brown transition-all">
                    <Instagram size={20} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tavaasa-yellow hover:text-tavaasa-brown transition-all">
                    <Facebook size={20} />
                </Link>
             </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-tavaasa-yellow">Visit Us</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin className="text-tavaasa-yellow shrink-0 mt-1" size={20} />
                    <p className="text-white/80 font-light">
                        01 Raj Vihar, Opposite FRI,<br/>
                        Chakrata Road, Dehradun,<br/>
                        Uttarakhand 248001
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-tavaasa-yellow shrink-0" size={20} />
                    <p className="text-white/80 font-light">+91 99999 99999</p>
                </div>
            </div>
          </div>

           {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-tavaasa-yellow">Opening Hours</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <Clock className="text-tavaasa-yellow shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                        <p className="text-white/80 font-light">Mon - Sun</p>
                        <p className="text-white font-medium">9:00 AM - 10:30 PM</p>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                  <Link 
                    href="https://goo.gl/maps/placeholder" 
                    target="_blank"
                    className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-tavaasa-brown transition-all"
                  >
                    Get Directions
                  </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
            <p className="text-white/40 text-sm font-light">
                &copy; {new Date().getFullYear()} Tavaasa Cafe. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
