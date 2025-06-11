
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ✅ Import all 3 images
import slide1 from "../gallery/image/land 1.jpeg";
import slide2 from "../gallery/image/puja room.jpeg";
import slide3 from "../gallery/image/lake 1.jpeg"; // replace with actual image if needed

const slides = [
  {
    id: 1,
    title: "Luxury Living Redefined",
    description: "Discover premium properties in the most sought-after locations",
    cta: "View Properties",
    ctaLink: "/properties",
    image: slide1,
  },
  {
    id: 2,
    title: "Find Your Dream Home",
    description: "Exclusive listings tailored to your lifestyle and preferences",
    cta: "Explore Now",
    ctaLink: "/properties",
    image: slide2,
  },
  {
    id: 3,
    title: "Premium Investment Opportunities",
    description: "Secure your future with high-yield real estate investments",
    cta: "Learn More",
    ctaLink: "/pricing",
    image: slide3,
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.6 } }
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    
      <div className="relative hero-slider overflow-hidden h-[30vh]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
  key={currentSlide}
  className="absolute inset-0 z-0 h-[80vh] overflow-hidden"
  variants={slideVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            className="w-full h-40rem object-cover"
            alt={`${slides[currentSlide].title} - Real Estate`}
            src={slides[currentSlide].image}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="max-w-3xl mx-auto text-center text-white"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" variants={itemVariants}>
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p className="text-xl md:text-2xl mb-8 opacity-90" variants={itemVariants}>
                {slides[currentSlide].description}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to={slides[currentSlide].ctaLink}>
                    {slides[currentSlide].cta}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;