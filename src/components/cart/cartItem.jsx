import { useState } from 'react';

const CartItem = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Nike Air Max 2019', price: 259.0, quantity: 2 },
    { id: 2, name: 'Nike Air Max 2019', price: 259.0, quantity: 2 },
  ]);

  
//   const handleQuantityChange = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };


  const handleQuantityChange = (id, newQuantity) => {
    // Ensure new quantity is at least 1
    newQuantity = Math.max(1, newQuantity);
    setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
  }


  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 4.99; // Assuming a fixed shipping cost
    return subtotal + shipping;
  };

  return (
    <div className="h-screen bg-gray-100 p-10">
      {/* <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
      <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src="https://via.placeholder.com/80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                  <div className="flex items-center border-gray-100 ml-6">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="cursor-pointer rounded-l bg-gray-950 py-1 text-white px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                    >
                      {' '}
                      -{' '}
                    </button>
                    <span className="h-8 w-8 flex items-center justify-center border bg-white text-center text-xs">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="cursor-pointer rounded-r bg-gray-950 text-white py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                    >
                      {' '}
                      +{' '}
                    </button>
                  </div>
                
                  <div className="flex items-center space-x-4">
  {/* <p className="text-sm">{item.price * item.quantity} ₭</p> */}
  <button onClick={() => handleRemoveItem(item.id)} className='bg-gray-950 hover:bg-orange-500 text-white rounded-3xl px-6 py-2'>Remove</button>
</div>


                  
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* checkout */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{calculateSubtotal()} ₭</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{calculateTotal()} ₭</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-gray-950 py-1.5 font-medium text-blue-50 hover:bg-orange-600">
          <i className="fa-solid fa-credit-card pr-2"></i> Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
