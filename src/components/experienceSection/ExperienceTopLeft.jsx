import ExperienceInfo from './ExperienceInfo';
const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='font-bold uppercase text-3xl font-sans text-center'>Since 2022</p>
        <div className='flex justify-center items-center gap-7'>
            <ExperienceInfo number="3" text="Years"/>
            <p className='font-bold text-6xl'>-</p>
            <ExperienceInfo number="4" text="Portfolio"/>
        </div>
        <p className='text-center'>
            With 6 months of experience building dynamic and user-friendly web applications.
        </p>
        <ExperienceInfo number="2000 RS" text="Max Budget"/>
    </div>
  )
}
export default ExperienceTopLeft