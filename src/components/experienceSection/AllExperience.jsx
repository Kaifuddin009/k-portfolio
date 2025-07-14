import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const experiences = [
    {
        job: "Front-End-Developer",
        company: "Website",
        date: "2024",
        Responsibilities:[
            "Implementing resuable components.",
            "Generating new futures.",
            "Responsiveness & Better UI/UX",
            "SEO Friendly",
        ],
    },

    {
        job: "UI/UX",
        company: "Protfolio",
        date: "2024",
        Responsibilities:[
            "3D Animation",
            "Perform on any Devices ",
            "Dynamic Interface",
            
        ],
    },

    {
        job: "Course Instructor",
        company: "Students",
        date: "2024-present",
        Responsibilities:[
            "Provide Support for students.",
            "Helping students learning web development technology",
            "Explaining Also Java and some DSA",
        ],
    },
];

const AllExperience = () => {
  return (
    <div className='sm:text-xl text-2xl items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 realative'>
       {experiences.map((experience, index) => {
        return (
          <div key={`experience-${index}`} className='realative'>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3}}
              className='p-6 h-full'
            >
              <div className=''>
              <SingleExperience experience={experience} />
              </div>
            </motion.div>
            {index < experience.length -1 && (
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className=" lg:block absolute top-1/2 -right-6 transform -translate-y-1/2"
              >
                <FaArrowRight className='text-2xl' />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  )
}
export default AllExperience;