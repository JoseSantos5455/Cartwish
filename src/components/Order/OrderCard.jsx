
import { Grid } from '@mui/material'
const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
      <Grid item xs={3}>

      <div className='flex cursor-pointer'>
      <img className=' w-[5rem] h-[5rem] object-cover object-top ' src="https://rukminim1.flixcart.com/image/612/612/jsj90280/kurta/j/z/g/l-mtmkos0004-326-manthan-original-imafe35wha5ry36p.jpeg?q=70" alt="" />
      <div className="ml-5">
        <p className=''>Men</p>
        <p className='opacity-50 text-xs font-semibold'>Size : M</p>
        <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
      </div>
      </div>
      </Grid>

      <Grid item sx={2}>
      <p>$1099</p>
      </Grid>
      <Grid item sx={4}>
     {true && <div>
     <p>
        <span>
            Delivered On March 03
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

export default OrderCard
