
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    location: "Malibu, California",
    price: "$4,500,000",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    type: "Villa",
    isNew: true,
    image: "luxury-villa-ocean-view"
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "Manhattan, New York",
    price: "$2,100,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "Apartment",
    isNew: false,
    image: "modern-downtown-apartment"
  },
  {
    id: 3,
    title: "Countryside Estate with Pool",
    location: "Tuscany, Italy",
    price: "$3,750,000",
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    type: "Estate",
    isNew: true,
    image: "countryside-estate-pool"
  }
];

const FeaturedProperties = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most desirable locations
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <Card className="overflow-hidden property-card h-full">
                <div className="relative">
                  <img  
                    className="w-full h-64 object-cover" 
                    alt={property.title}
                   src="https://images.unsplash.com/photo-1692852476926-0d88034a155a" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="default">{property.type}</Badge>
                    {property.isNew && <Badge variant="success">New</Badge>}
                  </div>
                  <button 
                    className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5 text-red-500" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <p className="font-bold text-2xl">{property.price}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{property.area} sqft</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link to={`/properties/${property.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
