
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Scissors, Star, Heart } from 'lucide-react';

const services = {
  haircuts: [
    { name: "Women's Haircut", price: "8000 Ft", description: "Cut, wash, and style" },
    { name: "Men's Haircut", price: "5000 Ft", description: "Cut, wash, and style" },
    { name: "Children's Haircut", price: "4000 Ft", description: "For kids" },
    { name: "Fringe Trim", price: "2000 Ft", description: "Quick fringe refresh" },
  ],
  coloring: [
    { name: "Root Touch-up", price: "12000 Ft", description: "Regrowth color" },
    { name: "Full Color", price: "18000 Ft", description: "Full-head color" },
    { name: "Highlights", price: "22000 Ft", description: "Partial or full" },
    { name: "Balayage", price: "28000 Ft", description: "Hand-painted effect" },
  ],
  styling: [
    { name: "Blow Dry", price: "7000 Ft", description: "Wash & style" },
    { name: "Special Occasion", price: "15000 Ft", description: "Formal styling" },
    { name: "Treatment", price: "8000 Ft", description: "Deep conditioning" },
    { name: "Extensions", price: "50000 Ft", description: "Full extensions" },
  ]
};

const icons = {
  haircuts: <Scissors className="w-5 h-5 text-salon-powderPink" />,
  coloring: <Star className="w-5 h-5 text-salon-powderGrey" />,
  styling: <Heart className="w-5 h-5 text-salon-blush" />,
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("haircuts");
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-salon-rose/70 via-white to-salon-rose/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">Our Services</h2>
          <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-5 rounded"></div>
          <p className="text-salon-brown font-medium">A menu of care and transformation for everyone.</p>
        </div>
        <Tabs defaultValue="haircuts" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center gap-3 mb-8">
            <TabsList className="bg-white rounded-full shadow px-2 border border-salon-powderGrey/40">
              {Object.keys(services).map(tab => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-salon-powderPink data-[state=active]:text-salon-dark font-semibold rounded-full transition px-5 py-2 font-playfair"
                >
                  {icons[tab]} <span className="ml-2 capitalize">{tab}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {Object.keys(services).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {services[category].map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl border border-salon-powderGrey/20 flex flex-col justify-between transition animate-fade-in-up"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-playfair font-bold text-lg text-salon-dark">{service.name}</h3>
                        <span className="text-salon-powderPink font-semibold">{service.price}</span>
                      </div>
                      <p className="text-salon-brown mb-4 text-sm">{service.description}</p>
                    </div>
                    <Button className="w-full mt-auto bg-salon-powderGrey hover:bg-salon-powderPink text-salon-dark font-bold rounded-full shadow transition">
                      Book Now
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="text-center mt-12">
          <p className="text-salon-brown font-medium mb-4">Have questions? We're here for you.</p>
          <Button className="bg-salon-powderPink hover:bg-salon-blush text-salon-dark px-8 py-3 font-semibold rounded-full shadow-md transition drop-shadow">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
