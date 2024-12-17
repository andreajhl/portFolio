import { GITHUB_PROFILE_URL, CONTACT_EMAIL, LINKEDIN_PROFILE_URL } from '@constants/networkLinks';
import { SiGithub, SiLinkedin, SiGmail } from '@ui/icons';
import wordings from '@wordings/index';
import Link from 'next/link';
import './styles.scss';

const NetworkLinks = () => {
  const { contact: { channels } } = wordings;

  return (
    <section className='network-links'>
      <h4 className='network-links-title'>
        <b>{channels.strong}</b> {channels.content}
      </h4>
      <div className='network-links-icons'>
        <Link
          href={GITHUB_PROFILE_URL}
          rel='noopener noreferrer'
          aria-label='Visit my GitHub profile'
          className='network-links-icon'
          target='_blank'
        >
          <SiGithub />    
        </Link>
        <Link
          href={LINKEDIN_PROFILE_URL}
          rel='noopener noreferrer'
          className='network-links-icon'
          aria-label='Visit my LinkedIn profile'
          target='_blank'
        >
          <SiLinkedin /> 
        </Link>
        <Link
          href={CONTACT_EMAIL}
          rel='noopener noreferrer'
          className='network-links-icon'
          aria-label='Send me an email'
          target='_blank'
        >
          <SiGmail />  
        </Link>
      </div>
    </section>
  );
};

export default NetworkLinks;
