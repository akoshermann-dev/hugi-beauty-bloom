
import React from 'react';
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-salon-powderGrey/70 text-salon-dark py-10 mt-10 border-t border-salon-powderGrey/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-semibold font-playfair mb-2 text-salon-powderPink">{t.salonName}</h4>
            <p className="text-salon-brown">
              {t.footer.copyright(currentYear)}
            </p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
            <a href="/" className="text-salon-dark hover:text-salon-powderPink transition-colors font-playfair">{t.footer.home}</a>
            <a href="#about" className="text-salon-dark hover:text-salon-powderPink transition-colors font-playfair">{t.footer.about}</a>
            <a href="#services" className="text-salon-dark hover:text-salon-powderPink transition-colors font-playfair">{t.footer.services}</a>
            <a href="#gallery" className="text-salon-dark hover:text-salon-powderPink transition-colors font-playfair">{t.footer.gallery}</a>
            <a href="#contact" className="text-salon-dark hover:text-salon-powderPink transition-colors font-playfair">{t.footer.contact}</a>
          </div>
          <div className="flex-1 text-center md:text-right">
            <span className="block text-salon-brown">{t.footer.follow}</span>
            <div className="flex gap-4 mt-1 justify-center md:justify-end">
              <a href="#" aria-label="Facebook" className="hover:text-salon-powderPink transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7C18.3 21.1 22 17 22 12z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-salon-powderPink transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.3 2c2.4 0 2.8.01 3.8.06 1.1.05 1.8.22 2.4.46a4.9 4.9 0 011.8 1.15c.49.48.87 1.09 1.15 1.77.24.63.41 1.36.46 2.43.05 1.07.06 1.41.06 4.13v.08c0 2.64-.01 2.99-.06 4.04-.05 1.06-.22 1.8-.46 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.63.24-1.36.41-2.43.46-1.07.05-1.42.06-4.13.06h-.08c-2.65 0-2.99-.01-4.04-.06-1.06-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.24-.63-.41-1.36-.46-2.43C2.01 14.99 2 14.65 2 12v-.08c0-2.64.01-2.99.06-4.04.05-1.06.22-1.8.46-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.49 2.52c.63-.24 1.36-.41 2.43-.46C8.9 2.01 9.26 2 11.69 2h.61zm-.08 1.8h-.47c-2.45 0-2.78.01-3.8.06-.98.05-1.5.21-1.86.34-.47.19-.8.4-1.15.75a2.7 2.7 0 00-.75 1.15c-.13.35-.29.88-.34 1.86-.05 1.02-.06 1.36-.06 3.8v.47c0 2.45.01 2.78.06 3.8.05.98.21 1.5.34 1.85.19.47.4.8.75 1.15.35.35.68.56 1.15.75.35.13.88.29 1.86.34 1.05.05 1.36.06 3.8.06h.08c2.6 0 2.92-.01 3.96-.06.98-.05 1.51-.21 1.85-.34.47-.19.8-.4 1.15-.75.35-.35.56-.68.75-1.15.13-.35.29-.88.34-1.85.05-1.06.06-1.36.06-3.8v-.08c0-2.6-.01-2.92-.06-3.96-.05-.98-.21-1.51-.34-1.86a2.7 2.7 0 00-.75-1.15 2.7 2.7 0 00-1.15-.75c-.35-.13-.88-.29-1.85-.34-1.05-.05-1.36-.06-3.96-.06zm-.2 4.87a5.13 5.13 0 110 10.26 5.13 5.13 0 010-10.26zm0 1.8a3.33 3.33 0 100 6.66 3.33 3.33 0 000-6.66zm5.34-3.21a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
