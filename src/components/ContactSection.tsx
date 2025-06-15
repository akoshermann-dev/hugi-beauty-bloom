
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const openMessenger = () => {
    window.open("https://m.me/hugiszepsegfarm", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 bg-salon-rose/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-6 rounded"></div>
          <p className="text-salon-brown font-medium">{t.contact.subtitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white border border-salon-powderGrey/20 p-8 rounded-2xl shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-playfair font-semibold mb-5 text-salon-dark">{t.contact.contactInfo}</h3>
              <div className="space-y-5 text-salon-brown">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-salon-powderPink" />
                  <a href="tel:+36301234567" className="hover:underline">{t.contact.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-salon-powderPink" />
                  <a href="mailto:info@hugiszepsegfarm.com" className="hover:underline">{t.contact.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-salon-powderPink" />
                  <span>{t.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-salon-powderPink" />
                  <span style={{whiteSpace: "pre-line"}}>
                    {t.contact.open}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-salon-powderGrey/30 p-2 rounded-2xl shadow border border-salon-powderGrey/10">
              <div className="aspect-video w-full rounded bg-salon-rose flex items-center justify-center text-salon-brown font-semibold text-sm">
                {t.contact.map}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-salon-powderPink/10 flex flex-col items-center animate-fade-in-up">
              <h3 className="text-xl font-playfair font-semibold mb-6 text-salon-dark">{t.contact.messengerTitle}</h3>
              <Button
                onClick={openMessenger}
                className="w-full bg-salon-powderPink hover:bg-salon-powderGrey text-salon-dark font-bold rounded-full px-6 py-3 shadow-lg transition flex items-center justify-center gap-2 text-base"
              >
                <Facebook className="w-5 h-5" />
                {t.contact.messengerBtn}
              </Button>
              <p className="mt-6 text-salon-brown text-center text-sm" style={{whiteSpace: "pre-line"}}>
                {t.contact.messengerHelp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
