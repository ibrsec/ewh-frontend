// "use client"; 
import { SiSololearn } from "react-icons/si";


const TrainingCard = ({
  training,
  setChoosedTraining,
  setDeleteModalOpen,
  setEditModalOpen,
}) => {
  return (
    <div  className=" border-2 border-dark-red   transition-all duration-1000 rounded-lg pt-7 pb-4 px-5 shadow-md shadow-dark-red group relative     ">
      <img
        src="/images/hovershapes.png"
        alt=""
        className="absolute w-full h-full z-30   opacity-0 group-hover:opacity-30  group-hover:scale-125 transition-all duration-1000"
      />
      <div className="flex flex-col gap-5 justify-between h-full ">


        <div className="flex flex-col gap-6 flex-1">
          <div className=" flex items-center gap-5 text-dark-red text-lg">
            <SiSololearn className="group-hover:rotate-180 transition-all duration-700" />
            <p className="font-semibold text-xl text-dark-red poppins-font">
              {training.title}
            </p>
          </div>
          <ul className=" ">
            {training.points.map((point, index) => (
              <li key={index} className="text-sm text-gray-700 mb-3">
                ► {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <p className="text-gray-600 font-semibold">{training.description}</p>
         
        </div>
        <div className="flex items-center gap-1 justify-center mt-3">
            <p className="text-black font-bold text-xl ">{training?.time}</p>
            {/* <p className=" text-end text-2xl text-red font-semibold">
              ${training.price}
            </p> */}
          </div>
          
        <div className=" text-center text-lg text-red font-semibold">Order: {training?.order}</div>
        <div className="flex gap-2 px-3 pt-2 pb-3 z-50">
          <button
            className="flex-1 primary-button"
            onClick={() => {
              setChoosedTraining(training);
              setEditModalOpen(true);
            }}
          >
            Edit
          </button>
          <button
            className="flex-1 primary-button-main"
            onClick={() => {
              setChoosedTraining(training);
              setDeleteModalOpen(true);
            }}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default TrainingCard;
