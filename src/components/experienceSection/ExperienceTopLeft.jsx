import { useTranslation } from 'react-i18next';
import ExperienceInfo from './ExperienceInfo';
const ExperienceTopLeft = () => {
  const { t } = useTranslation("experience");
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='font-bold uppercase text-3xl font-sans text-center'>{t("SINCE")} 2022</p>
        <div className='flex justify-center items-center gap-7'>
            <ExperienceInfo number="3" text={t("YEARS")}/>
            <p className='font-bold text-6xl'>-</p>
            <ExperienceInfo number="4" text={t("PORTFOLIO")}/>
        </div>
        <p className='text-center'>
            {t("With 6 months of experience building dynamic and user friendly web applications.")}
        </p>
        <ExperienceInfo number="2000 RS" text={t("MAX BUDGET")}/>
    </div>
  )
}
export default ExperienceTopLeft