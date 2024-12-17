import { CV_URL } from '@constants/networkLinks';
import wordings from '@wordings';
import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';

const Home = () => {
  const { home: { title, subtitle, cv } } = wordings;

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-text'>
          <h2 className='home-name'>{title}</h2>
          <h4 className='home-position'>{subtitle}</h4>
          <Link
            href={CV_URL}
            rel='noopener noreferrer'
            aria-label='Go to curriculum'
            target='_blank'
            className='home-curriculum'
          >
            {cv}
          </Link>
        </div>
        <div className='home-img'>
          <Image
            fill
            priority
            decoding='async'
            alt='Phone personal'
            src='/assets/img/user.png'
            className='home-personal-img'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
