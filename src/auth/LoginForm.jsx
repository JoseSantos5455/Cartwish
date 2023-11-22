

const LoginForm = () => {
  return (
    <div>
      <>
  {/* Container */}
  <div className="container mx-auto bg-stone-100 py-12">
    <div className="flex justify-center">
      {/* Row */}
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        {/* Col */}
        <div
          className="w-full h-auto bg-white hidden lg:block lg:w-1/2 bg-cover rounded-l-xl"
          style={{
            backgroundImage:
              'url("/public/images/login.png")'
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-1/2 bg-white p-5 rounded-xl lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {/* <p className="text-xs italic text-red-500">
                Please choose a password.
              </p> */}
            </div>
            <div className="mb-4">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="checkbox_id"
              />
              <label className="text-sm" htmlFor="checkbox_id">
                Remember Me
              </label>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-gray-950 rounded-full hover:bg-orange-500 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login  <i className="fa-solid fa-right-to-bracket  pl-1"></i>
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/signup"
              >
                Don't have An Account?signUp
              </a>
            </div>
            <div className="text-center">
              <a
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="#"
              >
                Forgot Password?
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

export default LoginForm
