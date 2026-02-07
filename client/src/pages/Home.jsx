import React from "react";
import Greeting from "../components/home/Greeting";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden flex gap-3 ">
     
      <div className="flex-3"> <Greeting/></div>

      {/*  Right */}
      <div className="flex-2 bg-blue-600"></div>
    </section>
  );
};

export default Home;
