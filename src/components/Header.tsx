
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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-salon-dark font-semibold text-2xl">Hugi szépségfarm</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-salon-gray hover:text-salon-dark transition-colors">About</a>
          <a href="#services" className="text-salon-gray hover:text-salon-dark transition-colors">Services</a>
          <a href="#gallery" className="text-salon-gray hover:text-salon-dark transition-colors">Gallery</a>
          <a href="#testimonials" className="text-salon-gray hover:text-salon-dark transition-colors">Testimonials</a>
          <a href="#contact" className="text-salon-gray hover:text-salon-dark transition-colors">Contact</a>
        </nav>
        <Button className="bg-salon-gold hover:bg-yellow-300 text-white">Book Now</Button>
      </div>
    </header>
  );
};

export default Header;
