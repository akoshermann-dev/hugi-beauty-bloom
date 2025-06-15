
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled
        ? "bg-salon-light shadow-md py-2"
        : "bg-gradient-to-b from-salon-peach/80 to-salon-light/90 py-4"
    }`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-salon-gold font-playfair font-bold text-2xl tracking-wide drop-shadow">Hugi szépségfarm</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-salon-brown hover:text-salon-gold font-medium transition-colors">About</a>
          <a href="#services" className="text-salon-brown hover:text-salon-gold font-medium transition-colors">Services</a>
          <a href="#gallery" className="text-salon-brown hover:text-salon-gold font-medium transition-colors">Gallery</a>
          <a href="#testimonials" className="text-salon-brown hover:text-salon-gold font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-salon-brown hover:text-salon-gold font-medium transition-colors">Contact</a>
        </nav>
        <Button className="bg-salon-orange hover:bg-salon-gold text-white shadow-lg font-bold px-6 py-3 rounded-full transition-all animate-fadeIn">Book Now</Button>
      </div>
    </header>
  );
};

export default Header;
