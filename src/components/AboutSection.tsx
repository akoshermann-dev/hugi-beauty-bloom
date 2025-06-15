
import React from 'react';
import { Scissors, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-6 h-6 text-salon-orange" />,
    title: "Expert Stylists",
    description: "Our warm, professional team creates the perfect look in a cozy, inviting space."
  },
  {
    icon: <Award className="w-6 h-6 text-salon-gold" />,
    title: "Premium Products",
    description: "Only the finest, nourishing products for stunning, healthy hair each visit."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-salon-peach" />,
    title: "Client-Centric Care",
    description: "We make sure every visit leaves you glowing – inside and out!"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-salon-peach/60 relative overflow-hidden">
      <div className="absolute right-0 top-[-4rem] w-96 h-32 bg-salon-gold opacity-15 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">About Us</h2>
          <div className="w-20 h-1 bg-salon-orange mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown font-medium max-w-xl mx-auto">Your journey to warmth, care, and beauty begins here at Hugi szépségfarm.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 right-3 bottom-3 border-2 border-salon-orange rounded-lg"></div>
              <div className="bg-salon-light p-4 rounded-lg relative">
                <div className="aspect-video bg-salon-peach rounded-lg overflow-hidden border-2 border-salon-gold">
                  <img 
                    src="/placeholder.svg"
                    alt="Salon interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-salon-dark">Our Story</h3>
            <p className="text-salon-brown mb-6">
              Founded in 2010, Hugi szépségfarm has been a warm, welcoming beauty retreat for over a decade.
            </p>
            <p className="text-salon-brown mb-8">
              We focus on artistry and genuine hospitality—caring for you like family and celebrating your beauty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-4 bg-salon-light border border-salon-peach/60 rounded-lg hover:shadow-md hover:bg-salon-peach/80 transition-shadow">
                  <div className="bg-salon-peach/60 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-salon-dark">{feature.title}</h4>
                  <p className="text-sm text-salon-brown">{feature.description}</p>
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
