import React from "react";
import doctorImage from "../../assets/image.svg";
import healthcareImage from "../../assets/image2.png"; 
import ServicePage from "../ServicePage/ServicePage";
import bottomIcon from "../../assets/bottomIcon.png";
import dctrSbd from "../../assets/dctr_sbd.png";
import feedbackPic from "../../assets/feedbackPic.png";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white mb-36">
        <div className="flex-1 text-left md:mr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Virtual healthcare Saviour <br /> for you
          </h1>
          <p className="text-blue-300 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-blue-700 transition mt-20">
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

      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white mb-36">
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
          <button className="px-6 py-2 bg-white text-blue-500 border border-solid border-blue-500 font-semibold rounded-3xl shadow-md hover:bg-blue-500 hover:text-white transition">
            Learn more
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white mb-40">
        <div className="flex-1 text-left md:mr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Download our Saviour Care <br /> mobile app
          </h1>
          <p className="text-gray-400 mb-6">
            Our dedicated patient engagement app and <br />
            web portal allow you to access information <br />
            instantaneously (no tedeous form, long calls, <br />
            or administrative hassle) and securely
          </p>
          <button className="flex items-center px-6 py-2 bg-white text-blue-500 border border-solid border-blue-500 font-semibold rounded-3xl shadow-md hover:bg-blue-500 hover:text-white transition">
            <span className="mr-2">Download</span>
            <img src={bottomIcon} alt="Doctor" className="max-w-full h-auto" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={dctrSbd}
            alt="Doctor"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white mb-36">
        <div className="flex-1 flex items-center justify-center md:mr-8">
          <img
            src={feedbackPic}
            alt="Healthcare"
            className="max-w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Find a Doctor near you
          </h1>
          <p className="text-gray-400 mb-6">
            Our app and web portal allows you to find the <br />doctor to your nearest
            location.
          </p>
          <button className="px-8 py-2 bg-white text-blue-500 border border-solid border-blue-500 font-semibold rounded-3xl shadow-md hover:bg-blue-500 hover:text-white transition">
            Find now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
