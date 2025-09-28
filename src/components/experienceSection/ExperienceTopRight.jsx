import {useTranslation} from 'react-i18next';
const ExperienceTopRight = () => {
const { t } = useTranslation("experience");
  return (
    <div className='xl:w-[25%] lg:w-[30%] borderp-4 rounded-xl'>
        
        

      <ul className='mt-4 list-disc list-inside text-xl tracking-tight text-center  sm:p-0 p-3'>
        <li className=''>{t("Built a responsive To-Do List application using React, managing state efficiently with hooks.")}</li>
        <li>{t("Developed a multi-page blog platform with React and Node.js, integrating MongoDB for data storage.")}</li>
        <li>{t("Created small business websites with clean, maintainable front-end code and responsive design.")}</li>
        <li>{t("Focused on scalable solutions and user-friendly experiences across all projects.")}</li>
      </ul>

        
    </div>
  )
}
export default ExperienceTopRight