
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
  const renderStars = (rating: number) => (
    Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-salon-powderPink fill-salon-powderPink' : 'text-salon-powderGrey'}`}
      />
    ))
  );

  return (
    <section id="testimonials" className="py-20 bg-salon-rose/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">Testimonials</h2>
          <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium">Our guests always leave with a smile.</p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-white border-none shadow-lg rounded-xl hover:shadow-2xl transition duration-200">
              <CardContent className="p-6">
                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                <blockquote className="mb-3">
                  <p className="text-salon-brown italic font-medium">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-salon-powderPink/40 flex items-center justify-center font-bold font-playfair text-salon-powderPink">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-salon-dark">{testimonial.name}</h4>
                    <span className="text-xs text-salon-brown">{testimonial.position}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block text-salon-powderPink font-bold hover:underline text-lg transition"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
