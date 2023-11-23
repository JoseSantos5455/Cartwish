import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../State/Auth/Action';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const {auth} = useSelector(store=>store)
const jwt = localStorage.getItem("jwt")


useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }
},[jwt,auth.jwt])


  const handleSubmit=(event)=>{
    event.preventDefault()

    const data= new FormData(event.currentTarget);

    const userData={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      password:data.get("password"),
    }

    console.log(userData)

  }
  return (
    <div>
      <>
  {/* Container */}
  <div className="container mx-auto">
    <div className="flex justify-center px-6 py-12 bg-stone-50">
      {/* Row */}
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        {/* Col */}
        <div
          className="w-full h-auto  hidden lg:block lg:w-8/12 bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              'url("/public/images/signup.jpg")'
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
            
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-gray-950 rounded-full hover:bg-orange-500 focus:outline-none focus:shadow-outline"
                type="submit"
              >
               Signup  <i className="fa-solid fa-user-plus pl-1"></i>
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/login"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default SignupForm;
