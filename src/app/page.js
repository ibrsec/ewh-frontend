import AboutUsHome from "@/components/aboutusHome/AboutUsHome";
import Hero from "@/components/hero/Hero";
import JoinedPeople from "@/components/joinedPeople/JoinedPeople";
import SlidingComments from "@/components/slidingComments/SlidingComments";
import SlidingText from "@/components/slidingText/SlidingText";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Hero />
      </div>
        <SlidingText />
      <div className="max-w-6xl mx-auto">
        <AboutUsHome />
      </div>
      <JoinedPeople />
      <div className="max-w-6xl mx-auto">
        <SlidingComments />
      </div>
    </div>
  );
}
