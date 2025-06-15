
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-salon-sage via-salon-light to-salon-rose relative overflow-hidden">
      <div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-[40rem] h-[18rem] rounded-full bg-salon-bronze opacity-15 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-salon-dark leading-tight drop-shadow-lg">
              Welcome to <span className="text-salon-bronze">Hugi szépségfarm</span>
            </h1>
            <p className="text-lg text-salon-brown mb-8 max-w-md font-medium">
              A warm, modern oasis for beautiful hair and thoughtful service.<br />
              Embrace your best self in comfort and style!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-salon-bronze hover:bg-salon-sage text-white font-bold px-8 py-6 shadow-xl rounded-full" size="lg">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-salon-bronze text-salon-brown hover:bg-salon-blush font-bold px-8 py-6 rounded-full" size="lg">
                View Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -left-10 -top-6 w-56 h-56 bg-salon-sage rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -right-4 -bottom-8 w-64 h-64 bg-salon-bronze rounded-full opacity-20 blur-2xl"></div>
              <div className="bg-salon-light p-4 rounded-2xl shadow-lg relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border-4 border-salon-bronze bg-salon-rose">
                  <img 
                    src="/placeholder.svg"
                    alt="Hairstylist working"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
