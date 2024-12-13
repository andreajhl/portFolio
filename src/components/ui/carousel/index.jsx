import Image from 'next/image';
import { Carousel as CarouselBoot } from 'react-bootstrap';
import './styles.scss';

const Carousel = ({ slides }) => (
  <CarouselBoot
    controls={false}
    indicators={true}
    className='carousel'
  >
    {
      slides.map((slide, index) => (
        <CarouselBoot.Item key={index} className='carousel__item'>
          <Image
            className='carousel__item-img'
            src={slide.url}
            alt={slide.alt}
            fill
          />
        </CarouselBoot.Item>
      ))
    }
  </CarouselBoot>
);

export default Carousel;
                                                                             