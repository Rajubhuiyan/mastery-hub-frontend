 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from '../Translation/json/english.json'
import french from '../Translation/json/french.json'
import albanian from '../Translation/json/albanian.json'
import spanish from '../Translation/json/spanish.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: english
      },
      sq:{
        translation: albanian
      },
      es:{
        translation: spanish
      },
      fr:{
        translation: french
      }
    },
    lng:  localStorage.getItem("currentLanguage") || 'en' , // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });