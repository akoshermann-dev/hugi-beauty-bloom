
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-salon-blush via-salon-sage/30 to-salon-light relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-1/2 bg-salon-bronze/10" />
        <div className="w-1/2 bg-salon-rose/10" />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-salon-dark leading-tight mb-5">
              Effortless style. <br /> Warm <span className="text-salon-bronze">welcome.</span>
            </h1>
            <p className="text-lg text-salon-brown mb-8 font-medium">
              A cozy, modern beauty salon in Budapest for vibrant hair moments &amp; personal care, where you always feel at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-salon-bronze hover:bg-salon-rose text-white px-8 py-4 text-lg font-semibold rounded-full shadow transition-colors duration-150">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-salon-bronze text-salon-bronze hover:bg-salon-blush/40 px-8 py-4 text-lg font-semibold rounded-full transition">
                View Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
            <div className="relative bg-salon-light border-4 border-salon-sage rounded-2xl shadow-lg p-2 overflow-hidden w-64 h-80 flex">
              <img
                src="/placeholder.svg"
                alt="Happy salon guest"
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute -top-6 -right-8 w-40 h-40 bg-salon-bronze/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
