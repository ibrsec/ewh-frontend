"use client";

import { toastWarnNotify } from "@/helpers/toastify";
import useTeamServices from "@/lib/services/useTeamServices";
import { useState } from "react";

const NewEkipMember = () => {
    const { createNewTeamMember } = useTeamServices(); 
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    description: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value });
    const { name, value, files } = e.target;
    setInputs({
      ...inputs,
      [name]: files ? files[0] : value, // Dosya seçildiyse `files` kullanılır
    });
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

    const formPayload = new FormData();
    for (let key in inputs) {
      formPayload.append(key, inputs[key]);
    }

    createNewTeamMember(inputs);
 
    
    //reset input fields
    setInputs({
        fullName: "",
        email: "",
        description: "",
        imageFile: null,
    });
  };

  //! sinirlar yazilacak
  //? gecince max asildi vs
  //? sinir uyarilar eklenecek
  //*ok api yazilacak uygulanacak - multipart - axiosToken

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
          placeholder="Team member description max: 300*"
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
