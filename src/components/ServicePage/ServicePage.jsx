import React from "react";
import Card from "./Card/Card.jsx";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-16">
        
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Services we Offer
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>

      <Card />

      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default ServicesPage;
