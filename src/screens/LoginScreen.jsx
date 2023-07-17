import React from "react";

function LoginScreen(props) {
  console.log(props)
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 h-screen w-screen  ">
      <div className=" bg-black flex items-center justify-center">
        <div className=" justify-center items-center flex flex-col hover:scale-125 transform transition duration-300 ease-in cursor-pointer">
          <img
            className=" h-40 w-40 "
            src="https://img.icons8.com/glyph-neue/200/f7ab0a/maple-leaf.png"
            alt="logo"
          />
          <h1 className=" text-white font-bold text-6xl">
            Socials<span className="text-[#f7ab0a]">App</span>.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-br from-yellow-300 to-purple-300">
        <div className=" w-full max-w-xl p-8 py-12 bg-white rounded-2xl">
          <h1 className=" font-bold text-2xl text-center">
            Socials<span className="text-[#f7ab0a]">App</span>.
          </h1>
          <div className=" flex justify-between space-x-4 py-4">
            <button onClick={()=> props.login()} className=" rounded-lg bg-white shadow-md hover:bg-lime-200 border border-gray-200 w-full lg:w-1/2 flex p-2 px-6">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />{" "}
              Sign In with Google
            </button>
            <button className=" rounded-lg bg-white shadow-md hover:bg-lime-200 border border-gray-200 w-full lg:w-1/2 flex p-2 px-6">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency/48/facebook-new.png"
                alt="facebook-new"
              />{" "}
              Sign In with Facebook
            </button>
          </div>
          <hr className=" my-5" />
          <label className=" pl-1 text-sm font-light tracking-wide">Email</label>
          <input className=" bg-gray-100 w-full py-2 px-4 rounded-md mb-4" />
          <label className=" pl-1 text-sm font-light tracking-wide ">Password</label>
          <input type="password" className=" bg-gray-100 w-full py-2 px-4 rounded-md mb-4" />

        <button className=" w-full mt-4 py-2  bg-gradient-to-r from-yellow-500 to-purple-500 text-white rounded-md text-2xl font-semibold ">Sign In</button>


        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
