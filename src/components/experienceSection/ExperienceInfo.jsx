const ExperienceInfo = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-6xl'>{number}</p>
        <p className='font-bold text-xl uppercase mt-4'>{text}</p>
    </div>
  )
}

export default ExperienceInfo