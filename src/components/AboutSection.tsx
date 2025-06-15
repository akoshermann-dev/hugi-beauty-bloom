
import React from 'react';
import { Scissors, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-6 h-6 text-salon-bronze" />,
    title: "Expert Stylists",
    description: "Our friendly, professional team creates the perfect look in a calming, modern space."
  },
  {
    icon: <Award className="w-6 h-6 text-salon-sage" />,
    title: "Nourishing Products",
    description: "Only the finest gentle, premium products for vibrant, healthy hair every visit."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-salon-blush" />,
    title: "Caring Vibes",
    description: "We ensure everyone leaves smiling—your comfort, joy, and style are our priority!"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-salon-sage/25 relative overflow-hidden">
      <div className="absolute right-0 top-[-4rem] w-96 h-32 bg-salon-bronze opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">About Us</h2>
          <div className="w-20 h-1 bg-salon-blush mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown font-medium max-w-xl mx-auto">
            Your journey to comfort, beauty, and kindness begins at our new look Hugi szépségfarm.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
              <div className="absolute -left-3 -top-3 right-3 bottom-3 border-2 border-salon-blush rounded-lg"></div>
              <div className="bg-salon-rose p-4 rounded-lg relative shadow-md">
                <div className="aspect-video bg-salon-light rounded-lg overflow-hidden border-2 border-salon-bronze">
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
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-salon-dark animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>Our Story</h3>
            <p className="text-salon-brown mb-6 animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'backwards' }}>
              Founded in 2010, our salon brings new warmth and style—offering a welcoming retreat from the busy world.
            </p>
            <p className="text-salon-brown mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
              We focus on creativity and kindness—caring for each guest like family and celebrating your beauty in our fresh, relaxing space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-salon-light border border-salon-sage/60 rounded-lg hover:shadow-md hover:bg-salon-rose/60 transition-shadow animate-pop-in"
                  style={{ animationDelay: `${0.35 + index * 0.12}s`, animationFillMode: 'backwards' }}
                >
                  <div className="bg-salon-sage/40 w-12 h-12 rounded-full flex items-center justify-center mb-4">
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
