
import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { translations } from "./translations";

type Lang = 'en' | 'hu';

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations['en'];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "hu",
  setLang: () => {},
  t: translations.hu,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("hu");
  const t = useMemo(() => translations[lang], [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
