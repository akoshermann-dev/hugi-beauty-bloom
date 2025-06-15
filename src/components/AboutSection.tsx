
import React from 'react';
import { Star, Heart, CircleCheck } from "lucide-react";

const features = [
  {
    icon: <Star className="w-6 h-6 text-salon-powderPink" />,
    title: "Passionate Stylists",
    description: "Talented, caring professionals focused on your best style and comfort.",
  },
  {
    icon: <Heart className="w-6 h-6 text-salon-powderGrey" />,
    title: "Warm Atmosphere",
    description: "Soothing colors, gentle lights – a true urban retreat.",
  },
  {
    icon: <CircleCheck className="w-6 h-6 text-salon-blush" />,
    title: "Top Quality",
    description: "We use premium, nourishing products for healthy, beautiful hair.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-salon-rose">
      <div className="container mx-auto px-4">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="bg-salon-powderPink/40 border-2 border-salon-powderGrey rounded-2xl p-2 shadow aspect-video w-96 max-w-full">
              <img
                src="/placeholder.svg"
                alt="Salon interior"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-playfair font-bold text-salon-dark mb-4">About Us</h3>
            <p className="mb-6 text-salon-brown font-medium text-lg">
              Since 2010, our mission is to make every guest feel like family. Bespoke hair, modern comfort, and genuine kindness await you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-salon-powderGrey/20 rounded-lg shadow hover:shadow-md transition animate-pop-in"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'backwards' }}>
                  <div className="mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-md text-salon-dark mb-1">{feature.title}</h4>
                  <p className="text-salon-brown text-center text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
