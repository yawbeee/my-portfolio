import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-56 w-full">
        <Hero />
      </div>
    </div>
  );
}