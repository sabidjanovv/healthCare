import React from "react";
import doctorImage from "../../assets/image.svg";
import healthcareImage from "../../assets/image2.png"; 
import ServicePage from "../ServicePage/ServicePage";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white">
        <div className="flex-1 text-left md:mr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Virtual healthcare Saviour <br /> for you
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-blue-700 transition">
            Consult today
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </section>

      <ServicePage />

      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white">
        <div className="flex-1 flex items-center justify-center md:mr-8">
          <img
            src={healthcareImage}
            alt="Healthcare"
            className="max-w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Leading healthcare <br /> providers
          </h1>
          <p className="text-gray-600 mb-6">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it's not just
            work. We take pride in the solutions we deliver.
          </p>
          <button className="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-3xl text-lg font-medium hover:bg-blue-600 hover:text-white transition">
            Learn more
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
