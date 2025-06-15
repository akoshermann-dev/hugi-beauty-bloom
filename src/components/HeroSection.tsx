
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-salon-powderPink via-salon-rose to-white relative min-h-[70vh] flex items-center animate-fade-in">
      <div className="absolute inset-0 pointer-events-none flex">
        <div className="w-1/2 bg-salon-powderPink/20" />
        <div className="w-1/2 bg-salon-powderGrey/20" />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-salon-dark leading-tight mb-6 drop-shadow-sm">
              {t.hero.title} <br />
              <span
                className="relative px-3 py-1 rounded-2xl"
                style={{
                  color: '#e275ad',
                  background: 'rgba(246,214,225,0.70)',
                  boxShadow: '0 0 0 6px rgba(246,214,225,0.15)',
                  textShadow: '0 2px 6px #e275ad22',
                }}
              >
                {t.hero.subtitle}
              </span>
            </h1>
            <p className="text-lg text-salon-brown mb-8 font-medium max-w-md mx-auto md:mx-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-salon-powderPink hover:bg-salon-blush text-salon-dark px-8 py-4 text-lg font-semibold rounded-full shadow-lg border border-salon-powderGrey animate-pop-in">
                {t.bookAppointment}
              </Button>
              <Button
                variant="outline"
                className="border-salon-powderPink text-salon-powderPink hover:bg-salon-powderPink/30 px-8 py-4 text-lg font-semibold rounded-full shadow transition"
              >
                {t.viewServices}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
            <div className="relative bg-salon-rose border-4 border-salon-powderGrey rounded-2xl shadow-lg p-2 overflow-hidden w-64 h-80 flex">
              <img
                src="/placeholder.svg"
                alt="Happy salon guest"
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute -top-6 -right-8 w-40 h-40 bg-salon-powderPink/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
