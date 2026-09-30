import React from "react";
import bannerStackImage from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="flex justify-items-center items-center container mx-auto">
      <div>
        <h1 className="font-extrabold text-[60px] text-[#0F172A] leading-none">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] text-[18px] w-142.75 h-22 pb-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div>
          <button className="btn btn-active btn-primary">Primary</button>
          <button className="btn btn-neutral btn-outline">Outline</button>
        </div>
      </div>
      <div>
        <img src={bannerStackImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
