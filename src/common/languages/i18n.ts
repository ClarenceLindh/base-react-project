import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "common/languages/locales/en.json";
import SWE from "common/languages/locales/swe.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: { translation: EN },
    swe: { translation: SWE },
  },
});

export default i18n;
