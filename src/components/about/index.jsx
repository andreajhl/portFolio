import wordings from '@wordings';
import Link from 'next/link';
import './styles.scss';

const About = () => {
  const { about: { title, content, options, profession } } = wordings;

  return (
    <div className='about'>
      <h2 className='about-title'>{title}</h2>
      <hr aria-hidden="true" className='about-title-line' />
      <div className='about-content'>
        <p className='about-text'>
          <strong>{profession}</strong> {content}
        </p>
        <div className='about-options'>
          <Link className='about-option about-option-contact' href='#contact'>
            {options.contact}
          </Link>
          <Link className='about-option about-option-projects' href='#projects'>
            {options.projects}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;