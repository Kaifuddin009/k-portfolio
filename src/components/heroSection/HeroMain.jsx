
import HeroPic from './HeroPic';
import HeroText from './HeroText';
import HeroGradient from './HeroGradient';
const HeroMain = () => {
  return (
    <div
    id='hero'
    className='pt-40 pb-16'>
        <div className='flex flex-col md:flex-row relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <HeroText/>
        <HeroPic/>
        <HeroGradient/>
        </div>
    </div>
  ) 
}

export default HeroMain