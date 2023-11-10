
import ProductCardCarousel from "./ProductCardCarousel"

const ProductCarosel = () => {
  return (
    <div>
    <ProductCardCarousel sectionName={"Top Deals On Smart Watches"}/>
     <ProductCardCarousel sectionName={"Top Deals On Smart Phones"}/>
     <ProductCardCarousel sectionName={"Top Deals On Men's Kurta"}/>
     <ProductCardCarousel sectionName={"Top Deals On Women's Saree"}/>
     <ProductCardCarousel sectionName={"Top Deals On Women's Dresses"}/>
    </div>
  )
}

export default ProductCarosel;
