import { useTranslation } from "react-i18next"
const SkillsText = () => {
  const { t } = useTranslation("skills");
  return (
    <div className='flex flex-col items-center text-center mt-[100px] '>
      <h2 className='text-6xl mb-10'>{t("My Skill")}</h2>
      <p className='text-2xl flex items-center text-center -tracking-tight '>{t("I work with these technologies, but I am excellent at using them with best practices to deliver high quality results. I have been working with all these skills to build my portfolio projects.")}</p>
    </div>
  )
}

export default SkillsText