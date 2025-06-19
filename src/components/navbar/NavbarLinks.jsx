import { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "Sheikh Kaifuddin", section: "hero" },
  { link: "AboutMe", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" }
];

const NavbarLinks = ({ open, setOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open, setOpen]);

  return (
    <ul
      ref={dropdownRef}
      className='mt-2 flex flex-col gap-4 font-bold text-center py-3 md:flex-row md:relative absolute top-[120%] left-[50%] -translate-x-[50%] text-xl md:text-md backdrop-blur-lg w-full md:w-auto p-4 rounded  z-50'
    >
      {links.map((item, index) => (
        <li key={index} className='group'>
          <Link
            to={item.section}
            spy={true}
            smooth={true}
            duration={100}
            offset={100}
            onClick={() => setOpen(false)}
            className={`cursor-pointer hover:text-cyan-900 transition-all duration-500 dark:hover:text-gray-400  
              ${item.section === 'hero' ? 'text-3xl mr-40 hidden sm:block' : ''}
              `}
          >
            {item.link}
          </Link>
             <span className="block mx-auto h-[1px] w-0 bg-gray-300 group-hover:w-full transition-all duration-300"></span>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
