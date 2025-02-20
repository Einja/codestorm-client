import Hero from "../components/home/Hero";
import ExploreFeature from "../components/home/ExploreFeature";
import ProblemsFeature from "../components/home/ProblemsFeature";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-40 pt-12 fade-in">
      <Hero/>
      <ExploreFeature/>
      <ProblemsFeature/>
    </div>
  );
}
