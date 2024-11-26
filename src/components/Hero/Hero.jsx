import React from "react";
import doctorImage from "../../assets/image.svg"; 

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white">
      <div className="flex-1 text-left md:mr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Virtual healthcare Saviour <br /> for you
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
          Consult today
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="border-4 border-yellow-300 rounded-lg p-4">
          <img
            src={doctorImage}
            alt="Doctor"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
