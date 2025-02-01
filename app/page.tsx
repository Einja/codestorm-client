import Image from "next/image";
import Hero from "../components/home/Hero";
import MainContent from "../components/home/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-96 pt-36 fade-in">
      <Hero/>
      <MainContent/>
    </div>
  );
}
