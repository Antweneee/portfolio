import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            // translation file path
            loadPath: "../assets/i18n/{{lng}}.json",
        },
        fallbackLng: "en",

        debug: false,

        interpolation: {
            espaceValue: false,
            formatSeparator: ",",
        },
        react: {
            wait: true,
        },
    });

console.log("i18n config file")

export default i18n;
