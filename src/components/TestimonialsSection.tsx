
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Anna Kovács",
    position: "Regular Client",
    quote: "The team at Hugi szépségfarm always welcomes me with warmth and care. Every visit feels like coming home!",
    rating: 5
  },
  {
    name: "Péter Nagy",
    position: "First-time Client",
    quote: "A genuinely inviting atmosphere, amazing staff, and beautiful results. Highly recommend this cozy salon.",
    rating: 5
  },
  {
    name: "Viktória Szabó",
    position: "Monthly Client",
    quote: "There’s always a smile and good vibes here. The warm colors and friendly team make every appointment a joy.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-salon-bronze fill-salon-bronze' : 'text-salon-sage'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-salon-sage/15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">Client Testimonials</h2>
          <div className="w-20 h-1 bg-salon-blush mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown max-w-xl mx-auto font-medium">Hear how our caring energy shines for every client—a fresh new feeling!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-salon-light/90 border-none shadow-xl hover:shadow-2xl transition-shadow rounded-xl">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="mb-4">
                  <p className="text-salon-brown italic font-medium">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-salon-bronze/15 flex items-center justify-center text-salon-bronze font-bold font-playfair">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-salon-dark">{testimonial.name}</h4>
                    <p className="text-sm text-salon-gray">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-salon-blush hover:text-salon-bronze font-semibold transition-colors"
          >
            Read More Reviews
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
