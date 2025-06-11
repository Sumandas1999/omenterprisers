import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PricingCard from "@/components/pricing/PricingCard";
import PricingComparison from "@/components/pricing/PricingComparison";
import { locations } from "@/data/locations";

const PricingPage = () => {
  const routerLocation = useLocation();
  const queryParams = new URLSearchParams(routerLocation.search);
  const locationParam = queryParams.get("location");

  const scrollToLocation = () => {
    if (locationParam) {
      const element = document.getElementById(locationParam);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  React.useEffect(() => {
    scrollToLocation();
  }, [locationParam]);

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Real Estate Pricing in Odisha</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Compare property prices and investment opportunities across key locations in Odisha
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Location Pricing Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our detailed pricing information for properties in different locations within Odisha. Each location offers unique investment opportunities and lifestyle benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locations.map((loc) => (
            <div id={loc.id} key={loc.id}>
              <PricingCard location={loc} isPopular={loc.isPopular} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Location Comparison</h2>
          <PricingComparison />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Investment Insights for Odisha</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our real estate experts provide valuable insights to help you make informed investment decisions in the Odisha property market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Market Trends in Odisha</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The real estate market in Odisha is experiencing steady growth, driven by urbanization, infrastructure development, and increasing demand for modern housing.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Bhubaneswar: High demand for residential and commercial properties due to IT and education sectors.</li>
                <li>Cuttack: Stable market with potential for growth in commercial real estate.</li>
                <li>Puri: Growing interest in vacation homes and rental properties.</li>
                <li>Rourkela: Affordable options with long-term industrial growth prospects.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Investment Strategies in Odisha</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Odisha offers diverse investment opportunities tailored to different financial goals and risk appetites.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Long-term appreciation: Invest in developing areas of Bhubaneswar and Rourkela.</li>
                <li>Rental income: Properties in Bhubaneswar (near IT hubs) and Puri (tourism) offer good rental yields.</li>
                <li>Commercial investment: Cuttack and Bhubaneswar present opportunities for commercial spaces.</li>
                <li>Plotted development: Growing demand for plots in peripheral areas of major cities.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;