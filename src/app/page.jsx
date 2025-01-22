import About from '@components/about';
import Contact from '@components/contact';
import Home from '@components/home';
import Projects from '@components/projects';
import Skill from '@components/skill';

const Portfolio = () => (
  <main className='main'>
    <section id='home' className='main-setion'>
      <Home />
    </section>
    <section id='about' className='main-setion'>
      <About />
    </section>
    <div className='wave-section'>
      <section id='skill' className='main-setion'>
        <Skill />
      </section>
    </div>
    <section id='projects' className='main-setion'>
      <Projects />
    </section>
    <section id='contact' className='main-setion'>
      <Contact />
    </section>
  </main>
);

export default Portfolio;
