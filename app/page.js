import Image from "next/image";
import Landing from "./components/Home/Landing";
import Who from "./components/Home/Who";
import What from "./components/Home/What";
import CaseStudy from "./components/Home/CaseStudy";
import Brands from "./components/Home/Brands";

export default function Home() {
  return (
    <>
      <Landing />
      <Who />
      <What />
      <CaseStudy />
      <Brands />
    </>
  );
}
