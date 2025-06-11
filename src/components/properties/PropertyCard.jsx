
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <Card className="overflow-hidden property-card h-full">
      <div className="relative">
        <img  
          className="w-full h-64 object-cover" 
          alt={property.title}
         src="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e" />
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
  );
};

export default PropertyCard;
