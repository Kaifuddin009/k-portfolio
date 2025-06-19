import SingleInfo from './SingleInfo';
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 '>
         <SingleInfo 
         href="mailto:uddinkaif00@gmail.com"
         text="uddinkaif00@gmail.com" 
         Icon={HiOutlineMail} 
         iconClass="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-200"
         />
         <SingleInfo 
         href="tel:+917024651111"
         text="+91 7024651111" 
         Icon={IoCallOutline} 
         iconClass="text-blue-600 hover:text-blue-800 transition-colors duration-200"
         />
         <SingleInfo 
         href="https://www.google.com/maps?q=Indrapuri,+Bhopal"
         text='Indrapuri, Bhopal' 
         Icon={IoLocationOutline} 
         iconClass="text-red-500 hover:text-red-800 transition-colors duration-200"
         />
    </div>
  )
}
export default ContactInfo