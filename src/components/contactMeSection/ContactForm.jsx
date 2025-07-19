import { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { sendToast } from '../../utils/toaster/sendmsg';
import { useTranslation } from 'react-i18next';
const ContactForm = () => {
const { t } = useTranslation("contact");
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[success, setSuccess] = useState("");
    const[loading, setLoading] = useState(false);

    const handleName = (e) =>{
        setName(e.target.value);
        }
        const handleEmail = (e) =>{
            setEmail(e.target.value);
            }
            const handleMessage = (e) =>{
                setMessage(e.target.value);
                }
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      sendToast(false);

        return;
      
    }  
    setLoading(true);  
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
          emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_NAME, import.meta.env.VITE_EMAILJS_SERVICEID, form.current, {
              publicKey: import.meta.env.VITE_EMAILJS_KEY,
            })
            
                setName('');
                setEmail('');
                setMessage('');
                setSuccess('Message Sent');
                sendToast(true);
              
    } catch (error) {
        console.log('FAILED...', error.text);
        sendToast(false);
      }finally {
        setLoading(false);
      }
    };
  return (
    <div>
        <p className=' '>{success}</p>
        <form className='flex flex-col gap-2' ref={form} onSubmit={sendEmail}>
            <input 
            name='from_name'
            type="text" 
            placeholder={t("Your Name")}
             className='h-12 rounded-lg border-1 border-black px-3 dark:border-white'
             value={name}
             onChange={handleName}
              />
            <input
            name='from_email'
            type="email" placeholder={t("Your Email")}
            className='h-12 rounded-lg border-1 border-black px-3 dark:border-white'
             value={email}
            onChange={handleEmail}/>
            
            <textarea
            name='message'
             type="text" 
             placeholder={t("Message")}
              row="9" cols="50" 
          className='h-50 rounded-lg p-2 border-1 border-black px-3 dark:border-white'
              value={message}
             onChange={handleMessage}
              />
             <button type="submit" 
             disabled={loading}
             className={`w-full rounded-lg border  border-black hover:bg-black hover:text-white  h-12 font-bold text-xl dark:hover:bg-white dark:hover:text-black dark:border-white transition-all duration-500 
             ${loading ? 'bg-gray-400 text-white cursor-not-allowed' : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white'}`
             }>

              {loading ? (
    <span className="flex items-center justify-center gap-2">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      {t("Sending")}...
    </span>
  ) : (
    t("Send")
  )}
      </button>
        </form>
    </div>
  )
}

export default ContactForm