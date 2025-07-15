import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Languagedetector from 'i18next-browser-languagedetector';

//chinese
import navbarCH from "../../locales/ch/navbar.json";
import herosectionCH from "../../locales/ch/herosection.json";
import aboutmeCH from "../../locales/ch/aboutme.json";
import skillsCH from "../../locales/ch/skill.json";
import experienceCH from "../../locales/ch/experience.json";
import contactCH from "../../locales/ch/contact.json";
import projectCH from "../../locales/ch/project.json";

//Spanish 
import navbarES from '../../locales/es/navbar.json';
import herosectionES from '../../locales/es/herosection.json';
import aboutmeES from '../../locales/es/aboutme.json';
import skillsES from '../../locales/es/skill.json';
import experienceES from '../../locales/es/experience.json';
import projectES from "../../locales/es/project.json";
import contactES from "../../locales/es/contact.json";

i18n
.use(Languagedetector)
.use(initReactI18next)
.init({
  resources: {
    /*en: {
      skill: skillEN
     },*/
    ch: {
      navbar: navbarCH,
        herosection: herosectionCH,
        aboutme: aboutmeCH,
        skills: skillsCH,
        experience: experienceCH,
        project:projectCH,
        contact:contactCH
    },
    es: {
        navbar: navbarES,
        herosection: herosectionES,
        aboutme: aboutmeES,
        skills: skillsES,
        experience: experienceES,
        project:projectES,
        contact:contactES
    }
  },
  lang: "en",
  fallbackLng: "en",
  ns: ["navbar", "herosection", "aboutme", "skills", "experience","project","contact"],
  defaultNS: "navbar",
  interpolation: { escapeValue: false }
});
export default i18n;