import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
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
        skill: "REACT.JS",
        icon: RiReactjsFill,
    },
    {
        skill: "TAILWIND",
        icon: RiTailwindCssFill,
    },
    {
        skill: "NODE.JS",
        icon: FaNode,
    },
    {
        skill: "EXPRESS.JS",
        icon: SiExpress,
    },
    {
        skill: "MONGODB",
        icon: SiMongodb,
    },
    {
        skill: "MYSQL",
        icon: SiMysql,
    },
    {
        skill: "PYTHON",
        icon: FaPython,
    },
]
const AllSkill = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
      {skills.reverse().map((item,index) =>{
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