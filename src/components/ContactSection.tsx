
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
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-salon-rose/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">Contact</h2>
          <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium">We're here for all your questions, or just to say 'hello'.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white border border-salon-powderGrey/30 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-playfair font-semibold mb-5 text-salon-dark">Contact Info</h3>
              <div className="space-y-5 text-salon-brown">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-salon-powderPink" />
                  <a href="tel:+36301234567" className="hover:underline">+36 30 123 4567</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-salon-powderPink" />
                  <a href="mailto:info@hugiszepsegfarm.com" className="hover:underline">info@hugiszepsegfarm.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-salon-powderPink" />
                  <span>1234 Budapest, Szépség utca 10.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-salon-powderPink" />
                  <span>
                    Mon-Fri: 9:00–19:00<br />Sat: 9:00–17:00<br />Sun: Closed
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-salon-powderGrey/30 p-2 rounded-2xl shadow border border-salon-powderGrey/10">
              <div className="aspect-video w-full rounded bg-salon-rose flex items-center justify-center text-salon-brown font-semibold text-sm">
                Map will appear here
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-salon-powderPink/10">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-salon-dark">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Subject" required className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message" minLength={10} className="min-h-32 bg-salon-powderGrey/10 focus:bg-salon-powderPink/20" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-salon-powderPink hover:bg-salon-powderGrey text-salon-dark font-bold rounded-full px-6 py-3 shadow-lg transition"
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
