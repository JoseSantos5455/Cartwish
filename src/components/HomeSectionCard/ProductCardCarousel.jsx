
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import { SmartWatch } from '../../assets/SmartWatchesData';
// import './App.css';

export default function ProductCardCarousel({sectionName}) {
 
const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
};
const items = SmartWatch.slice(0, 9).map((item)=><HomeSectionCard product={item}/>)
    return (
    <div>
<h1 data-aos="fade-up"  data-aos-duration="1000" className="text-5xsm lg:text-5xl sm:text-2xl p-4 lg:p-10 text-center text-gray-900 relative">
  <b>{sectionName}</b>
  <span className="underline"></span>
</h1>


       <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
  
      disableButtonsControls
      autoPlayInterval={1000}
      // infinite
      disableDotsControls
      Swipe to slide
    />

    <button>

    </button>
    </div>
  )
}
