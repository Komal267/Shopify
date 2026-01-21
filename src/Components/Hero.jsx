import React from "react";
import bgImage from '/assets/Headbg.png';
import Button from "./Button/Button";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover flex justify-center lg:justify-end h-full bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="m-3 relative z-20 w-full sm:w-60 lg:w-95 flex flex-col justify-center items-center text-green-600 h-full px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 mt-2">Experience the Ultimate</h1>
        <h1 className="text-2xl md:text-3xl font-bold mb-1 mt-2">Sound Quality</h1>
        <p className="text-green-700">
          Discover headphones that deliver rich bass, crystal-clear highs, and
          unbeatable comfort
        </p>
        <Button className="bg-red-600 text-white font-bold mt-2 px-2 py-2 rounded-lg">SHOP COLLECTION</Button>
      </div>
    </div>
  );
};

export default Hero;
