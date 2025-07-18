import { useTranslation } from 'react-i18next';

const ProjectText = () => {
  const { t } = useTranslation("project");
  return (
    <div className='flex flex-col items-center mt-[100px]'>
      <h2 className='text-6xl mb-10'>{t("Projects")}</h2>  
      <p className='text-2xl -tracking-tight text-center sm:p-0 p-3'>
    {t("I have worked on a variety of web devlopment projects, ranging from responsive websites for small bussiness to full-stack application a complex front-end interfaces.")} 
      </p>
    </div>
  )
}

export default ProjectText