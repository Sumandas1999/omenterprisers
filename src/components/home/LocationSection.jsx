import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Bhubaneswar",
    properties: 35,
    image: "bhubaneswar-skyline"
  },
  {
    id: 2,
    name: "Cuttack",
    properties: 20,
    image: "cuttack-cityscape"
  },
  {
    id: 3,
    name: "Puri",
    properties: 15,
    image: "puri-beach-properties"
  },
  {
    id: 4,
    name: "Rourkela",
    properties: 12,
    image: "rourkela-downtown"
  }
];

const LocationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Locations in Odisha</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our properties in these sought-after locations
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {locations.map((location) => (
            <motion.div key={location.id} variants={itemVariants}>
              <Link 
                to={`/pricing?location=${location.name.toLowerCase()}`}
                className="block relative rounded-lg overflow-hidden location-card group h-80"
              >
                <img  
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={`${location.name} real estate properties`}
                 src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-bold">{location.name}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{location.properties} Properties</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;