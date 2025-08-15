import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import { useTranslation } from 'react-i18next';
 

const ProjectMain = () => {
    const { t } = useTranslation("project");

const projects = [
    {
        name: t('To-do list'),
        year: t('2024'),
        align: "right",
        image: "../../images/toodo.jpg",
        link: "https://aim-mark.onrender.com/"
    },
    {
        name: t("Blog-eng"),
        year: t("2025"),
        align: "left",
        image: "../../images/blog.png",
        link: "https://blog-eng-delta.vercel.app/"
    },
    {
        name: t("Project"),
        year: t("Date"),
        align: "right",
        image: "../../images/website-img-3.jpg",
        link: "#"
    },
    {
        name: t("Project"),
        year: t("Date"),
        align: "left",
        image: "../../images/website-img-4.jpg",
        link: "#"
    },
];

  return (
    <div id="projects" className="max-w-full mx-auto w-full p-3">

        <motion.div 
        variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0}}
        >

        <ProjectText/>
        </motion.div>
        <div className="flex flex-col gap-10 max-w-full mx-auto mt-12">
            {projects.map((item, index) => {
                return <SingleProject 
                key={index} 
                name={item.name} 
                year={item.year} 
                align={item.align} 
                image={item.image}
                link={item.link}
                />
            })}
        </div>
    </div>
  )
}
export default ProjectMain