const links =[
    {link:"About Me",   section: "about"},
    {link:"Skills",     section: "skills"},
    {link:"Experience", section: "experience"},
    {link:"Projects",   section: "project"},
    {link:"Contact",    section: "contact"}
  ];
  
const FooterMain = () => {
  return (
    <div className='px-4 w-full'>
        <div className='h-[1px] w-full'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1300px] mx-auto'>
            <p className='text-3xl'>Sheikh Kaifuddin</p>
            <ul className='flex gap-4 text-xl'>
                {links.map((item, index) =>{
                    return(
                        <li key={index}>
                            <a href="#" className='hover:text-gray-400 dark:hover:text-gray-400 transition-all duration-500 cursor-pointer'>{item.link}</a>
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