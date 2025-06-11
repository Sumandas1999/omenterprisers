import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({ location, isPopular = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className={`relative overflow-hidden ${isPopular ? 'border-primary shadow-lg' : ''}`}>
        {isPopular && (
          <div className="absolute top-0 right-0">
            <Badge variant="default" className="rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md px-3 py-1">
              Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="mb-2">
            <img  
              className="w-full h-40 object-cover rounded-md" 
              alt={`${location.name} real estate`}
             src="https://images.unsplash.com/photo-1552712840-cd7b84c23f20" />
          </div>
          <CardTitle className="text-2xl">{location.name}</CardTitle>
        </CardHeader>
        
        <CardContent className="pb-3">
          <div className="mb-4">
            <span className="text-3xl font-bold">₹{location.averagePrice.toLocaleString('en-IN')}</span>
            <span className="text-muted-foreground ml-1">avg. price</span>
          </div>
          
          <div className="space-y-2">
            {location.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-3">
          <Button className="w-full" asChild>
            <Link to={`/properties?location=${location.id}`}>
              View Properties
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;