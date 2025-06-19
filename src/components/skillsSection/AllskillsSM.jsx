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


const AllskillSM = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  sm:gap-6 md:gap-8 my-12 w-full max-w-7xl mx-auto px-4'>
        {skills.map((item,index) =>{
            return (
            <motion.div
             variants={fadeIn("up", 0.2 )}
             initial="hidden"
             whileInView="show"
             viewport={{once: false, amount: 0.3}}
             key={index} 
             className='flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800'>
                <item.icon className='text-4xl sm:text-5xl md:text-6xl'/>
                <p className='text-center mt-2 text-sm sm:text-base'>{item.skill}</p>

            </motion.div>
            );
        })}
    </div>
  )
}

export default AllskillSM