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
import useTrainingServices from "@/lib/services/useTrainingServices";
import PointsComp from "./PointsComp";

const TrainingEditModal = ({ open, setOpen, choosedTraining }) => {
  const { updateTrainingMember } = useTrainingServices();
  const loading = useSelector((state) => state.training.loading);

  console.log("choosedTraining", choosedTraining);
  const [inputs, setInputs] = useState({
    title: choosedTraining?.title || "",
    description: choosedTraining?.description || "",
    time: choosedTraining?.time || "",
    order: choosedTraining?.order || "",
    points: choosedTraining?.points || [],
  });
  useEffect(() => {
    setInputs({
      title: choosedTraining?.title || "",
      description: choosedTraining?.description || "",
      time: choosedTraining?.time || "",
      order: choosedTraining?.order || "",
      points: choosedTraining?.points || [],
    });

    setPoints(choosedTraining?.points);
  }, [choosedTraining, open]);

  const [points, setPoints] = useState([""]);

  useEffect(() => {
    //points -> inputs
    setInputs({
      ...inputs,
      points,
    });
  }, [points]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //boslari sil
    setInputs({
      ...inputs,
      points: inputs.points.filter((point) => point.length > 0),
    });

    console.log(inputs);

    //check if fields are entered
    if (
      !inputs.title ||
      !inputs.description ||
      !inputs.time ||
      !inputs.order ||
      inputs.points?.length < 1 ||
      inputs.points?.some((point) => point.length === 0)
    ) {
      toastWarnNotify("All fields are required!");
      return;
    }
    console.log(inputs);

    //length restricts!
    if (inputs.title.length > 40) {
      console.log("girdi");
      toastWarnNotify("title 40 karakteri geçemez!");
      return;
      console.log("return sonrasi");
    }
    if (inputs.time.length > 25) {
      toastWarnNotify("time 100 karakteri geçemez!");
      return;
    }
    if (inputs.description.length > 300) {
      toastWarnNotify("description 300 karakteri geçemez!");
      return;
    }

    // const formPayload = new FormData();
    // for (let key in inputs) {
    //   formPayload.append(key, inputs[key]);
    // }

    updateTrainingMember(choosedTraining?._id, inputs);

    //reset input fields
    setInputs({
      title: "",
      description: "",
      time: "",
      order: "",
      points: [],
    });
    setPoints([""]);

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
                    Update {choosedTraining?.title} egitimi
                  </DialogTitle>
                  <div className="mt-2">
                    <form
                      className="my-5 flex  justify-center flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-5">
                        <label htmlFor="title">Title:</label>
                        <input
                          type="text"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
                          required={true}
                          name="title"
                          placeholder="Title*  - max 40 char length"
                          value={inputs.title}
                          onChange={handleChange}
                          maxLength="40"
                        />
                        {inputs.title.length > 40 && (
                          <span className="px-2 text-xs text-red-500">
                            Title 40 karakteri geçemez!
                          </span>
                        )}
                      </div>
                      <div className="mb-5">
                        <label htmlFor="time">Time:</label>
                        <input
                          type="text"
                          id="time"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
                          required={true}
                          name="time"
                          placeholder="Time* - max 25 char length"
                          value={inputs.time}
                          onChange={handleChange}
                          maxLength="25"
                        />

                        {inputs.time.length > 25 && (
                          <span className="px-2 text-xs text-red-500">
                            Time 25 karakteri geçemez!
                          </span>
                        )}
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

                      {/* <div className="mb-5">
        <input
          type="text"
          id="points"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-dark-red focus:border-dark-red block w-full p-2.5 "
          required={true}
          name="points"
          placeholder="Points* - max 25 char length"
          value={inputs.points}
          onChange={handleChange}
        />

        <button type="button" className="primary-button">Madde ekle</button>

        {inputs.points.length < 1 && (
          <span className="px-2 text-xs text-red-500">
            En az 1 madde eklenmelidir!
          </span>
        )}
      </div> */}
                      <PointsComp points={points} setPoints={setPoints} />

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
                          maxLength="300"
                        >
                          Egitim description max: 300
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

export default TrainingEditModal;
