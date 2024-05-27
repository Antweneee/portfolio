import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
