
const SingleSkill = ({imgSvg,text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-3 relative'>
        <div className=' h-[100px] w-[100px] flex items-center justify-center rounded-full dark:hover:text-white hover:scale-105 transform transition-all duration-500 text-6xl border-4 dark:border-white'>
          {imgSvg}
        </div>
        <p className='font-bold '>{text}</p>
       </div>
       <div className='w-[100px] h-[200px] absolute top-[50px] -z-10'></div>
      </div>
  )
}

export default SingleSkill