import React from "react";
import Greeting from "../components/home/Greeting";
import MiniCard from "../components/home/MiniCard";
import { Coins } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] min-h-[calc(100vh-5rem)] overflow-auto flex flex-col lg:flex-row gap-6">

      {/* Left Side */}
      <div className="flex-[3] px-4 lg:px-8">
        <Greeting />

        {/* Mini Cards */}
        <div className="flex  gap-4 mt-6">
          <MiniCard title="Total Earning" icon={<Coins />} number={512} footerNnum={1.6} />
          <MiniCard title="In Progress" icon={<Coins />} number={16} footerNnum={3.6} />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-[2] bg-blue-600 rounded-lg p-4 h-auto lg:h-auto">
        {/* You can add charts or other content here */}
      </div>

    </section>
  );
};

export default Home;
