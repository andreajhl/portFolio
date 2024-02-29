import React from 'react'
import Home from '../home';
import About from '../about';
import Projects from '../projects';
import Skill from '../skill';

const PageMain = () => {
  return (
    <div>
      <section id='#home'>
        <Home />
      </section>
      <section id='#about'>
        <About />
      </section>
      <section id='#skill'>
        <Skill />
      </section>
      <section id='#projects'>
        <Projects />
      </section>
      <section id='#curriculum'>
      </section>
      <section id='#contact'>
      </section>
    </div>
  )
}

export default PageMain;
