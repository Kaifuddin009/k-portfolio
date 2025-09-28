/*import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <select className='dark:bg-black' onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">English</option>
            <option value="ch">Chinese</option>
            <option value="es">Español</option>
        </select>
    );
};
export default LanguageSwitcher;*/
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false); // close dropdown after selection
  };

  return (
    <div className="relative">
      {/* Language icon */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="text-2xl"
      >
        <IoLanguage />
      </button>

      {/* Dropdown menu */}
      {open && (
  <div
    className={`absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 
      transition-all duration-200 ease-in-out transform origin-top scale-95 opacity-0
      ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
  >
    <button
      className={`w-full px-3 py-2 text-left ${i18n.language === "en" ? "font-bold" : ""}`}
      onClick={() => changeLanguage("en")}
    >
      English
    </button>
    <button
      className={`w-full px-3 py-2 text-left ${i18n.language === "ch" ? "font-bold" : ""}`}
      onClick={() => changeLanguage("ch")}
    >
      Chinese
    </button>
    <button
      className={`w-full px-3 py-2 text-left ${i18n.language === "es" ? "font-bold" : ""}`}
      onClick={() => changeLanguage("es")}
    >
      Español
    </button>
  </div>
)}
    </div>
  );
};

export default LanguageSwitcher;

