
import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const TestimonialsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with LuxEstate
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
          <h2 className="text-3xl font-bold mb-4">Our Client Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We take pride in providing exceptional service and helping our clients find their dream properties. Read about their experiences working with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Clients</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Experience the LuxEstate difference for yourself. Contact our team today to start your journey toward finding your perfect property.
          </p>
          <div className="flex justify-center">
            <img  
              className="w-full max-w-md h-auto rounded-lg" 
              alt="Happy clients with their new home"
             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
