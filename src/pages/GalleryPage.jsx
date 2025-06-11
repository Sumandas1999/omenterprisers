
import React from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const GalleryPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Property Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore our stunning collection of luxury properties and interior designs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Discover Our Luxury Properties</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Browse through our carefully curated gallery showcasing the finest properties in our portfolio. From modern apartments to luxurious villas, experience the epitome of elegant living.
          </p>
        </motion.div>

        <GalleryGrid />
      </div>
    </div>
  );
};

export default GalleryPage;
