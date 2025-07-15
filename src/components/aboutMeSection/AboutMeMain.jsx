import AboutMeMainText from './AboutMeMainText';
import AboutMeimage from './AboutMeimage';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';


const AboutMeMain = () => {
  return (
    <div
    id='about'
    className='flex flex-col md:flex-row  gap-12 px-4  mx-auto mt-[100px] justify-between items-center'>
     <motion.div 
     variants={fadeIn("right",0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.7}}
     >
        <AboutMeMainText/>
     </motion.div>
     <motion.div 
     variants={fadeIn("left",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0}}
     
     >
        <AboutMeimage/>
     </motion.div>
    </div>
  )
}

export default AboutMeMain