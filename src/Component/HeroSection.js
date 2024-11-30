import React from "react";
import Button from "./Button";

const HeroSection = ({imageUrl}) => {
const data={
    name:"Hire ME",
    path:"contact"
}
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 mx-auto   max-w-7xl">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-lg font-semibold text-blue-600">THIS IS ME</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 leading-tight">
          Priyanshu <br />
          <span className="text-blue-500">Rajput</span>
        </h1>
        <p className="text-gray-600 text-md md:text-lg mt-4">
          I am a passionate developer dedicated to creating innovative and
          impactful digital experiences. Let's build something amazing together!
        </p>
        <Button {...data} />
      </div>

      {/* Right Section: Image */}
      <div className="flex-1">
        <img
          src={imageUrl}
          alt="Hero illustration"
          className="w-full max-w-sm mx-auto md:max-w-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
