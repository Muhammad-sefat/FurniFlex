import React, { useState } from "react";
import chair from "../assets/beautifull-chair.jpg";
import logo from "../assets/furni.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-5 md:flex justify-center items-center gap-5 w-full">
      <div className="md:w-[48%] bg-gray-200 flex items-center justify-center p-3 rounded">
        <div>
          <h2 className="text-2xl font-semibold text-left">Welcome Back !</h2>
          <p className="text-left my-1">
            Enter your Credentials to access your account
          </p>

          <div className="flex flex-col space-y-3">
            <div className="relative">
              <input
                className="p-3 outline-none rounded peer w-full border-2 border-gray-300"
                type="email"
                placeholder=" "
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute text-sm left-3 top-0 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-3 peer-focus:text-gray-500"
              >
                Email address
              </label>
            </div>
            <div className="relative">
              <input
                className="p-3 outline-none rounded peer w-full border-2 border-gray-300"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                id="password"
              />
              <label
                htmlFor="password"
                className="absolute text-sm left-3 top-0 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-3 peer-focus:text-gray-500"
              >
                Password
              </label>
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="text-left font-medium my-2">
              <input className="mr-2" type="checkbox" id="termsCheckbox" />
              <label htmlFor="termsCheckbox">
                I agree to the Terms & Policy
              </label>
            </div>

            <button className="p-3 rounded bg-black text-white font-medium">
              Signup
            </button>
          </div>
          <div className="flex items-center space-x-2 my-5">
            <hr className="w-full bg-slate-300 h-[.10rem]" />
            <p>or</p>
            <hr className="w-full bg-slate-300 h-[.10rem]" />
          </div>
          <div className="flex justify-between items-center my-2 gap-5">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border border-gray-500 rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border border-gray-500  rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Login with GitHub</p>
            </button>
          </div>
          <p className="my-5">
            Havent an Account ? please{" "}
            <Link to={"/signup"}>
              <span className="font-semibold underline">Signup</span>
            </Link>
          </p>
        </div>
      </div>
      <div
        className="md:w-[50%] flex justify-center items-center relative bg-center bg-cover h-[100vh]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${chair})`,
        }}
      >
        <div className="relative z-10 text-center p-6">
          <img className="w-[10%] mx-auto" src={logo} alt="" />
          <h1 className="text-xl md:text-4xl font-bold text-white">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
          <p className="text-white md:w-[70%] mx-auto mt-2">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
