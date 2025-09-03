import React, { useContext, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { createUserWithPassword } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirm_password.value;
    createUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center bg-green-950 h-[80vh]">
      <div className="text-white bg-white max-w-lg p-3 rounded">
        <h2 className="text-green-800 font-bold text-2xl text-center mb-4">
          Register
        </h2>
        <form onSubmit={handleRegisterForm} className="space-y-4">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
            required
            className="w-full border-2 border-green-800 p-3 rounded-2xl text-black focus:outline-green-800"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            required
            className="w-full border-2 border-green-800 p-3 rounded-2xl text-black focus:outline-green-800"
          />
          <div className="relative flex items-center">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id=""
              placeholder="Enter password"
              required
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
          <div className="relative flex items-center">
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirm_password"
              id=""
              placeholder="Confirm password"
              required
              className="w-full border-2 border-green-800 p-3 rounded-2xl text-black focus:outline-green-800"
            />
            {showConfirmPass ? (
              <FaEyeSlash
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="text-black absolute right-3 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="text-black absolute right-3 cursor-pointer"
              />
            )}
          </div>
          <div className="flex justify-between">
            <div>
              <input
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
              />
              <label htmlFor="termsAndConditions">
                {" "}
                <span className="text-green-800">I agree to the </span>
                <Link to={"/termsandconditions"} className="text-cyan-400">
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 w-full p-3 rounded-2xl flex justify-center items-center cursor-pointer hover:bg-green-800 mb-3"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center items-center gap-3">
          <hr className="border-gray-400 w-1/4" />
          <span className="text-green-700">Or continue with</span>
          <hr className="border-gray-400 w-1/4" />
        </div>
        <div className="mt-2">
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center ">
            Register with Facebook <FaFacebook />
          </button>
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center">
            Register with Google <FaGoogle />
          </button>
          <button className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center">
            Register with Github <FaGithub />
          </button>
        </div>
        <div className="text-green-600 flex gap-2 justify-center">
          <p>Already Have an Account?</p>
          <Link
            to={"/login"}
            className="text-green-700 font-bold hover:text-green-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
