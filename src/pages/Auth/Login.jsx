import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
import loginImg from "./../../assets/login-bg.jpg";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import PasswordResetModal from "../../components/PasswordResetModal/PasswordResetModal";

const Login = () => {
  const { signIn, loginWithGoogle } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // when user login navigate the path
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //reset error
    setLoginError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          toast.success("Login Successfully");

          // navigate user
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  // signIn with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser.emailVerified) {
          toast.success("Login Successfully");

          // navigate user
          navigate(location?.state || "/");
        } else {
          toast.loading("Please verify your email address");
        }
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Real Estate || Login</title>
      </Helmet>
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
            <form onSubmit={handleLogin}>
              <div>
                <label className="mb-1 text-sm">Email</label> <br />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs"
                />
              </div>
              <div className="mt-2 relative md:inline-block min-w-0 md:w-2/3">
                <label className="mb-1 text-sm">Password</label> <br />
                <input
                  required
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
                {/* forget password */}
                <PasswordResetModal />
              </div>
              <div className="mt-5 md:w-2/3">
                <input
                  type="submit"
                  value="Login"
                  className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl"
                />
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 mt-2 text-sm">
                {loginError === "Firebase: Error (auth/invalid-credential)."
                  ? "Email or password might be wrong"
                  : loginError}
              </p>
            )}
            <div className="flex items-center gap-3 my-5 md:w-2/3">
              <span className="border w-full block"></span>
              <p>or</p>
              <span className="border w-full block"></span>
            </div>
            <button
              className="border py-2 rounded flex justify-center items-center gap-3 md:w-2/3 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              onMouseEnter={() => setIsHovered(true)} // Event handler for hover
              onMouseLeave={() => setIsHovered(false)} // Event handler for hover
              onClick={handleLoginWithGoogle}
            >
              {isHovered ? (
                <FaGoogle className="text-xl" />
              ) : (
                <FcGoogle className="text-xl" />
              )}
              Continue with Google
            </button>
            <p className="mt-10">
              Need an account ?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
