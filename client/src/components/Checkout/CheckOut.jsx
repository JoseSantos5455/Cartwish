// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// // import { useLocation } from 'react-router-dom'; // Add this import
// // import DeliveryAddressForm from "./DeliveryAddressForm";
// // import OrderSummary from "./OrderSummary";

// const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

// export default function CheckOut() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   // const location = useLocation();
//   // const querySearch = new URLSearchParams(location.search)
//   // const step= querySearch.get("step")

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div className="px-10 lg:px-20 mt-10">
//       <Box sx={{ width: "100%" }}>
//         <Stepper activeStep={activeStep}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};

//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />
//             </Box>
            
// <div>
//   {step == 2? <DeliveryAddressForm/>:<OrderSummary/>}
// </div>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const CheckOut = () => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const initialStep = parseInt(querySearch.get("step")) || 1;

  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    // Update the query parameter when the currentStep changes
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('step', currentStep);
    window.history.replaceState({}, '', newUrl);
  }, [currentStep]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Info</h2>
            {/* Add your content for Step 1 */}
          </div>
        );
      case 2:
        return (
          <div>
           <DeliveryAddressForm/>
          </div>
        );
      case 3:
        return (
          <div>
            <OrderSummary/>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Confirmation</h2>
            {/* Add your content for Step 4 */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-4 sm:py-8 bg-stone-100'>
      <ol className="px-4 sm:px-8 md:px-16 lg:px-20 py-4 sm:py-8 rounded-xl shadow-lg flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base bg-white overflow-x-auto">
        <li className={`flex md:w-1/4 items-center ${currentStep >= 1 ? 'text-orange-500 dark:text-blue-500' : 'text-gray-300 dark:text-gray-700'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:mx-2 sm:mx-6 lg:mx-10 dark:after:border-gray-700`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-1 sm:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {currentStep >= 1 && <i className="fa-solid fa-circle-check pr-1 sm:pr-2"></i>}Login 
            {/* <span className="hidden sm:inline-flex sm:ms-1">Info</span> */}
          </span>
        </li>
        <li className={`flex md:w-1/4 items-center ${currentStep >= 2 ? 'text-orange-500 dark:text-blue-500' : 'text-gray-300 dark:text-gray-700'} after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:mx-1 sm:mx-2 lg:mx-6 dark:after:border-gray-700`}>
          <span className="flex items-center after:content-['/'] after:mx-1 sm:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {currentStep >= 2 && <i className="fa-solid fa-circle-check pr-1 sm:pr-2"></i>}
            Address
             {/* <span className="hidden sm:inline-flex sm:ms-1">Info</span> */}
          </span>
        </li>
        <li className={`flex md:w-1/4 items-center ${currentStep >= 3 ? 'text-orange-500 dark:text-blue-500' : 'text-gray-300 dark:text-gray-700'} after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:mx-1 sm:mx-2 lg:mx-6 dark:after:border-gray-700`}>
          <span className="flex items-center after:content-['/'] after:mx-1 sm:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {currentStep >= 3 && <i className="fa-solid fa-circle-check pr-1 sm:pr-2"></i>}
            Order
          </span>
        </li>
        <li className={`flex md:w-1/4 items-center ${currentStep >= 4 ? 'text-orange-500 dark:text-blue-500' : 'text-gray-300 dark:text-gray-700'}`}>
          <span className="mx-1 sm:mx-2">{currentStep >= 4 && <i className="fa-solid fa-circle-check pr-1 sm:pr-2"></i>}</span>
          Payment
        </li>
      </ol>

      {renderStepContent()}

      <div className="mt-4 flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 4}
          className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
