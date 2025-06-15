
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow backdrop-blur border-b border-salon-powderGrey/50 py-2'
          : 'bg-salon-rose py-4'
      }`}
    >
      <div className="container flex flex-col md:flex-row items-center md:justify-between gap-3">
        <a href="#" className="mx-auto md:mx-0 text-salon-bronze font-playfair text-2xl tracking-wide font-bold">
          Hugi szépségfarm
        </a>
        <nav className="flex gap-3 md:gap-6 justify-center mb-1 md:mb-0 text-salon-dark">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-1 rounded-full font-medium hover:bg-salon-powderPink/60 transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="bg-salon-powderPink hover:bg-salon-blush text-salon-dark font-bold px-6 py-2 md:py-3 rounded-full shadow transition border border-salon-powderGrey">
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
