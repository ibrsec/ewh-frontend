"use client";

import Banner from "@/components/banner/Banner";
import { passwordValidation } from "@/helpers/passwordValidation";
import { toastWarnNotify } from "@/helpers/toastify";
import useAuthServices from "@/lib/services/useAuthServices";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const LoginAdmin = () => {
  const { loginApi } = useAuthServices();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [passEye, setPassEye] = useState(false); //password visibility state
  const [passError, setPassError] = useState(""); //password warning state


  //password type check use effect
  useEffect(() => {
    if (inputs.password) passwordValidation(inputs.password, setPassError);
  }, [inputs]);
  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value });
  }

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
console.log('inputs', inputs)
    //check if fields are entered
    if (!inputs.username || !inputs.password) {
      toastWarnNotify("Please enter a username and a password!");
      return;
    }

    //check any password type check error is occured!
    if (passError) {
      toastWarnNotify("Invalid password type!");
      return;
    }

    //make the login request with the credentials to the backend
    loginApi(inputs);
    //navigating to the home page is happening in the login api request function

    //reset input fields
    setInputs({
      username: "",
      password: "",
    });
  };

  return (
    <div className=" mb-16">
      <Banner path="/images/blog.jpg" title="Admin Login" />
      <div className="flex justify-center  min-h-[300px]   ">
        <div className=" rounded-lg shadow-xl border border-dark-red shadow-dark-red py-10 px-5  w-[370px]  ">
          <form className=" w-full " onSubmit={handleSubmit}>
            <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8">
              Admin Login!
            </h3>

            <div className="mb-5">
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
                required={true}
                name="username"
                placeholder="Username*"
                value={inputs.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5 relative">
              <input
                type={passEye ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
                required={true}
                name="password"
                placeholder="Password*"
                value={inputs.password}
                onChange={handleChange}
              />
              {passError && (
                <span className=" px-2 text-xs text-white bg-red rounded-xl font-semibold absolute start-0 -bottom-5 ">
                  {passError}
                </span>
              )}
              <div className="absolute end-2 bottom-3">
                <FaEye
                  color="black"
                  size="20"
                  onClick={() => setPassEye(!passEye)}
                  className="cursor-pointer hover:opacity-50 transition-opacity"
                />
              </div>
            </div>

            <button type="submit" className="primary-button-main w-full mt-8">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
