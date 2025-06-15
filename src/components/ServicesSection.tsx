
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Scissors, Brush, ArrowRight } from 'lucide-react';

const services = {
  haircuts: [
    { name: "Women's Haircut", price: "8000 Ft", description: "Cut, wash, and style" },
    { name: "Men's Haircut", price: "5000 Ft", description: "Cut, wash, and style" },
    { name: "Children's Haircut", price: "4000 Ft", description: "Cut and style for kids" },
    { name: "Fringe Trim", price: "2000 Ft", description: "Quick fringe maintenance" },
  ],
  coloring: [
    { name: "Root Touch-up", price: "12000 Ft", description: "Color applied to regrowth" },
    { name: "Full Color", price: "18000 Ft", description: "Full head color application" },
    { name: "Highlights", price: "22000 Ft", description: "Partial or full highlights" },
    { name: "Balayage", price: "28000 Ft", description: "Hand-painted highlights" },
  ],
  styling: [
    { name: "Blow Dry & Style", price: "7000 Ft", description: "Wash, blow dry and style" },
    { name: "Special Occasion Style", price: "15000 Ft", description: "Formal styling for events" },
    { name: "Hair Treatment", price: "8000 Ft", description: "Deep conditioning treatment" },
    { name: "Hair Extensions", price: "50000 Ft", description: "Full head extensions" },
  ]
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("haircuts");
  
  const icons = {
    haircuts: <Scissors className="w-5 h-5 text-salon-bronze" />,
    coloring: <Brush className="w-5 h-5 text-salon-sage" />,
    styling: <ArrowRight className="w-5 h-5 text-salon-blush" />
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-salon-sage/30 to-salon-light/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">Our Services</h2>
          <div className="w-20 h-1 bg-salon-bronze mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown max-w-xl mx-auto font-medium">Discover our welcoming offerings for comfort and transformation—with a fresh touch.</p>
        </div>
        
        <Tabs defaultValue="haircuts" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-salon-light/90 rounded-full shadow">
              <TabsTrigger 
                value="haircuts"
                className="data-[state=active]:bg-salon-bronze data-[state=active]:text-white font-bold rounded-full px-6 py-3"
              >
                {icons.haircuts} <span className="ml-2">Haircuts</span>
              </TabsTrigger>
              <TabsTrigger 
                value="coloring"
                className="data-[state=active]:bg-salon-sage data-[state=active]:text-salon-dark font-bold rounded-full px-6 py-3"
              >
                {icons.coloring} <span className="ml-2">Coloring</span>
              </TabsTrigger>
              <TabsTrigger 
                value="styling"
                className="data-[state=active]:bg-salon-blush data-[state=active]:text-salon-dark font-bold rounded-full px-6 py-3"
              >
                {icons.styling} <span className="ml-2">Styling</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(services).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services[category].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-salon-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-salon-sage/40"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-playfair font-semibold text-salon-dark">{service.name}</h3>
                      <span className="text-salon-bronze font-bold">{service.price}</span>
                    </div>
                    <p className="text-salon-brown mb-4">{service.description}</p>
                    <Button className="w-full bg-salon-bronze hover:bg-salon-sage text-white font-bold rounded-full transition-colors shadow">
                      Book Now
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-salon-brown mb-6 font-medium">Have questions? We're here for you—reach out anytime!</p>
          <Button className="bg-salon-bronze hover:bg-salon-blush text-white px-6 py-3 font-bold rounded-full shadow-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
