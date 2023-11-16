import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const HomeCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img className='cursor-pointer' role='presentation' src={item.image} alt={item.alt} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      disableButtonsControls
      autoPlayInterval={1000}
      infinite
      disableDotsControls
    />
  );
};

export default HomeCarousel;
