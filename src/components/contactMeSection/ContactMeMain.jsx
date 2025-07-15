import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';
import { useTranslation } from 'react-i18next';
const ContactMeMain = () => {
  const { t } = useTranslation("contact");
  return (
    <div 
    id='contact'
    className='mx-auto items-center justify-center md:mt-[50px]  w-full '>
        <h2 className='text-6xl   text-center'>{t("Contact me")}</h2>
        <div className='flex flex-col
        justify-between
         gap-8   p-4 sm:p-6 lg:p-8
         mx-auto
         rounded-2xl 
         lg:flex-row
          sm:flex-col'>
            <ContactMeLeft/>
            <ContactMeRight/>
        </div>
    </div>
  )
}

export default ContactMeMain