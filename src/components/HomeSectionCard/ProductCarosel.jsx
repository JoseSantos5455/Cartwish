
// import { data } from "autoprefixer";
import { SmartWatch } from "../../assets/SmartWatchesData";
import ProductCardCarousel from "./ProductCardCarousel";
import { Mens_kurta } from "../../assets/Mens_kurta";
import { Phone } from "../../assets/Phone";
import { Saree } from "../../assets/Saree";
import { Lehenga } from "../../assets/Lehnga";

const ProductCarosel = () => {
  return (
    <div>
    <ProductCardCarousel sectionName={"Top Deals On Smart Watches"} data={SmartWatch}/>
     <ProductCardCarousel sectionName={"Top Deals On Smart Phones"} data={Phone}/>
     <ProductCardCarousel sectionName={"Top Deals On Men's Kurta"} data={Mens_kurta}/>
     <ProductCardCarousel sectionName={"Top Deals On Women's Saree"} data={Saree}/>
     <ProductCardCarousel sectionName={"Top Deals On Women's Dresses"} data={Lehenga}/>
    </div>
  )
}

export default ProductCarosel;
