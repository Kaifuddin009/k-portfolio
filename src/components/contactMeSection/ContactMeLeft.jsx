
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

const ContactMeLeft = () => {
  const { t } = useTranslation("contact");
  return (
    <div className='flex flex-col gap-4 w-full '>
        <h2 className=' text-3xl'>{t("Get in Touch")}</h2>
        <p className=' font-display1 text-xl'>{t("Feel free to reach out if you'd like to collaborate you are just a few clicks away!")}
        </p>
        <div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactMeLeft