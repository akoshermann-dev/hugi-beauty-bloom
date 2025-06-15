
import React from 'react';

const AboutSection = () => {
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
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-salon-dark mb-3">Meet Our Team</h2>
            <div className="w-16 h-1 bg-salon-powderPink rounded mb-5"></div>
            <p className="text-salon-brown text-base md:text-lg mb-5 leading-relaxed max-w-2xl">
              Welcome to our cozy, modern salon, where our friendly team of stylists is passionate about making you look and feel your best.
              We take pride in blending timeless technique with today’s top trends to give you a style that’s uniquely yours, in an environment that’s as warm as it is chic.
            </p>
            <ul className="pl-4 space-y-2 text-salon-brown text-base">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                Personalized service for every guest, every visit
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                Tranquil space with soft color palettes and gentle lighting
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-salon-powderPink/60" />
                Using gentle, nourishing hair products only
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
