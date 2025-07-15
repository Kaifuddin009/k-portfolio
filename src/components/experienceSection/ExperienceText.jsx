import { useTranslation } from "react-i18next";
const ExperienceText = () => {
  const { t } = useTranslation("experience");
  return (
    <div className='flex flex-col items-center mt-[100px]'>
        <h2 className='text-6xl mb-10 text-center'>{t("Experience")}</h2>
    </div>
  )
}
export default ExperienceText