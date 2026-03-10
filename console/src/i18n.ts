import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  zh: {
    translation: zh,
  },
  ja: {
    translation: ja,
  },
  ko: {
    translation: ko,
  },
};

const getInitialLang = () => {
  const v = localStorage.getItem("language");
  if (v && resources[v as keyof typeof resources]) return v;

  const navLang = navigator.language.toLowerCase();
  if (navLang.startsWith("ko")) return "ko";
  if (navLang.startsWith("zh")) return "zh";
  if (navLang.startsWith("ja")) return "ja";
  return "en";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
