
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Mens_kurta } from "../../assets/Mens_kurta";
import ProductCard from '../Product/ProductCard';
import { useNavigate } from 'react-router-dom';
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
   
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
   
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
const navigate = useNavigate();
  const handleAddToCart=()=>{

    navigate("/cart")
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

<section className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 px-4 pt-10'>
        {/* Image gallery */}
        <div className="flex flex-col items-center ">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] ">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap space-x-5 space-y-5 justify-center">
          {product.images.map((item)=>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] ">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>)}   
           
          </div>
          
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-5 sm:px-6 lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-4">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h2>
            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">{product.name}</h1>

          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

<div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
<p className='font-semibold'>$199</p>
<p className='opacity-50 line-through'>$211</p>
<p className='text-green-6000 font-semibold'>5% off</p>
</div>
            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div> */}

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a> */}
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-orange-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? ' border-orange-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
              onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparen bg-gray-950 px-8 py-3 text-base font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
             <i className="fa-solid fa-bag-shopping pr-3"></i>   ADD TO CART 
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
</section>

{/* rating and reviews */}

 <section className='p-10 pb-20'>
  <h1 className='font-bold text-xl lg:text-3xl pb-4 text-center'>Recent Review & Rating</h1>
  <div className="flex flex-col lg:flex-row  justify-center lg:space-x-8 mt-6">


  {/* Rating Stats Bars */}
  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
   {/*        <!-- Component: Detailed Basic --> */}
   <div className="flex flex-col">
        {/*          <!-- Title --> */}
        <div className="flex items-center justify-between">
      {/* Heading on the left side */}
      <h1 className="text-xl font-semibold">Customer reviews</h1>

      {/* Star rating on the right side */}
      <span className="flex items-center gap-4 rounded text-sm text-slate-500">
        <span className="flex gap-1 text-amber-400">
          {/* Replace with your star icons */}
         


        </span>
        <span>4.1 out 5</span>
      </span>
    </div>
        {/*          <!-- Helper text --> */}
        <span className="text-xs leading-6 text-slate-400">
          based on 147 user ratings
        </span>
        {/*          <!-- Detailed rating --> */}
        <span className="flex w-full flex-col gap-4 pt-6">
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              for="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              5 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="75"
              className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">112 </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              for="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              4 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="28"
              className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">17 </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              for="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              3 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="18"
              className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">12 </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              for="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              2 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="8"
              className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">2 </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              for="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs text-slate-500"
            >
              1 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="10"
              className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">4 </span>
          </span>
        </span>
      </div>
      {/*        <!-- End Detailed Basic --> */}
  </div>

  {/* User Reviews */}

  <div className="w-full lg:w-1/2 ">
    <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
    <div className="border p-4 rounded-md">
      <div className="flex items-center mb-2">
        <img
          src="user-avatar.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-semibold">John Doe</span>
        <div className="flex items-center ml-auto space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
    <svg
      key={star}
      className="w-4 h-4 text-yellow-500 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
    </svg>
   ))}
</div>

      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      </p>
    </div>
    {/* Add more review cards as needed */}
   </div>
  </div>
</section>

<section className=''>
<h1 className='font-bold text-xl lg:text-3xl pb-4 text-center'>Similar Products</h1>

<div className=' flex flex-wrap'>
{Mens_kurta.map((item) => (
                    <ProductCard product={item} />
                  ))}

</div>

</section>

      </div>
    </div>
  )
}
