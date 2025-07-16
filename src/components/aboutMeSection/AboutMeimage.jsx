const AboutMeimage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img src="../../images/about-me.jpg" alt="about me page" className='h-full w-auto abject-cover' />
        </div>
        <div className='h-[500px] w-[250px] absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'>

        </div>
    </div>
  )
}

export default AboutMeimage