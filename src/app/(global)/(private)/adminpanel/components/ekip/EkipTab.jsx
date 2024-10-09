import useTeamServices from "@/lib/services/useTeamServices";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EkipCard from "./EkipCard";
import NewEkipMember from "./NewEkipMember";

const EkipTab = () => {
  const { getTeamApi } = useTeamServices();
  const team = useSelector((state) => state.team.teamMembers);
console.log(team);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {team?.map((person, idx) => (
          <EkipCard key={idx} person={person}   />
        ))}
      </div>
    </div>
  );
};

export default EkipTab;
