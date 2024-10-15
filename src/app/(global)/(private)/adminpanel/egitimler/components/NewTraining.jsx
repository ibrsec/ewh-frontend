"use client";

import SpinnerOne from "@/components/spinner/SpinnerOne";
import { toastWarnNotify } from "@/helpers/toastify";
import useTeamServices from "@/lib/services/useTeamServices";
import useTrainingServices from "@/lib/services/useTrainingServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PointsComp from "./PointsComp";

const NewTraining = () => {
  const loading = useSelector((state) => state.training.loading);
  const { createNewTrainingMember } = useTrainingServices();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    time: "",
    order: "",
    points: [],
  });
  const [points, setPoints] = useState(['']);

  useEffect(() => {
    //points -> inputs
    setInputs({
      ...inputs, points
    })
  },[points])

  const handleChange = (e) => { 
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,  
    });
  };

  //handling submit login form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);

    //boslari sil
    setInputs({...inputs, points: inputs.points.filter(point => point.length > 0)});
    


    console.log("inputs", inputs);
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

    createNewTrainingMember(inputs);

    //reset input fields
    setInputs({
      title: "",
      description: "",
      time: "",
      order: "",
      points: [''],
    });
    setPoints([''])
  };
 
  return (
    <form
      className=" w-full rounded-lg shadow-xl border border-dark-red shadow-dark-red pt-4 pb-12 px-5 mt-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl md:text-3xl font-bold robot-font mb-8 mt-10 ">
        Create new Training!
      </h3>

      <div className="mb-5">
        <div className="">Title</div>
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
        <div className="">Time</div>
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
        <div className="">Order</div>
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
      <PointsComp points={points} setPoints={setPoints}/>

      <div className="mb-5">
        <div className="">Description</div>
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

export default NewTraining;
