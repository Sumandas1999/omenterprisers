
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyById } from "@/data/properties";
import PropertyDetail from "@/components/properties/PropertyDetail";
import { toast } from "@/components/ui/use-toast";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = () => {
      try {
        const propertyData = getPropertyById(id);
        
        if (propertyData) {
          setProperty(propertyData);
        } else {
          toast({
            title: "Property not found",
            description: "The property you're looking for doesn't exist.",
            variant: "destructive",
          });
          navigate("/properties");
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load property details.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  return (
    <div className="pt-20">
      <PropertyDetail property={property} />
    </div>
  );
};

export default PropertyDetailPage;
