import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
import {motion} from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';
import { useTranslation } from 'react-i18next';
 

const ProjectMain = () => {
    const { t } = useTranslation("project");

const projects = [
    {
        name: t('Project'),
        year: t('Date'),
        align: "right",
        image: "../../images/website-img-1.jpg",
        link: "#"
    },
    {
        name: t("Project"),
        year: t("Date"),
        align: "left",
        image: "../../images/website-img-2.webp",
        link: "#"
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
                image={item.image}/>
            })}
        </div>
    </div>
  )
}
export default ProjectMain