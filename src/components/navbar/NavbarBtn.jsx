import { LuArrowDownRight } from "react-icons/lu";
import { FaWhatsapp, } from "react-icons/fa";
import { FaSquareXTwitter,FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {motion,AnimatePresence} from "motion/react";
import { useState,useEffect,useRef } from "react";
import { useTranslation } from "react-i18next";

const shareUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent("check this awesome developer portfolio");
const platforms = [
  {name:"Whatsapp",icon:<FaWhatsapp className="text-green-500 text-2xl"/>,url:`https://wa.me/?text=${shareText}%20${shareUrl}`},
  {name:"XTwitter",icon:<FaSquareXTwitter className="text-black text-2xl dark:text-white"/>,url:`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`},
  {name:"LinkedIn",icon:<FaLinkedinIn className="text-blue-600 text-2xl"/>,url:`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`},
  {name:"Email",   icon:<MdEmail className="text-red-600 text-2xl"/>   ,url:`mailto:?subject=Check%20this%20portfolio&body=${shareText}%20${shareUrl}`},
];
const NavbarBtn = () => {
  const { t } = useTranslation("navbar");
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);


  const toggleDropDown = () => setOpen((prev) => !prev);
  useEffect(() => {
    const handleClickOutside =(event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    const handleScroll = ()=>{
      setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      window.addEventListener("scroll", handleScroll)
    }
  },[open])

  return (
    <div className="relative sm:top-0 top-1 sm:right-0 right-6">
      <motion.button 
      onClick={toggleDropDown}
    className='px-4  sm:py-1 py-1 sm:mb-0 mb-2  rounded-full border-1 text-xl font-bold flex  gap-1 hover:bg-black hover:text-white  dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all duration-500'
    >
     {t("share")} 
    <div className='sm:hidden md:block mt-1'>
          <LuArrowDownRight />
        </div>
        </motion.button>
        <AnimatePresence>
          {open && (
          <motion.div
          ref={dropDownRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
           className="absolute z-50 mt-2 bg-white dark:bg-black border rounded shadow p-2 flex flex-col gap-2">
            {platforms.map((platform) => (
              <a
              key={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              href={platform.url}
              className="flex items-center gap-2 hover:underline"
              >
              {platform.icon}
              <span>{platform.name}</span>
              </a>
            ))}
          </motion.div>
        )}    
        </AnimatePresence>
        
    </div>
  )
}
export default NavbarBtn