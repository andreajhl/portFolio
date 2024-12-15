import { SiGithub, SiLinkedin, SiGmail } from '@ui/icons';
import wordings from '@wordings/index';
import Link from 'next/link';
import './styles.scss';

const SocialLinks = () => {
  const { contact: { channels } } = wordings;

  return (
    <section className='social-links'>
      <h4 className='social-links-title'>
        <strong>{channels.strong}</strong> {channels.content}
      </h4>
      <div className='social-links-icons'>
        <Link
          href='https://github.com/andreajhl'
          rel='noopener noreferrer'
          aria-label='Visit my GitHub profile'
          className='social-links-icon'
          target='_blank'
        >
          <SiGithub />    
        </Link>
        <Link
          href='https://www.linkedin.com/in/andreahernandez29/'
          rel='noopener noreferrer'
          className='social-links-icon'
          aria-label='Visit my LinkedIn profile'
          target='_blank'
        >
          <SiLinkedin /> 
        </Link>
        <Link
          href='mailto:andreajhl29@gmail.com'
          rel='noopener noreferrer'
          className='social-links-icon'
          aria-label='Send me an email'
          target='_blank'
        >
          <SiGmail />  
        </Link>
      </div>
    </section>
  );
};

export default SocialLinks;
