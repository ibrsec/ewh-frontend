import AboutUsHome from "@/components/aboutusHome/AboutUsHome";
import JoinedPeople from "@/components/joinedPeople/JoinedPeople"; 
import SlidingComments from "@/components/slidingComments/SlidingComments";

const AboutUsPage = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">

      <AboutUsHome />
      </div>
      <JoinedPeople />
      <SlidingComments/>
    </div>
  );
};

export default AboutUsPage;
