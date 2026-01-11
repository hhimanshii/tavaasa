import Image from 'next/image';

export default function About() {
  return (
    <section id="story" className="py-20 md:py-32 bg-tavaasa-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
               {/* Placeholder for About Image - Interior shot */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tavaasa-yellow/30 max-w-xs transform md:translate-x-10 md:group-hover:translate-x-0 transition-transform duration-500">
                <p className="font-display font-bold text-tavaasa-brown text-xl mb-1">Made with Love 💛</p>
                <p className="text-gray-600 text-sm">Every corner tells a story.</p>
              </div>
            </div>
            
             {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-tavaasa-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-60 h-60 bg-tavaasa-brown/10 rounded-full blur-3xl"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
               <h2 className="text-tavaasa-yellow font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
               <h3 className="font-display font-bold text-4xl md:text-5xl text-tavaasa-brown leading-tight">
                 More Than Just a Café. <br/> It’s a <span className="text-gradient">Vibe.</span>
               </h3>
            </div>
            
            <div className="prose prose-lg text-gray-700 font-light leading-relaxed space-y-6">
              <p>
                Welcome to <strong className="text-tavaasa-brown font-medium">Tavaasa</strong>, where the aroma of freshly brewed coffee meets the warmth of a wood-fired oven. Nestled in the heart of Dehradun, we aren't just a place to eat; we are a destination for those who seek comfort, creativity, and connection.
              </p>
              <p>
                Why the Llama? 🦙 Because like us, they are quirky, friendly, and always up for a good time! Our mascot represents our spirit—fun, approachable, and a little bit different from the rest.
              </p>
              <p>
                Whether you're here for a solo work session, a lively brunch with friends, or a quiet evening with a book, Tavaasa is your home away from home.
              </p>
            </div>

            <div className="pt-4">
               <div className="grid grid-cols-3 gap-6 text-center md:text-left">
                  <div>
                      <h4 className="font-display font-bold text-3xl text-tavaasa-brown">100%</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Wood Fired</p>
                  </div>
                  <div>
                      <h4 className="font-display font-bold text-3xl text-tavaasa-brown">Daily</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Fresh Bakes</p>
                  </div>
                   <div>
                      <h4 className="font-display font-bold text-3xl text-tavaasa-brown">∞</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Good Vibes</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
