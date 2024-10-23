 

import SpinnerOne from "@/components/spinner/SpinnerOne";
import { toastWarnNotify } from "@/helpers/toastify"; 
import {  useState } from "react";
import { useSelector } from "react-redux"; 
import useEmailServices from "@/lib/services/useEmailServices";
import { emailValidation } from "@/helpers/emailValidation";

const NewEmail = () => {
  const loading = useSelector((state) => state.email.loading);
  const { createNewEmail } = useEmailServices();
  const [inputs, setInputs] = useState({
    email: ""
  }); 

 

  const handleChange = (e) => { 
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,  
    });
  };

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();

   
   


    console.log("inputs", inputs);
    //check if fields are entered
    if (
      !inputs.email  
    ) {
      toastWarnNotify("All fields are required!");
      return;
    }
    console.log(inputs);

    //length restricts!
    if (inputs.email.length > 100) { 
      toastWarnNotify("email 100 karakteri geçemez!");
      return; 
    }
    if (!emailValidation(inputs.email)) {
      toastWarnNotify("Lutfen gecerli bir email giriniz!");
      return;
    } 
 

    createNewEmail(inputs);

    //reset input fields
    setInputs({
      email: "" 
    }); 
  };
 
  return (
    <form
      className=" w-full rounded-lg shadow-xl border border-dark-red shadow-dark-red pt-4 pb-12 px-5 mt-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8 mt-10 ">
        Create new Email!
      </h3>

      <div className="mb-5">
        <label htmlFor="email">Email:</label> 
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="email"
          placeholder="Email*  - max 100 char length"
          value={inputs.email}
          onChange={handleChange}
          maxLength="100"
        />
        {inputs.email.length > 100 && (
          <span className="px-2 text-xs text-red-500">
            Email 100 karakteri geçemez!
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

export default NewEmail;
