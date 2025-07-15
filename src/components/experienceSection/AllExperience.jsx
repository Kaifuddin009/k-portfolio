import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import {useTranslation} from 'react-i18next';


const AllExperience = () => {
  const { t } = useTranslation("experience");

  
const experiences = [
    {
        job: t("Web Developer"),
        company: t("Website"),
        date: "2024",
        Responsibilities:[
            t("Implementing resuable components."),
            t("Generating new futures."),
            t("Responsiveness & Better UI/UX"),
            t("SEO Friendly"),
        ],
    },

    {
        job: "UI/UX",
        company: t("PORTFOLIO"),
        date: "2024",
        Responsibilities:[
            t("3D Animation"),
            t("Perform on any Devices"),
            t("Dynamic Interface"),

        ],
    },

    {
        job: t("Course Instructor 2024-present"),
        company: t("Student"),
        date: "2024-present",
        Responsibilities:[
          
            t("Helping students learning web development technology."),
            t("Explaining Also Java and some DSA."),
        ],
    },
];
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