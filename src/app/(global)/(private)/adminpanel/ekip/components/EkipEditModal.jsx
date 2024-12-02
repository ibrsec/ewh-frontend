import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { MdOutlineEditCalendar } from "react-icons/md";

import useTeamServices from "@/lib/services/useTeamServices";
import { toastWarnNotify } from "@/helpers/toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SpinnerOne from "@/components/spinner/SpinnerOne";

const EkipEditModal = ({ open, setOpen, choosedMember }) => {
  const { updateTeamMember } = useTeamServices();
  const loading = useSelector((state) => state.team.loading);

  // console.log("choosedMember", choosedMember);
  const [inputs, setInputs] = useState({
    fullName: choosedMember?.fullName || "",
    email: choosedMember?.email || "",
    description: choosedMember?.description || "",
    order: choosedMember?.order || "",
    imageFile: null,
  });
  useEffect(() => {
    setInputs({
      fullName: choosedMember?.fullName || "",
      email: choosedMember?.email || "",
      description: choosedMember?.description || "",
      order: choosedMember?.order || "",
      imageFile: null,
    });
  }, [choosedMember, open]);

  const handleChange = (e) => {
    // setInputs({...inputs, [e.target.name]: e.target.value });
    const { name, value, files } = e.target;
    setInputs({
      ...inputs,
      [name]: files ? files[0] : value, // Dosya seçildiyse `files` kullanılır
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(inputs);
    //check if fields are entered
    if (
      !inputs.fullName ||
      !inputs.email ||
      !inputs.description ||
      !inputs.order
    ) {
      toastWarnNotify("All fields are required - expect imageFile!");
      return;
    }

    //length restricts!
    if (inputs.fullName.length > 40) {
      toastWarnNotify("Full Name 40 karakteri geçemez!");
      return;
    }
    if (inputs.email.length > 100) {
      toastWarnNotify("Email 100 karakteri geçemez!");
      return;
    }
    if (inputs.description.length > 300) {
      toastWarnNotify("Description 300 karakteri geçemez!");
      return;
    }

    const formPayload = new FormData();
    for (let key in inputs) {
      formPayload.append(key, inputs[key]);
    }

    updateTeamMember(choosedMember?._id, formPayload);

    //reset input fields
    setInputs({
      fullName: "",
      email: "",
      description: "",
      order: "",
      imageFile: null,
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
                    Update {choosedMember?.fullName} team member
                  </DialogTitle>
                  <div className="mt-2">
                    <form
                      className="my-5 flex  justify-center flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
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
                          required={false}
                          name="imageFile"
                          placeholder="Image File*"
                          onChange={handleChange}
                        />
                        <div className="">Image - max 5 MB size limit</div>
                        <div className="">
                          Image is not required for update!
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

                        <div className="">
                          Manual order - number - example: 5!
                        </div>
                      </div>

                      <div className="mb-5">
                        <label htmlFor="description">Description:</label>
                        <span className="px-2 text-xs ">
                          yeni satir icin ** kullaniniz.
                        </span>
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

export default EkipEditModal;
