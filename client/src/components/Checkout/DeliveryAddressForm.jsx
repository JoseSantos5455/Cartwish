import React, { useState } from "react";

const DeliveryAddressForm = ({ onDelivery }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelivery = () => {
    onDelivery(formData);
  };

  return (
    <div className="w-full md:w-1/2 p-5 bg-white my-10 rounded-xl shadow-xl ">
      <h2 className="text-xl font-bold mb-4">Address Form</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-600"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md resize-none"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-600"
          >
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-600"
          >
            Pincode:
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
      </div>
      <button
        onClick={handleDelivery}
        className=" text-white px-4 py-2 rounded-md hover:bg-orange-500 bg-gray-950 w-full"
      >
        Delivery Here <i className="fa-solid fa-truck"></i>
      </button>
    </div>
  );
};

// Rest of the code remains the same

const AddressOutput = ({ deliveryAddresses, onDelete }) => {
  return (
    <div className="w-full md:w-1/2 p-5 bg-white my-10 mr-7 rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4">Delivery Addresses</h2>
      {deliveryAddresses.length > 0 ? (
        deliveryAddresses.map((address, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-semibold">Deliver to:</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>
              {address.city}, {address.state}, {address.country} -{" "}
              {address.pincode}
            </p>
            <button
              onClick={() => onDelete(index)}
              className="text-white px-4 py-2 mt-3 rounded-md hover:bg-red-500 bg-red-600"
            >
              Delete
            </button>
            <button className="text-white px-4 py-2 mt-3 rounded-md hover:bg-orange-500 bg-gray-950 ml-2">
              Delivery Here <i className="fa-solid fa-truck"></i>
            </button>
          </div>
        ))
      ) : (
        <p className="text-slate-300">
          No addresses provided{" "}
          <h1 className=" text-center text-9xl p-28 text-slate-300">?</h1>
        </p>
      )}
    </div>
  );
};


const DeliveryPage = () => {
  const [deliveryAddress, setDeliveryAddress] = useState([]);

  const handleDelivery = (formData) => {
    setDeliveryAddress((prevAddresses) => [...prevAddresses, formData]);
  };
  const handleDelete = (index) => {
    setDeliveryAddress((prevAddresses) =>
      prevAddresses.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <AddressOutput
        deliveryAddresses={deliveryAddress}
        onDelete={handleDelete}
      />
      <DeliveryAddressForm onDelivery={handleDelivery} />
    </div>
  );
};

// ... (export statement)

export default DeliveryPage;
