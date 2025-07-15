import { useTranslation } from 'react-i18next';

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
export default LanguageSwitcher;
