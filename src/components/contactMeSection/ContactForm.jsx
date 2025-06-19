import { useState } from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[success, setSuccess] = useState("");

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

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qy1990v', 'template_paczbvm', form.current, {
            publicKey: '73CbRML69u_g20fyY',
          })
          .then(
            () => {
              setName('');
              setEmail('');
              setMessage('');
              setSuccess('Message Sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>
        <p className=' '>{success}</p>
        <form className='flex flex-col gap-2' ref={form} onSubmit={sendEmail}>
            <input 
            name='from_name'
            type="text" 
            placeholder='Your Name'
             required className='h-12 rounded-lg border-1 border-black px-3 dark:border-white'
             value={name}
             onChange={handleName}
              />
            <input
            name='from_email'
            type="email" placeholder='Your Email'
             required className='h-12 rounded-lg border-1 border-black px-3 dark:border-white'
             value={email}
            onChange={handleEmail}/>
            
            <textarea
            name='message'
             type="text" 
             placeholder='Message'
              row="9" cols="50" 
              required className='h-50 rounded-lg p-2 border-1 border-black px-3 dark:border-white'
              value={message}
             onChange={handleMessage}
              />
             <button className='w-full rounded-lg border  border-black hover:bg-black hover:text-white  h-12 font-bold text-xl dark:hover:bg-white dark:hover:text-black dark:border-white transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm