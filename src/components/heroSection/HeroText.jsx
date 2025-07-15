import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import { useTranslation } from 'react-i18next';
const HeroText = () => {
  const { t } = useTranslation("herosection");
  return (
    <div className='flex flex-col gap-4  h-full justify-center items-center text-center md:items-start  md:text-left sm:text-center ' >
        <motion.h2 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}
        className='lg:text-2xl sm:text-xl lg:-3xl uppercase'>{t("Front-End Development")}
        </motion.h2>
        <motion.h1 
          variants={fadeIn("right",0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
        className='text-4xl sm:text-5xl md:text-[2.8rem] lg:text-6xl font-bold font-special'>Sheikh kaifuddin</motion.h1>
        <motion.p 
          variants={fadeIn("up",0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
        className='text-2xl sm:text-2xl m-6 w-full'>{t(`A passionate software developer & web developer`)}</motion.p>
    </div>
  )
}

export default HeroText