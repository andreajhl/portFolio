import React from 'react';
import './styles.scss';
import wordings from '@/wordings';

const About = () => {
  const { about: { title, content, options, profession } } = wordings;

  return (
    <section className='about section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
      <div className='about__content'>
        <p className='about__content-text'>{(content(profession))}</p>
        <div className='about__content-option'>
          <a className='about__content-option-item about__content-option-item--contact' href='#contact'>{options.contact}</a>
          <a className='about__content-option-item about__content-option-item--projects' href='#projects'>{options.projects}</a>
        </div>
      </div>
    </section>
  )
}

export default About;