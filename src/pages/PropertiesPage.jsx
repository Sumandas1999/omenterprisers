import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";
import { properties } from "@/data/properties";

const PropertiesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationParam = queryParams.get("location");

  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    bedrooms: "any",
    bathrooms: "any",
    price: 25000000, // Max price in Rupees
    location: locationParam || "all"
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  const applyFilters = () => {
    let result = [...properties];

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        property => 
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.type.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.type !== "all") {
      result = result.filter(
        property => property.type.toLowerCase() === filters.type.toLowerCase()
      );
    }
    
    if (filters.location !== "all") {
      const locationMap = {
        "bhubaneswar": "Bhubaneswar",
        "cuttack": "Cuttack",
        "puri": "Puri",
        "rourkela": "Rourkela"
      };
      result = result.filter(
        property => property.location.toLowerCase().includes((locationMap[filters.location] || filters.location).toLowerCase())
      );
    }

    if (filters.bedrooms !== "any") {
      result = result.filter(
        property => property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    if (filters.bathrooms !== "any") {
      result = result.filter(
        property => property.bathrooms >= parseFloat(filters.bathrooms) // Use parseFloat for half bathrooms
      );
    }

    result = result.filter(
      property => {
        const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ""));
        return propertyPrice <= filters.price;
      }
    );

    setFilteredProperties(result);
  };

  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Removed filters from dependency array to prevent re-filtering on every filter change, applyFilters will be called explicitly by button

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Dream Property in Odisha</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Browse our exclusive collection of premium properties in desirable locations across Odisha
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <PropertyFilters 
          filters={filters} 
          setFilters={setFilters} 
          applyFilters={applyFilters} 
        />

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No properties found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters to see more results
            </p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;