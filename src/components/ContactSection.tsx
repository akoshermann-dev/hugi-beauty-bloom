
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you shortly!",
    });
    // Reset form fields
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-salon-sage/10 to-salon-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">Contact Us</h2>
          <div className="w-20 h-1 bg-salon-bronze mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown max-w-xl mx-auto font-medium">Questions or just want to say hi? We can't wait to meet you!</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-salon-sage/40 p-8 rounded-lg shadow-xl border border-salon-sage">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-salon-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-salon-orange/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-salon-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-dark">Phone</h4>
                    <a href="tel:+36301234567" className="text-salon-brown hover:text-salon-orange transition-colors">
                      +36 30 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-salon-orange/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-salon-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-dark">Email</h4>
                    <a href="mailto:info@hugiszepsegfarm.com" className="text-salon-brown hover:text-salon-orange transition-colors">
                      info@hugiszepsegfarm.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-salon-orange/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-salon-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-dark">Address</h4>
                    <address className="not-italic text-salon-brown">
                      1234 Budapest, Szépség utca 10.
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-salon-orange/20 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-salon-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-dark">Opening Hours</h4>
                    <ul className="text-salon-brown">
                      <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                      <li>Saturday: 9:00 AM - 5:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-salon-light p-4 rounded-lg shadow-md border border-salon-sage/50">
              <div className="aspect-video w-full rounded bg-salon-sage/20">
                {/* Replace with actual Google Maps embed */}
                <div className="h-full w-full flex items-center justify-center text-salon-brown font-semibold">
                  Map would be displayed here
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-salon-rose/70 p-8 rounded-lg shadow-xl border border-salon-sage/70">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-salon-dark">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required className="bg-salon-light focus:bg-salon-peach/40" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required className="bg-salon-light focus:bg-salon-peach/40"/>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Subject" required className="bg-salon-light focus:bg-salon-peach/40"/>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-32 bg-salon-light focus:bg-salon-peach/40" required />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-salon-orange hover:bg-salon-gold text-white font-bold rounded-full px-6 py-3 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
