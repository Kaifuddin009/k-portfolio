import SkillsText from './SkillsText';
import AllSkill from './AllSkill';
import AllskillSM from './AllskillsSM';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';


const SkillsMain = () => {
  return (
    <div id='skills' className='sm:py-20'>
      <div className='container mx-auto min-h-[600px] relative overflow-hidden w-full'>
        <motion.div
        variants={fadeIn("down",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0}}
        
        >

        <SkillsText/>
        </motion.div>
      <div className='lg:block hidden sm:hidden bottom-[50px] absolute left-[50%] -translate-x-[50%]'>

        <AllSkill/>
      </div>
      <div className=' lg:hidden'>
        <AllskillSM/>
      </div>
      </div>
    </div>
  )
}

export default SkillsMain