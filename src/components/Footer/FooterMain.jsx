import { Link } from "react-scroll";

const links =[
    { link: "Sheikh Kaifuddin", section: "hero" },
    {link:"About Me",   section: "about"},
    {link:"Skills",     section: "skills"},
    {link:"Experience", section: "experience"},
    {link:"Projects",   section: "projects"},
    {link:"Contact",    section: "contact"}
  ];
const FooterMain = () => {
  return (
    <div className='px-4 w-full'>
        <div className='h-[1px] w-full'></div>
        <div className='md:flex sm:hidden justify-end mt-4 max-w-[1300px] mx-auto'>
            <ul className='flex gap-4 text-xl'>
                {links.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link
            to={item.section}
            spy={true}
            smooth={true}
            duration={100}
            offset={100}
            className={`cursor-pointer hover:text-cyan-900 transition-all duration-500 dark:hover:text-gray-400  
              ${item.section === 'hero' ? 'text-3xl mr-160 hidden sm:block' : ''}
              `}>
             {item.link}
            </Link>
            </li>
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm'>2025 kaifuddin | All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain