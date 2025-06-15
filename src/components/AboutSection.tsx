
import React from 'react';
import { Scissors, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="w-6 h-6 text-salon-gold" />,
    title: "Expert Stylists",
    description: "Our team of professional stylists are passionate about creating the perfect look for you."
  },
  {
    icon: <Award className="w-6 h-6 text-salon-gold" />,
    title: "Premium Products",
    description: "We use only the finest products to ensure the best results and care for your hair."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-salon-gold" />,
    title: "Satisfaction Guaranteed",
    description: "Your happiness is our priority. We're not satisfied until you're delighted with your experience."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-salon-dark">About Us</h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto mb-6"></div>
          <p className="text-salon-gray max-w-xl mx-auto">Discover the story behind Hugi szépségfarm and our commitment to beauty and excellence.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 right-3 bottom-3 border-2 border-salon-gold rounded-lg"></div>
              <div className="bg-salon-light p-4 rounded-lg relative">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
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
            <h3 className="text-2xl font-bold mb-4 text-salon-dark">Our Story</h3>
            <p className="text-salon-gray mb-6">
              Founded in 2010, Hugi szépségfarm has been providing exceptional beauty services to our clients for over a decade. 
              Our passion for beauty and dedication to excellence has made us one of the most trusted salons in the area.
            </p>
            <p className="text-salon-gray mb-8">
              We believe that beauty is personal, which is why we take the time to understand your unique needs and preferences. 
              Our goal is to help you look and feel your best, every time you visit us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="bg-salon-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-salon-dark">{feature.title}</h4>
                  <p className="text-sm text-salon-gray">{feature.description}</p>
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
