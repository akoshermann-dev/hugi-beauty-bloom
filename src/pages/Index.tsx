
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NumbersSection from '@/components/NumbersSection';

const Index = () => {
  // Start with a reasonable number of bookings (demo: 197)
  const [bookingsCount, setBookingsCount] = useState(197);

  // Handler to increment bookings count
  const handleNewBooking = () => setBookingsCount((prev) => prev + 1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <NumbersSection bookingsCount={bookingsCount} />
        <BookingSection onBooking={handleNewBooking} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
