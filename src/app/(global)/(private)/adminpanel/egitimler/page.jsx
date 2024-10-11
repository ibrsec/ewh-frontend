"use client"; 
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; 

 
import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";
import useTrainingServices from "@/lib/services/useTrainingServices";
import TrainingCard from "./components/TrainingCard";
import NewTraining from "./components/NewTraining";
import TrainingDeleteModal from "./components/TrainingDeleteModal";
import TrainingEditModal from "./components/TrainingEditModal";

const EgitimlerAdminPage = () => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [choosedTraining, setChoosedTraining] = useState({});
  const { getTrainingApi } = useTrainingServices();
  const trainings = useSelector((state) => state.training.trainings);
  const loading = useSelector((state) => state.training.loading);
console.log(trainings);
  useEffect(() => {
    getTrainingApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
        {/* yeni ekip uyesi */}
        <NewTraining />



      {/* trainings list */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-t-2 pt-5 border-dark-red">
      Eğitimler
      </h3>
      {loading ? (
          <Spinner />
        ) : trainings?.length === 0 ? (
          <NoContent />
        ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {trainings?.map((training, idx) => (
          <TrainingCard key={idx} training={training} setChoosedTraining={setChoosedTraining}   setDeleteModalOpen={setDeleteModalOpen}  setEditModalOpen={setEditModalOpen}  />
        ))}
      </div>)}
       <TrainingDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} choosedTraining={choosedTraining}  />
     <TrainingEditModal open={editModalOpen} setOpen={setEditModalOpen} choosedTraining={choosedTraining}  />
    </div> 
  );
};

export default EgitimlerAdminPage;
