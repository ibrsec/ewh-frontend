import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { MdOutlineEditCalendar } from "react-icons/md";
 
import { toastWarnNotify } from "@/helpers/toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SpinnerOne from "@/components/spinner/SpinnerOne"; 
import useEmailServices from "@/lib/services/useEmailServices";
import { emailValidation } from "@/helpers/emailValidation";

const EmailEditModal = ({ open, setOpen, choosedEmail }) => {
  const { updateEmail } = useEmailServices();
  const loading = useSelector((state) => state.email.loading);

  console.log("choosedEmail", choosedEmail);
  const [inputs, setInputs] = useState({
    email: choosedEmail?.email  
  });
  useEffect(() => {
    setInputs({
      email: choosedEmail?.email 
    });
 
  }, [choosedEmail, open]);
 

  

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 

   
    //check if fields are entered
    if (
      !inputs.email 
    ) {
      toastWarnNotify("All fields are required!");
      return;
    }
    console.log(inputs);
 //length restricts!
 if (inputs?.email?.length > 100) { 
  toastWarnNotify("email 100 karakteri geçemez!");
  return; 
}
if (!emailValidation(inputs.email)) {
  toastWarnNotify("Lutfen gecerli bir email giriniz!");
  return;
} 


    updateEmail(choosedEmail?._id, inputs);

    //reset input fields
    setInputs({
      email: ""
    }); 

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95  border border-dark-red shadow-dark-red"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-transparent sm:mx-0 sm:h-10 sm:w-10">
                  <MdOutlineEditCalendar
                    className="text-dark-red"
                    size="45px"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold  leading-6 text-dark-red"
                  >
                    Update {choosedEmail?.email} 
                  </DialogTitle>
                  <div className="mt-2">
                    <form
                      className="my-5 flex  justify-center flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
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
                        {inputs?.email?.length > 100 && (
                          <span className="px-2 text-xs text-red-500">
                            Email 100 karakteri geçemez!
                          </span>
                        )}
                      </div>

                      <div className="mt-3 w-9/12 flex items-center gap-2">
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setOpen(false)}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red active:bg-orange hover:text-gray-100 active:text-gray-100 sm:mt-0 sm:w-auto transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          className="text-white bg-dark-red hover:bg-red active:bg-orange transition-all py-2 px-16 w-full text-sm font-semibold rounded-lg"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? <SpinnerOne /> : "Update"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EmailEditModal;
