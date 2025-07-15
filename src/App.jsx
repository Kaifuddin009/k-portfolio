
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHerosection from './components/heroSection/SubHerosection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/Footer/FooterMain';

const App = () => {


  return (
    <main className='font-display1 m-0 p-0'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHerosection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterMain/>
</main>
  )
}

export default App