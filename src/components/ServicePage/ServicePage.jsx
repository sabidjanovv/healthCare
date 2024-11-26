import React from "react";
import Card from "./Card/Card.jsx";

const ServicesPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 mb-36">
      <div className="bg-gray-50 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Services we Offer
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <Card />

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-white text-blue-500 border border-solid border-blue-500 font-semibold rounded-3xl shadow-md hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
