
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';

export default function ProductCartCarousel() {
 
const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
};
const items = [1,1,1,1,].map((item)=><HomeSectionCard/>)
    return (
    <div>
    <h1 className="text-sm lg:text-5xl sm:text-2xl p-4 lg:p-8 text-center text-gray-900"><b>Top Deals on Electronics</b></h1>
       <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
    
      disableButtonsControls
      autoPlayInterval={1000}
      infinite
      disableDotsControls
      Swipe to slide
    />

    <button>

    </button>
    </div>
  )
}
