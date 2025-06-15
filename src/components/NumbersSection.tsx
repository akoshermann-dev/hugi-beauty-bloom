
import React from 'react';
import { useLanguage } from "@/i18n/LanguageContext";

type NumbersSectionProps = {
  bookingsCount: number;
};

const NumbersSection = ({ bookingsCount }: NumbersSectionProps) => {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-salon-powderGrey/10" id="numbers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2 animate-fade-in-up">
            {t.numbers.title}
          </h2>
          <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium animate-fade-in" style={{whiteSpace: "pre-line"}}>
            {t.numbers.subtitle}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-10 flex items-center justify-center gap-2 animate-pop-in border border-salon-powderGrey/30 max-w-xs w-full">
            <span className="text-5xl font-extrabold font-playfair text-salon-powderPink transition-all duration-300">
              {bookingsCount}
            </span>
            <span className="text-xl text-salon-dark font-medium ml-2">
              {t.numbers.bookings}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
