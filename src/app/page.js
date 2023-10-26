import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vacancies from "../components/Openvacancies";
import EQbeatsIQ from "../components/EQbeatsIQ";
import BeBestYou from "../components/BeBestYou";
import EverWonder from "../components/EverWonder";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import AheadApp from "../components/MeetAheadCard";
import DoesThisSoundFamiliar from "../components/DoesThisSoundFamiliar";
import MasterLife from "../components/MasterLife";
import SelfImprovement from "../components/SelfImprovement";
import Text from "../components/Text";


export default function Home() {
  return (
    <>
      <Navbar />
       <Text/>
      <MasterLife/>
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <AheadApp/>
      <SelfImprovement/>
      <BeBestYou />
      <EverWonder />
      <Test />
      <WorkWithUs />
      <vacancies />
      <Footer />
    </>
  );
}