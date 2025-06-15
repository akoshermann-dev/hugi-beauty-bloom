
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
import { useLanguage } from "@/i18n/LanguageContext";

type BookingSectionProps = {
  onBooking?: () => void;
};

const BookingSection = ({ onBooking }: BookingSectionProps) => {
  const { t, lang } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const { toast } = useToast();

  // Use translated services and times
  const services = t.booking.servicesList;
  const timeSlots = t.booking.timeSlots;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !service || !date || !time) {
      toast({
        title: t.booking.error,
        description: t.booking.fillFields,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t.booking.requestSent,
      description: t.booking.confirmation({
        service,
        date: format(date, "PPP"),
        time
      }),
    });

    // Increment the bookings counter (if prop provided)
    if (onBooking) onBooking();

    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setDate(undefined);
    setTime("");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-salon-rose/70 via-white to-salon-rose/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">{t.booking.title}</h2>
          <div className="w-16 h-1 bg-salon-powderGrey mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium">{t.booking.subtitle}</p>
        </div>
        <Card className="max-w-2xl mx-auto bg-white shadow-2xl p-8 border border-salon-powderGrey/30 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.booking.name}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.booking.name}
                  className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.booking.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.booking.email}
                  className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.booking.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.booking.phone}
                  className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">{t.booking.service}</Label>
                <Select onValueChange={setService} value={service}>
                  <SelectTrigger id="service" className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/20">
                    <SelectValue placeholder={t.booking.selectService} />
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
                <Label>{t.booking.date}</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-salon-powderGrey/10 hover:bg-salon-powderPink/10"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-salon-powderGrey" />
                      {date ? format(date, "PPP") : t.booking.date}
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
                <Label>{t.booking.time}</Label>
                <Select onValueChange={setTime} value={time}>
                  <SelectTrigger className="bg-salon-powderGrey/10 focus:bg-salon-powderPink/10">
                    <SelectValue placeholder={t.booking.selectTime}>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-salon-powderGrey" />
                        {time || t.booking.selectTime}
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
              className="w-full bg-salon-powderPink hover:bg-salon-powderGrey text-salon-dark font-bold px-6 py-3 rounded-full shadow-lg transition"
            >
              {t.booking.request}
            </Button>
            <p className="text-xs text-salon-brown text-center mt-3 font-medium">
              {t.booking.policy}
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
