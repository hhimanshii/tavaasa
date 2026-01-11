import Link from 'next/link';

const ITEMS = [
  {
    title: "Wood-Fired Pizza",
    desc: "Authentic Neapolitan texturess with locally sourced toppings. A slice of heaven.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop",
    price: "From ₹350"
  },
  {
    title: "Artisanal Bakes",
    desc: "Freshly baked croissants, sourdough, and pastries made every morning.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop",
    price: "Daily Specials"
  },
  {
    title: "Specialty Coffee",
    desc: "Hand-picked beans roasted to perfection. The perfect companion for your day.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop",
    price: "From ₹150"
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-tavaasa-brown font-display font-bold text-4xl md:text-5xl mb-4">Menu Highlights</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Curated flavors for the discerning palate. Taste the difference of wood-fired cooking and fresh ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ITEMS.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-tavaasa-cream">
              {/* Image Container */}
              <div className="h-64 w-full overflow-hidden relative">
                <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                 {/* Floating Price Tag */}
                 <div className="absolute -top-5 right-6 bg-tavaasa-yellow text-tavaasa-brown font-bold text-sm py-2 px-4 rounded-full shadow-md">
                     {item.price}
                 </div>

                <h3 className="font-display font-bold text-2xl text-tavaasa-brown mb-3 group-hover:text-tavaasa-yellow transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {item.desc}
                </p>
                <Link 
                    href="#contact" 
                    className="inline-block text-tavaasa-brown font-medium border-b-2 border-tavaasa-yellow hover:text-tavaasa-yellow transition-colors pb-1"
                >
                    Order Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <Link 
                href="#"
                className="inline-flex items-center px-8 py-3 border border-tavaasa-brown text-tavaasa-brown rounded-full hover:bg-tavaasa-brown hover:text-white transition-all font-medium"
            >
                View Full Menu
            </Link>
        </div>
      </div>
    </section>
  );
}
