import registerImg from "./../../assets/register-bg.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updatedUserProfile } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // verify some authentication
    if (password.length < 6) {
      return setRegisterError("Minimum 6 characters for password");
    } else if (!/[A-Z]/.test(password)) {
      return setRegisterError("Include at least one uppercase character");
    } else if (!/[a-z]/.test(password)) {
      return setRegisterError("Include at least one lowercase character");
    }

    //reset error
    setRegisterError("");

    //create user
    createUser(email, password)
      .then((result) => {
        // update profile
        updatedUserProfile(name, photo)
          .then(() => {
            //<-!---- successful message
            const loggedUser = result.user;
            if (loggedUser) {
              toast.success("Successfully Create Account");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        const errMessage = error.message;
        if (errMessage === "Firebase: Error (auth/email-already-in-use).") {
          setRegisterError("Already have an account please login");
        } else {
          toast.error("Something is wrong try later");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Real Estate || Register</title>
      </Helmet>
      <div className="grid md:grid-cols-5 font-roboto">
        <div className="h-screen w-full flex items-center md:col-span-2 px-8 sm:px-10 md:px-0 md:ml-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold">
              SIGN UP
            </h2>
            <p className="w-11/12 md:w-9/12 text-gray-800 mb-6 text-sm">
              welcome to the smart sight system for well deports register as a
              member to experience
            </p>
            <form onSubmit={handleRegister}>
              <div>
                <label className="mb-1 text-sm">Name</label> <br />
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs"
                />
              </div>
              <div className="my-2">
                <label className="mb-1 text-sm">Photo</label> <br />
                <input
                  required
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs"
                />
              </div>
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
                  className="absolute inset-y-0 right-0 top-5 flex items-center pr-3 cursor-pointer"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
              <div className="mt-5 md:w-2/3">
                <input
                  type="submit"
                  value="Create Account"
                  className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl"
                />
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 text-sm mt-1">{registerError}</p>
            )}
            <p className="mt-10">
              Already a member ?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
        <img
          src={registerImg}
          alt="register image"
          className=" bg-red-300 md:col-span-3 h-screen w-full object-cover hidden md:block"
        />
      </div>
    </>
  );
};

export default Register;
