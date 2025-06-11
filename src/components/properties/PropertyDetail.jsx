import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bed, Bath, Square, MapPin, Calendar, Home, Maximize, Car, Wifi, Tv, Coffee, Utensils, ChevronLeft, ChevronRight } from "lucide-react";

const PropertyDetail = ({ property }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const features = [
    { icon: <Wifi className="h-5 w-5" />, text: "High-Speed Internet" },
    { icon: <Tv className="h-5 w-5" />, text: "Smart Home System" },
    { icon: <Coffee className="h-5 w-5" />, text: "Modern Kitchen" },
    { icon: <Car className="h-5 w-5" />, text: "Garage Parking" },
    { icon: <Utensils className="h-5 w-5" />, text: "Dining Area" },
    { icon: <Maximize className="h-5 w-5" />, text: "Spacious Rooms" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/properties" className="text-primary flex items-center mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Properties
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-3xl font-bold text-primary">{property.price}</span>
            <div className="flex gap-2 mt-2">
              <Badge variant="default">{property.type}</Badge>
              {property.isNew && <Badge variant="success">New</Badge>}
            </div>
          </div>
        </div>
      </div>

      {/* Property Images Slider */}
      <div className="relative rounded-xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800">
        <div className="aspect-w-16 aspect-h-9 relative">
          <img  
            className="w-full h-[500px] object-cover" 
            alt={`${property.title} - Image ${activeImageIndex + 1}`}
           src="https://images.unsplash.com/photo-1501996016-0cb2e7227a1a" />
        </div>
        
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeImageIndex === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Property Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {property.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <Bed className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</span>
                  <span className="text-lg font-bold">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bath className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</span>
                  <span className="text-lg font-bold">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Square className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Area</span>
                  <span className="text-lg font-bold">{property.area} sqft</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Year Built</span>
                  <span className="text-lg font-bold">{property.yearBuilt || "N/A"}</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features">
              <h2 className="text-2xl font-bold mb-6">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="mr-4 text-primary">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="location">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 h-[400px]">
                <img  
                  className="w-full h-full object-cover" 
                  alt={`Map location of ${property.title}`}
                 src="https://images.unsplash.com/photo-1562021536-4cf14536f213" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Nearby Amenities:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Schools within 1 km</li>
                  <li>Shopping centers within 2 km</li>
                  <li>Public transportation within 0.5 km</li>
                  <li>Parks and recreation areas within 1 km</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <div className="sticky top-24 glass-card rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Interested in this property?</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Contact us today to schedule a viewing or request more information about this property.
            </p>
            <div className="space-y-4">
              <Button className="w-full" size="lg" asChild>
                <Link to={`/inquiry?property=${property.id}`}>Schedule a Viewing</Link>
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Request Information
              </Button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-500 dark:text-gray-400 mb-2">
                Or call us directly
              </p>
              <p className="text-center text-lg font-bold">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;