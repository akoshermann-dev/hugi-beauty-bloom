
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const services = [
  "Women's Haircut",
  "Men's Haircut",
  "Hair Coloring",
  "Highlights",
  "Balayage",
  "Blow Dry & Styling",
  "Hair Treatment"
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const BookingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !service || !date || !time) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Request Sent!",
      description: `We've received your request for ${service} on ${format(date, "PPP")} at ${time}. We'll contact you soon.`,
    });

    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setDate(undefined);
    setTime("");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-salon-blush/20 via-salon-sage/10 to-salon-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">Book an Appointment</h2>
          <div className="w-16 h-1 bg-salon-sage mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium">Reserve your self-care in just a few seconds.</p>
        </div>
        <Card className="max-w-2xl mx-auto bg-white shadow-2xl p-8 border border-salon-bronze/20 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-salon-light focus:bg-salon-blush/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-salon-light focus:bg-salon-blush/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="bg-salon-light focus:bg-salon-blush/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select onValueChange={setService} value={service}>
                  <SelectTrigger id="service" className="bg-salon-light focus:bg-salon-blush/30">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {services.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-salon-light hover:bg-salon-blush/30"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-salon-sage" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(d) => d < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Select onValueChange={setTime} value={time}>
                  <SelectTrigger className="bg-salon-light focus:bg-salon-blush/30">
                    <SelectValue placeholder="Select a time">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-salon-sage" />
                        {time || "Select a time"}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-salon-bronze hover:bg-salon-sage text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
            >
              Request Appointment
            </Button>
            <p className="text-xs text-salon-brown text-center mt-3 font-medium">
              By booking, you agree to our cancellation policy.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
