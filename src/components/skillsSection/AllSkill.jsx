import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import { fadeIn } from '../../FramerMotion/variants'

const skills = [
    {
        skill: "HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3,
    },
    {
        skill: "JAVASCRIPT",
        icon: IoLogoJavascript,
    },
    {
        skill: "REACTJS",
        icon: RiReactjsFill,
    },
    {
        skill: "TAILWIND",
        icon: RiTailwindCssFill,
    },
]
const AllSkill = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
      {skills.map((item,index) =>{
        return (
        <motion.div
        key={index}
         variants={fadeIn("up",`0.${index}`)}
         initial="hidden"
         whileInView="show"
          viewport={{once: false, amount: 0}}
        >
        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
        </motion.div>
        );
      })}  
  </div>
  )
}
export default AllSkill