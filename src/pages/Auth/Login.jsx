import loginImg from "./../../assets/login-bg.jpg";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid md:grid-cols-5 font-roboto">
      <img
        src={loginImg}
        alt="Login Image"
        className=" bg-red-300 md:col-span-3 h-screen w-full object-cover hidden md:block"
      />
      <div className="h-screen w-full flex items-center md:col-span-2 px-8 sm:px-10 md:px-0 md:pl-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold text-blue-600">
            Welcome Back
          </h2>
          <p className="w-11/2 text-gray-800 mb-6 text-sm">
            Welcome back to Smart Sight System. Log in to continue your
            personalized experience and services.
          </p>
          <form>
            <div>
              <label className="mb-1 text-sm">Email</label> <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs"
              />
            </div>
            <div className="mt-2 relative md:inline-block min-w-0 md:w-2/3">
              <label className="mb-1 text-sm">Password</label> <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border px-4 py-2 rounded w-full placeholder:text-xs"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 top-0 flex items-center pr-3 cursor-pointer"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
              <p className="text-xs mt-2 text-[#696969]">
                <a href="#">Forgot password?</a>
              </p>
            </div>
            <div className="mt-5 md:w-2/3">
              <input
                type="submit"
                value="Login"
                className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl"
              />
            </div>
          </form>
          <div className="flex items-center gap-3 my-5 md:w-2/3">
            <span className="border w-full block"></span>
            <p>or</p>
            <span className="border w-full block"></span>
          </div>
          {/* <button className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl">
            Sign in with google
          </button> */}

          <p className="mt-10">
            Need an account ?{" "}
            <Link to="/register" className="text-blue-600 font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*

<h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold">
            Welcome Back
          </h2>
          <p className="w-11/12 text-gray-800 mb-6">
            Welcome back to Smart Sight System. Log in to continue your
            personalized experience and services.
          </p>

*/
