
import React from 'react';
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 bg-[#f9f7f6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 bg-white rounded-3xl shadow-lg p-8 md:p-14 border border-salon-powderGrey/30 animate-fade-in-up">
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <img
              src="/placeholder.svg"
              alt="About our Hair Salon"
              className="rounded-xl shadow-md border border-salon-powderGrey bg-[#f3ede7] object-cover w-full max-w-xs aspect-[5/6]"
              style={{ minHeight: 280 }}
            />
          </div>
          <div className="w-full md:w-7/12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-dark mb-3">
              {t.about.title}
            </h2>
            <div className="w-16 h-1 bg-salon-powderPink rounded mb-5"></div>
            <p className="text-salon-brown text-base md:text-lg mb-5 leading-relaxed max-w-2xl">
              {t.about.line1}
              <br />
              {t.about.line2}
            </p>
            <ul className="pl-4 space-y-2 text-salon-brown text-base">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                {t.about.item1}
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                {t.about.item2}
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                {t.about.item3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
