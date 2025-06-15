
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/i18n/LanguageContext';

const NAV_ITEMS = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#contact", key: "contact" },
];

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        typeof window !== "undefined" && window.scrollY > 30
          ? 'bg-white/90 shadow-xl backdrop-blur border-b border-salon-powderGrey/40 py-2'
          : 'bg-salon-rose/70 py-4'
      }`}
    >
      <div className="container flex flex-col md:flex-row items-center md:justify-between gap-3">
        <a
          href="#"
          className="mx-auto md:mx-0 text-salon-bronze font-playfair text-[2rem] tracking-wide font-bold drop-shadow-md transition"
          style={{ letterSpacing: '1.5px' }}
        >
          {t.salonName}
        </a>
        <nav className="flex gap-3 md:gap-6 justify-center mb-1 md:mb-0 text-salon-dark">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1 rounded-full font-medium hover:bg-salon-powderPink/50 transition-colors duration-150 font-playfair"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          {/* Language Selector */}
          <select
            value={lang}
            onChange={e => setLang(e.target.value as "en" | "hu")}
            className="rounded-full border px-3 py-1 text-salon-dark font-medium bg-white/90 hover:bg-salon-powderPink/20 focus:outline-none focus:ring-2 focus:ring-salon-powderPink transition"
            aria-label={t.language}
            style={{
              fontFamily: "inherit",
            }}
          >
            <option value="hu">{t.hungarian}</option>
            <option value="en">{t.english}</option>
          </select>
          <Button className="bg-salon-powderPink hover:bg-salon-blush text-salon-dark font-bold px-6 py-2 md:py-3 rounded-full shadow-lg border border-salon-powderGrey">
            {t.bookNow}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
