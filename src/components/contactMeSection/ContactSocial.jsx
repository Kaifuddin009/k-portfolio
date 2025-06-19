import SingleContactSocial from './SingleContactSocial';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link="https://github.com/" Icon={FaGithub} className=" text-green-500 border border-green-500 "/>
      <SingleContactSocial link="https://www.linkedin.com/in/sheikh-kaifuddin" Icon={FaLinkedin} className="bg-blue-500 border border-blue-500"/>
      <SingleContactSocial link="#" Icon={FaInstagram} className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
    </div>
  )
}

export default ContactSocial