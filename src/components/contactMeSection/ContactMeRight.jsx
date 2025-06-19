import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <img src="../public/images/email-image.png" alt="Contact Me" className='max-w-[250px]' />
        <ContactInfo/>
        <ContactSocial/>
    </div>
  )
}

export default ContactMeRight