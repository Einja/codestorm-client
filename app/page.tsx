import Image from "next/image";
import Hero from "../components/home/Hero";
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-800">
      <Hero/>
    </div>
  );
}
