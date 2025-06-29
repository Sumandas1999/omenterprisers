
import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import LocationSection from "@/components/home/LocationSection";
import CallToAction from "@/components/home/CallToAction";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to LuxEstate</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover exceptional properties in the most desirable locations. Our curated selection of luxury real estate offers unparalleled quality, style, and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Properties</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our handpicked selection of luxury properties in the most sought-after locations worldwide.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Advisors</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of experienced real estate professionals provides personalized guidance throughout your journey.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Investments</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We ensure transparent transactions and due diligence for all properties, protecting your investment.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <FeaturedProperties />
      <LocationSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;
