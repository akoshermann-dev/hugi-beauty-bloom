
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-salon-light to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-salon-dark leading-tight">
              Beauty & Style<br />
              <span className="text-salon-purple">Redefined</span>
            </h1>
            <p className="text-lg text-salon-gray mb-8 max-w-md">
              Experience premium hair and beauty services in a relaxing atmosphere at Hugi szépségfarm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-salon-purple hover:bg-purple-400 text-white px-8 py-6" size="lg">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-salon-purple text-salon-dark hover:bg-salon-light px-8 py-6" size="lg">
                View Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-salon-pink rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-salon-purple rounded-full opacity-30 blur-2xl"></div>
              <div className="bg-white p-4 rounded-2xl shadow-lg relative">
                <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden">
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
