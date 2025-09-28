import {useTranslation} from 'react-i18next';

const AboutMeMainText = () => {
  
  const { t } = useTranslation("aboutme");
  return (
    <div className='flex flex-col items-center text-center md:items-start  md:text-left'>
      <h2 className='text-6xl sm:text-5xl lg:text-6xl  mb-8 sm:mb-8 lg:mb-10'>{t('About Me')}</h2>
      <p className='font-display1 -tracking-tight text-2xl sm:text-xl lg:text-2xl '>
        {t("I’m Kaifuddin, a MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, MySQL and MongoDB. I specialize in building dynamic and user-friendly web applications, focusing on performance and clean code. Alongside JavaScript technologies, I’m also exploring Python to expand my problem-solving and backend development skills. Passionate about continuous learning, I enjoy experimenting with new tools and sharing knowledge to inspire others.")}
      </p>
      <button
      onClick={() => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  }}
      className='border sm:mt-10 mt-8
      rounded-full py-3 px-6
      text-base sm:text-lg
         flex items-center
       hover:bg-black hover:text-white
       transition-all duration-500
        cursor-pointer md:self-start
          active:scale-95
      dark:hover:bg-white
       dark:hover:text-black'
     >{t("My Projects")}
             </button>
    </div>
  )
}
export default AboutMeMainText;