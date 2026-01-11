'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-tavaasa-cream/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
               {/* Placeholder for Llama Icon - simple circle for now, user can replace with SVG */}
               <div className="w-8 h-8 rounded-full bg-tavaasa-yellow flex items-center justify-center text-tavaasa-brown font-bold text-xs">🦙</div>
               <span className="font-display font-bold text-2xl tracking-wide text-tavaasa-brown">
                Tavaasa
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#story">Our Story</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <Link
              href="#contact"
              className="bg-tavaasa-yellow text-tavaasa-brown px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-tavaasa-brown hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tavaasa-cream/95 backdrop-blur-xl absolute w-full border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#menu" onClick={() => setIsOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink href="#story" onClick={() => setIsOpen(false)}>Our Story</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-tavaasa-yellow text-tavaasa-brown px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors w-full text-center"
            >
              Visit Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-tavaasa-brown/80 hover:text-tavaasa-brown font-medium hover:underline decoration-tavaasa-yellow decoration-2 underline-offset-4 transition-all"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-4 text-lg font-medium text-tavaasa-brown hover:text-tavaasa-yellow w-full text-center hover:bg-white/50 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
