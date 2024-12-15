import Image from 'next/image';
import { Carousel as CarouselBoot } from 'react-bootstrap';
import './styles.scss';

const Carousel = ({ slides }) => (
  <CarouselBoot
    indicators
    controls={false}
    className='carousel'
  >
    {slides.map((slide, index) => (
      <CarouselBoot.Item key={index} className='carousel-item'>
        <Image
          fill
          src={slide.url}
          priority={!index}
          className='carousel-img'
          alt={slide.alt || `Slide ${index + 1}`}
        />
      </CarouselBoot.Item>
    ))}
  </CarouselBoot>
);

export default Carousel;
                                                                             