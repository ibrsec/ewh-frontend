"use client";

import { useState } from "react";

const NewEkipMember = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    description: "",
    imageFile: "",
  });

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value });
  }

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
console.log('inputs', inputs)
    //check if fields are entered
    if (!inputs.fullName || !inputs.email || !inputs.description || !inputs.imageFile) {
      toastWarnNotify("All fields are required!");
      return;
    }
    console.log(inputs);
 
    //make the login request with the credentials to the backend
    // loginApi(inputs);
    //navigating to the home page is happening in the login api request function

    //reset input fields
    // setInputs({
    //     fullName: "",
    //     email: "",
    //     description: "",
    //     imageFile: "",
    // });
  };

  //! sinirlar yazilacak
  //? gecince max asildi vs
  //? uyarilar eklenecek
  //? api yazilacak uygulanacak

  return (
    <form className=" w-full " onSubmit={handleSubmit}>
      <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8 mt-10">
        Create new team member!
      </h3>

      <div className="mb-5">
        <input
          type="text"
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="fullName"
          placeholder="Full Name*"
          value={inputs.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="email"
          placeholder="Email*"
          value={inputs.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-5">
        <input
          type="file"
          id="imageFile"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="imageFile"
          placeholder="Image File*"
          value={inputs.imageFile}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <textarea
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="description"
          placeholder="Description*"
          value={inputs.description}
          onChange={handleChange}
        >Team member description max: 300</textarea>
      </div>

      <button type="submit" className="primary-button-main w-full mt-8">
        Submit
      </button>
    </form>
  );
};

export default NewEkipMember;
