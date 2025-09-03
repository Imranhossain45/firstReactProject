import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInWithEmailPass } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center bg-green-950 h-[80vh]">
      <div className="text-white bg-white max-w-sm p-3 rounded">
        <h2 className="text-green-800 font-bold text-2xl text-center mb-4">
          Login
        </h2>
        <form onSubmit={handleLoginForm} className="space-y-4">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            className="w-full border-2 border-green-800 p-3 rounded-2xl text-black focus:outline-green-800"
          />
          <div className="flex items-center relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id=""
              placeholder="Enter password"
              className="w-full border-2 border-green-800 p-3 rounded-2xl text-black focus:outline-green-800"
            />
            {showPass ? (
              <FaEyeSlash
                onClick={() => setShowPass(!showPass)}
                className="text-black absolute right-3 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="text-black absolute right-3 cursor-pointer"
              />
            )}
          </div>
          <div className="flex justify-between">
            <Link className="text-cyan-400 hover:text-cyan-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-green-600 w-full p-3 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-green-800 mb-3"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center gap-3">
          <hr className="border-gray-400 w-1/4" />
          <span className="text-green-700">Or continue with</span>
          <hr className="border-gray-400 w-1/4" />
        </div>
        <div className="mt-2">
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center ">
            Login with Facebook <FaFacebook />
          </button>
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center">
            Login with Google <FaGoogle />
          </button>
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center">
            Login with Github <FaGithub />
          </button>
        </div>
        <div className="text-green-600 flex gap-2 justify-center">
          <p>Don't Have an Account?</p>
          <Link
            to={"/register"}
            className="text-green-700 font-bold hover:text-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
