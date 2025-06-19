const AboutMeMainText = () => {
  return (
    <div className='flex flex-col items-center text-center md:items-start  md:text-left'>
      <h2 className='text-6xl sm:text-5xl lg:text-6xl  mb-8 sm:mb-8 lg:mb-10'>About Me</h2>
      <p className='font-display1 -tracking-tight text-2xl sm:text-xl lg:text-2xl '>
        I'm Kaifuddin, Student with a soft skill of web developer & coding.
        I specialize in React, Front-end developer & Java, I enjoy continue learning and sharing knowledge to inspire others to achieve their goals.  
      </p>
      <button className='border sm:mt-10 mt-8
      rounded-full py-3 px-6
      text-base sm:text-lg
         flex items-center
       hover:bg-black hover:text-white
       transition-all duration-500
        cursor-pointer md:self-start
          active:scale-95
      dark:hover:bg-white
       dark:hover:text-black'
     >My Projects
             </button>
    </div>
  )
}

export default AboutMeMainText