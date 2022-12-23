import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./materials/locales/EN.json";
import TC from "./materials/locales/TC.json";

const resources = {
    EN: {
        translation: EN,
    },
    TC: {
        translation: TC,
    }
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "EN",
    lng: "EN",
});

export default i18n;