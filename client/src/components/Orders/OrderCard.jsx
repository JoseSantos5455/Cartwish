
import { Grid } from '@mui/material'
const OrderCard = () => {
  return (
    <div className='bg-white p-3 rounded-xl'>
      <Grid container spacing={2} xs={{justifyContent:"space-between"}}>
      <Grid item xs={5}>

      <div className='flex cursor-pointer'>
      <img className=' w-[5rem] h-[5rem] object-cover object-top ' src="https://rukminim1.flixcart.com/image/612/612/jsj90280/kurta/j/z/g/l-mtmkos0004-326-manthan-original-imafe35wha5ry36p.jpeg?q=70" alt="" />
      <div className="ml-5">
        <p className=''>Men</p>
        <p className='opacity-50 text-xs font-semibold'>Size : M</p>
        <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
      </div>
      </div>
      </Grid>

      <Grid item xs={3}>
      <p>$1099</p>
      </Grid>
      <Grid item xs={3}>
     {true && <div>
     <p>
        <span>
           <b> Delivered On March 03</b>
        </span>

      </p>
      <p>
        Your Item Has Been Delivered
      </p>
      </div>}
      {false && <p>
        <span>
          Expected Delivery On March 03
        </span>
      </p>}
      </Grid>
        
      </Grid>
    </div>
  )
}

export default OrderCard;
