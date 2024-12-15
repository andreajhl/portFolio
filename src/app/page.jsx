import About from '@components/about';
import Contact from '@components/contact';
import Home from '@components/home';
import Projects from '@components/projects';
import Skill from '@components/skill';

const Portfolio = () => (
  <main className='main'>
    <section id='home'>
      <Home />
    </section>
    <section id='about'>
      <About />
    </section>
    <section id='skill'>
      <Skill />
    </section>
    <section id='projects'>
      <Projects />
    </section>
    <section id='contact'>
      <Contact />
    </section>
  </main>
);

export default Portfolio;
