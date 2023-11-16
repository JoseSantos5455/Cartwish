// import { LensBlurRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
const orderStatus = [
  { lable: "On The Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const Order = () => {
  return (
   
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg ">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Oder Status</h1>
              {orderStatus.map((option) => (
                <div className="flex item-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <lebel
                    className="ml-3 text-sm text-gray-600 "
                    htmlFor={option.value}>{option.lable}</lebel>
                </div>
              ))}
              
            </div>
          </div>
        </Grid>
        <Grid item xs={9} >

<div className="space-y-8">
{[1,1,1,1,1].map((item)=><OrderCard/>)}
</div>
        
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
