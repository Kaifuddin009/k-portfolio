import ThemeToggle from "../themetoggle/ThemeToggle";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
//import VisitorCounter from '../../FramerMotion/Visitor/visitorCounter';
import LanguageSelector from '../Language/LanguageSwitcher';
const NavbarMain = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMenu = () => {
    setmenuOpen((prev) => !prev);
  }
  return (
    <nav className='flex top-0 left-0  w-full  mx-auto px-12 z-50  fixed dark:bg-gray-900 bg-white  '>
      <div className='relative max-w-7xl flex px-2 sm:px-6 lg:px-5  py-0  justify-between w-full mx-auto items-center '>
        <NavbarLogo/>
        
        <LanguageSelector/>
        <div
         className={`${menuOpen ? "block" : "hidden"} md:flex items-center space-x-8`}>
          <NavbarLinks open={menuOpen} setOpen={setmenuOpen}/>
        </div >
          <div className={`lg:block items-center space-x-4`}>
        <NavbarBtn/>
          </div>
        </div>
   


      
      <div className='absolute sm:top-4 top-2 right-2 flex gap-10 items-center'>
        <div className="">
          <ThemeToggle/>
        </div>
        
      <button className='text-2xl flex items-center leading-none md:hidden'
      onClick={toggleMenu}>
      <GiHamburgerMenu/>
      </button>
      </div>
    </nav>
  )
}
export default NavbarMain