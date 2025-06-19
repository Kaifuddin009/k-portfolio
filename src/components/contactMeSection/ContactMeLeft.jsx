import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-4 w-full '>
        <h2 className=' text-3xl'>Get in Touch</h2>
        <p className=' font-display1 text-xl'>Feel free to reach out if you'd like to collaborate
            <br/>
            you are just a few clicks away!
        </p>
        <div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactMeLeft