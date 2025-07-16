
import { PiHexagonLight } from "react-icons/pi";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0}}
    
    className='h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src="../../images/HexaPic.png" 
        alt="sheikh kaifuddin" 
        className='max-h-[450px] rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover '
         />
        <div className='absolute flex animate-pulse -z-10'>
        <PiHexagonLight className='
         w-56 h-56
          sm:w-[110px] sm:h-[110px]
         md:w-[128px] md:h-[128px]
        lg:w-[500px] lg:h-[500px]
         opacity-50
         blur-md
          animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic