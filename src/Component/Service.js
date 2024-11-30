import React from "react";
import { servicesData } from "./dummydata";
import { ServiceCard } from "./ServiceCard";

const Service = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-teal-500">Services</span>
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore the wide range of services we offer to cater to your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
