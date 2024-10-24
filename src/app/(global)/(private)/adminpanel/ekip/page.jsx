"use client";
import useTeamServices from "@/lib/services/useTeamServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EkipCard from "./components/EkipCard";
import NewEkipMember from "./components/NewEkipMember";
import EkipDeleteModal from "./components/EkipDeleteModal";
import EkipEditModal from "./components/EkipEditModal";
import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";

const EkipPage = () => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [choosedMember, setChoosedMember] = useState({});
  const { getTeamApi } = useTeamServices();
  const team = useSelector((state) => state.team.teamMembers);
  const loading = useSelector((state) => state.team.loading);
// console.log(team);
  useEffect(() => {
    getTeamApi();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-2 mb-24">
        {/* yeni ekip uyesi */}
        <NewEkipMember />



      {/* trainings list */}
      <h3 className="text-2xl md:text-3xl font-bold robot-font mt-10 border-t-2 pt-5 border-dark-red">
        Ekibimiz
      </h3>
      {loading ? (
          <Spinner />
        ) : team?.length === 0 ? (
          <NoContent />
        ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {team?.map((person, idx) => (
          <EkipCard key={idx} person={person} setChoosedMember={setChoosedMember}   setDeleteModalOpen={setDeleteModalOpen}  setEditModalOpen={setEditModalOpen}  />
        ))}
      </div>)}
      <EkipDeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} choosedMember={choosedMember}  />
      <EkipEditModal open={editModalOpen} setOpen={setEditModalOpen} choosedMember={choosedMember}  />
    </div> 
  );
};

export default EkipPage;
