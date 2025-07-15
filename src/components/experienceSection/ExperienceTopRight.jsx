import {useTranslation} from 'react-i18next';
const ExperienceTopRight = () => {
const { t } = useTranslation("experience");
  return (
    <div className='xl:w-[25%] lg:w-[30%] borderp-4 rounded-xl'>
        <p className='text-2xl tracking-tight text-center sm:p-0 p-3'>
        {t("I specialize in  React and Modern Javascript leveraging best practices to create scalable amd maintainable solutions. My experiences some working on diverse projects, from small bussiness websites to complex frond-end systems, always aiming for clean and expectional user experiences.")}
        </p>
    </div>
  )
}
export default ExperienceTopRight