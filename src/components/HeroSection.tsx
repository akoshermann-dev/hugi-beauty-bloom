
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-salon-peach to-salon-light relative overflow-hidden">
      <div className="absolute top-[-6rem] left-1/2 -translate-x-1/2 w-[40rem] h-[18rem] rounded-full bg-salon-orange opacity-20 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-salon-dark leading-tight drop-shadow-lg">
              Welcome to <span className="text-salon-gold">Hugi szépségfarm</span>
            </h1>
            <p className="text-lg text-salon-brown mb-8 max-w-md font-medium">
              A warm, relaxing oasis for premium hair and beauty services.<br />
              Feel your best in our inviting, friendly salon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-salon-orange hover:bg-salon-gold text-white font-bold px-8 py-6 shadow-xl rounded-full" size="lg">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-salon-gold text-salon-brown hover:bg-salon-peach font-bold px-8 py-6 rounded-full" size="lg">
                View Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -left-10 -top-6 w-56 h-56 bg-salon-peach rounded-full opacity-40 blur-2xl"></div>
              <div className="absolute -right-4 -bottom-8 w-64 h-64 bg-salon-gold rounded-full opacity-25 blur-2xl"></div>
              <div className="bg-salon-peach/90 p-4 rounded-2xl shadow-lg relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border-4 border-salon-gold bg-salon-light">
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
