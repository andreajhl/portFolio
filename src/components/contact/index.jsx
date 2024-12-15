import Form from '@components/form';
import SocialLinks from '@components/socialLinks';
import wordings from '@wordings';
import './styles.scss';

const Contact = () => {
  const { contact: { title, content } } = wordings;

  return (
    <div>
      <h2 className='contact-title'>{title}</h2>
      <hr aria-hidden="true" className='contact-divider' />
      <div className='contact-content'>
        <p className='contact-text'>{content}</p>
        <div className='contact-widgets'>
          <Form />
          <SocialLinks />          
        </div>
      </div>
    </div>
  );
};

export default Contact;
