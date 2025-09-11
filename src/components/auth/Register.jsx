import React, { useContext, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { createUserWithPassword, signInWithGoggle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  let provider = new GoogleAuthProvider();
  // sign in with google
  const handleGoogleRegister = () => {
    signInWithGoggle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirm_password.value;
    let photoURL = e.target.photoURL.value;
    let termsAndConditions = e.target.termsAndConditions.checked;

    setErrorMsg("");
    setSuccessMsg("");
    if (password !== confirmPassword) {
      setErrorMsg("Password not matched");
      return;
    }
    if (!passwordRegex.test(confirmPassword)) {
      setErrorMsg(
        "Password must be atleast 6charecter, one uppercase,one lowercase,one number and one special charecter"
      );
      return;
    }
    if (!termsAndConditions) {
      setErrorMsg("You Need to accept Our Terms and Conditions");
      return;
    }

    createUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        updateUserProfile(name, photoURL)
          .then(() => {
            sendEmailVerification(user).then(() => {
              console.log("verification email sended");
              Swal.fire({
                title: "Register Succesful.Verify Your Email!",
                text: "A Verification Email sent!",
                icon: "success",
              });
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Register Succesful!",
              text: "There was an issue sending verification email.  !",
              icon: "info",
            });
          });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
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
            type="text"
            name="photoURL"
            id=""
            placeholder="Photo URL"
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
          {successMsg && (
            <p className="bg-green-400 p-1 rounded text-center">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="bg-red-300 p-1 rounded text-center">{errorMsg}</p>
          )}
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
          <button
            onClick={handleGoogleRegister}
            className="bg-green-900 w-full py-2 rounded my-1 hover:bg-green-800 cursor-pointer flex gap-3 items-center justify-center"
          >
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
