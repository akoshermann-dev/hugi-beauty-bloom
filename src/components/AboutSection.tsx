
import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24"
      style={{
        background: 'linear-gradient(120deg, #e7dfda 60%, #f6f2ef 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/95 rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="rounded-xl overflow-hidden max-w-xs w-full aspect-[6/7] shadow bg-[#ebdfd4] border border-[#e6e1da]">
              <img
                src="/placeholder.svg"
                alt="Salon interior"
                className="object-cover w-full h-full"
                style={{ minHeight: 320 }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#5d564d] tracking-wide uppercase mb-4">
              About Us
            </h3>
            <div className="w-20 h-1 bg-[#ccb598] rounded mb-5"></div>
            <p className="mb-7 text-[#8c8276] font-medium text-lg leading-relaxed" style={{maxWidth: 520}}>
              Our professional team brings out the best in you,<br className="hidden sm:inline" /> with personalized styles and a warm, welcoming atmosphere. Experience modern hair artistry where classic elegance meets the latest trends.
            </p>
            <ul className="space-y-3 text-[#5d564d] text-base">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ccb598]" />
                Passionate, highly-trained stylists for every guest
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ccb598]" />
                Inviting decor &amp; relaxing atmosphere
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ccb598]" />
                Only quality, gentle, nourishing products
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

