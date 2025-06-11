
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "luxury-living-room",
    alt: "Luxury living room with panoramic views",
    category: "interior"
  },
  {
    id: 2,
    src: "modern-kitchen-design",
    alt: "Modern kitchen with high-end appliances",
    category: "interior"
  },
  {
    id: 3,
    src: "luxury-pool-villa",
    alt: "Luxury villa with infinity pool",
    category: "exterior"
  },
  {
    id: 4,
    src: "penthouse-bedroom",
    alt: "Penthouse master bedroom with city views",
    category: "interior"
  },
  {
    id: 5,
    src: "beachfront-property",
    alt: "Beachfront property with private access",
    category: "exterior"
  },
  {
    id: 6,
    src: "modern-bathroom-design",
    alt: "Modern bathroom with freestanding tub",
    category: "interior"
  },
  {
    id: 7,
    src: "luxury-home-exterior",
    alt: "Luxury home exterior with landscaped garden",
    category: "exterior"
  },
  {
    id: 8,
    src: "apartment-living-space",
    alt: "Open concept apartment living space",
    category: "interior"
  },
  {
    id: 9,
    src: "mansion-aerial-view",
    alt: "Aerial view of luxury mansion",
    category: "exterior"
  }
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === "all" 
                ? "bg-white dark:bg-gray-700 shadow-sm" 
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === "interior" 
                ? "bg-white dark:bg-gray-700 shadow-sm" 
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveCategory("interior")}
          >
            Interior
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === "exterior" 
                ? "bg-white dark:bg-gray-700 shadow-sm" 
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveCategory("exterior")}
          >
            Exterior
          </button>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="aspect-square overflow-hidden rounded-lg gallery-image"
              onClick={() => openLightbox(image)}
            >
              <img  
                className="w-full h-full object-cover" 
                alt={image.alt}
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img  
                className="max-w-full max-h-[80vh] object-contain" 
                alt={selectedImage.alt}
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p>{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
