import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingComparison = () => {
  const comparisonData = [
    {
      category: "Property Types",
      locations: {
        "Bhubaneswar": { value: "Apartments, Villas, Plots", available: true },
        "Cuttack": { value: "Independent Houses, Commercial", available: true },
        "Puri": { value: "Apartments, Vacation Homes", available: true },
        "Rourkela": { value: "Houses, Plots", available: true }
      }
    },
    {
      category: "Avg. Price per Sq Ft",
      locations: {
        "Bhubaneswar": { value: "₹4,500 - ₹7,000", available: true },
        "Cuttack": { value: "₹3,500 - ₹5,500", available: true },
        "Puri": { value: "₹5,000 - ₹8,000", available: true },
        "Rourkela": { value: "₹2,500 - ₹4,000", available: true }
      }
    },
    {
      category: "Investment Potential",
      locations: {
        "Bhubaneswar": { value: "High", available: true },
        "Cuttack": { value: "Medium", available: true },
        "Puri": { value: "Medium-High", available: true },
        "Rourkela": { value: "Medium", available: true }
      }
    },
    {
      category: "Rental Yield",
      locations: {
        "Bhubaneswar": { value: "3-5%", available: true },
        "Cuttack": { value: "2-4%", available: true },
        "Puri": { value: "4-6% (seasonal)", available: true },
        "Rourkela": { value: "3-4%", available: true }
      }
    },
    {
      category: "Infrastructure Growth",
      locations: {
        "Bhubaneswar": { value: "Rapid", available: true },
        "Cuttack": { value: "Moderate", available: true },
        "Puri": { value: "Good (tourism-focused)", available: true },
        "Rourkela": { value: "Steady", available: true }
      }
    },
    {
      category: "Market Growth",
      locations: {
        "Bhubaneswar": { value: "Strong", available: true },
        "Cuttack": { value: "Stable", available: true },
        "Puri": { value: "Growing", available: true },
        "Rourkela": { value: "Moderate", available: true }
      }
    }
  ];

  const locationHeaders = ["Bhubaneswar", "Cuttack", "Puri", "Rourkela"];

  return (
    <div className="overflow-x-auto">
      <motion.table 
        className="w-full border-collapse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <thead>
          <tr>
            <th className="text-left p-4 border-b-2 border-gray-200 dark:border-gray-700">Features</th>
            {locationHeaders.map(header => (
              <th key={header} className="p-4 border-b-2 border-gray-200 dark:border-gray-700 text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50 dark:bg-gray-800/50" : ""}
            >
              <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-medium">
                {row.category}
              </td>
              {locationHeaders.map((location, colIndex) => (
                <td 
                  key={colIndex} 
                  className="p-4 border-b border-gray-200 dark:border-gray-700 text-center"
                >
                  {row.locations[location]?.available ? (
                    <div className="flex flex-col items-center justify-center">
                      <span>{row.locations[location].value}</span>
                    </div>
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default PricingComparison;