const SingleContactSocial = ({Icon, link,className}) => {
  return (
    <div className='text-2xl h-12 w-12  flex items-center justify-center  cursor-pointer '>
        <a href={link}
         className={`${className} h-full w-full flex items-center justify-center  transition-all duration-300 ease-in-out rounded-full`}
         target="_blank" rel="noopener noreferrer"
>
<Icon />
        </a>
        
    </div>
  )
}

export default SingleContactSocial