"use client";
import Banner from "@/components/banner/Banner";
import TeamCard from "./components/TeamCard";
import useTeamServices from "@/lib/services/useTeamServices";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "@/components/spinner/Spinner";
import NoContent from "@/components/noContent/NoContent";

const team2 = [
  {
    image:
      "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWI5NGRhMjEwLTRlOGUtMTFlZi1iMzFjLWM3ZTc5MGQ0OWM0MS5qcGc=",
    name: "Ethan Hayes",
    description:
      "English teacher at Bridge Language Center. He holds a degree in Applied Linguistics from the University of Toronto and a TESOL certification. His focus areas are Phonetics and Language Teaching Methodology",
  },
  {
    image:
      "https://thumbs.wbm.im/pw/small/8390a9c27654fdd710128ec3a9d0c800.jpg",
    name: "James Turner",
    description:
      "English instructor at Horizon Language Institute. He has a BA in English Literature from UCLA and is TEFL certified. His areas of expertise include Shakespearean Drama and Modern English Grammar",
  },
  {
    image:
      "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/1519160/original/profile-photo.jpg",
    name: "Emma Collins",
    description:
      "English teacher at Global Language Academy with a degree in English Literature from the University of Cambridge and TESOL certification. She specializes in Contemporary American Fiction and Linguistics.",
  },
  {
    image:
      "https://thumbs.wbm.im/pw/medium/f7362883a4d4ade282c8883dddc1824e.avif",
    name: "Liam Bennett",
    description:
      "English teacher at International Language School, holding a degree in Linguistics from Oxford University and a TEFL certification. He focuses on Applied Linguistics and Second Language Acquisition.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/young-woman-with-fair-skin-relaxed-wavy-style-1-1_975681-132717.jpg",
    name: "Sophia Anderson",
    description:
      "English instructor at ESL English Academy with a BA in Liberal Arts from SUNY New Paltz and a TEFL certification. She specializes in British Modernist Poetry and Postmodernism, and has experience teaching at Middle East Technical University.",
  },
];

const TeamPage = () => {
  const { getTeamApi } = useTeamServices();
  const team = useSelector((state) => state.team.teamMembers);
  const loading = useSelector((state) => state.team.loading);
  useEffect(() => {
    console.log("useEffect triggered");
    getTeamApi();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Banner path="/images/team.png" title="EKİBİMİZ" />

      <div className="max-w-6xl mx-auto px-2 mb-24">
        {/* trainings list */}
        {loading ? (
          <Spinner />
        ) : team?.length === 0 ? (
          <NoContent />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
            {team?.map((person, idx) => (
              <TeamCard key={idx} person={person} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
