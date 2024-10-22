"use client";

import SpinnerOne from "@/components/spinner/SpinnerOne";
import { toastWarnNotify } from "@/helpers/toastify";
import useTeamServices from "@/lib/services/useTeamServices";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewEkipMember = () => {
  const loading = useSelector((state) => state.team.loading);
  const { createNewTeamMember } = useTeamServices();
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    description: "",
    order: "",
    imageFile: null,
  });

  const handleChange = (e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value });
    const { name, value, files } = e.target;
    setInputs({
      ...inputs,
      [name]: files ? files[0] : value, // Dosya seçildiyse `files` kullanılır
    });
  };

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
    //check if fields are entered
    if (
      !inputs.fullName ||
      !inputs.email ||
      !inputs.description ||
      !inputs.imageFile ||
      !inputs.order
    ) {
      toastWarnNotify("All fields are required!");
      return;
    }
    console.log(inputs);

    //length restricts!
    if (inputs.fullName.length > 40) {
      console.log("girdi");
      toastWarnNotify("Full Name 40 karakteri geçemez!");
      return;
      console.log("return sonrasi");
    }
    if (inputs.email.length > 100) {
      toastWarnNotify("Email 100 karakteri geçemez!");
      return;
    }
    if (inputs.description.length > 300) {
      toastWarnNotify("Description 300 karakteri geçemez!");
      return;
    }

    // const formPayload = new FormData();
    // for (let key in inputs) {
    //   formPayload.append(key, inputs[key]);
    // }

    createNewTeamMember(inputs);

    //reset input fields
    setInputs({
      fullName: "",
      email: "",
      description: "",
      order: "",
      imageFile: null,
    });
  };

  //! sinirlar yazilacak
  //? gecince max asildi vs
  //? sinir uyarilar eklenecek
  //*ok api yazilacak uygulanacak - multipart - axiosToken

  return (
    <form
      className=" w-full rounded-lg shadow-xl border border-dark-red shadow-dark-red pt-4 pb-12 px-5 mt-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8 mt-10 ">
        Create new team member!
      </h3>

      <div className="mb-5">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="fullName"
          placeholder="Full Name*  - max 40 char length"
          value={inputs.fullName}
          onChange={handleChange}
        />
        {inputs.fullName.length > 40 && (
          <span className="px-2 text-xs text-red-500">
            Full Name 40 karakteri geçemez!
          </span>
        )}
      </div>
      <div className="mb-5">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="email"
          placeholder="Email* - max 100 char length"
          value={inputs.email}
          onChange={handleChange}
        />

        {inputs.email.length > 100 && (
          <span className="px-2 text-xs text-red-500">
            Email 100 karakteri geçemez!
          </span>
        )}
      </div>

      <div className="mb-12">
        <label htmlFor="imageFile">Image File:</label>
        <input
          type="file"
          id="imageFile"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="imageFile"
          placeholder="Image File*"
          onChange={handleChange}
        />
        <div className="">Image - max 5 MB size limit</div>
        <div className="">
          - cozunurluk (oran olarak yaklasik): 1080-768, 1920- 1080 (cok oneli
          degil onizleme var)(genislik daha buyuk olacak)
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="order">Order:</label>
        <input
          type="number"
          id="order"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="order"
          placeholder="Order* - manual order as number"
          value={inputs.order}
          onChange={handleChange}
        />

        <div className="">Manual order - number - example: 5!</div>
      </div>

      <div className="mb-5">
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          className={
            "bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 min-h-[170px] "
          }
          required={true}
          name="description"
          placeholder="Team member description* - max 300 char length"
          value={inputs.description}
          onChange={handleChange}
        >
          Team member description max: 300
        </textarea>
        {inputs.description.length > 300 && (
          <span className="px-2 text-xs text-red-500">
            Description 300 karakteri geçemez!
          </span>
        )}
      </div>

      <button
        type="submit"
        className="primary-button-main w-full mt-8 text-lg"
        disabled={loading}
      >
        {loading ? <SpinnerOne /> : "Submit"}
      </button>
    </form>
  );
};

export default NewEkipMember;
