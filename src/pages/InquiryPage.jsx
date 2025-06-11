import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { getPropertyById } from "@/data/properties";

const InquiryPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyId = queryParams.get("property");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyInterest: propertyId || "",
    message: "",
    preferredContact: "email",
    budget: "",
    timeframe: "1-3 months"
  });

  const [property, setProperty] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (propertyId) {
      const propertyData = getPropertyById(propertyId);
      if (propertyData) {
        setProperty(propertyData);
        setFormData(prev => ({
          ...prev,
          message: `I'm interested in learning more about "${propertyData.title}" located in ${propertyData.location}.`
        }));
      }
    }
  }, [propertyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your inquiry. Our team will contact you shortly.",
      });
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyInterest: "",
        message: "",
        preferredContact: "email",
        budget: "",
        timeframe: "1-3 months"
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Get in touch with our team of real estate experts to find your perfect property
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us an Inquiry</h2>
            
            {property && (
              <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <p className="font-medium mb-2">You're inquiring about:</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={property.title}
                     src="https://images.unsplash.com/photo-1685279053124-f47a436a9c1e" />
                  </div>
                  <div>
                    <h3 className="font-bold">{property.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{property.location} - {property.price}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) => handleSelectChange("preferredContact", value)}
                  >
                    <SelectTrigger id="preferredContact">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="either">Either</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => handleSelectChange("budget", value)}
                  >
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1m">Under $1 million</SelectItem>
                      <SelectItem value="1m-3m">$1 - $3 million</SelectItem>
                      <SelectItem value="3m-5m">$3 - $5 million</SelectItem>
                      <SelectItem value="5m-10m">$5 - $10 million</SelectItem>
                      <SelectItem value="over-10m">Over $10 million</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select
                    value={formData.timeframe}
                    onValueChange={(value) => handleSelectChange("timeframe", value)}
                  >
                    <SelectTrigger id="timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-3 months">1-3 months</SelectItem>
                      <SelectItem value="3-6 months">3-6 months</SelectItem>
                      <SelectItem value="6-12 months">6-12 months</SelectItem>
                      <SelectItem value="just-browsing">Just browsing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {!property && (
                <div className="space-y-2">
                  <Label htmlFor="propertyInterest">Property Interest</Label>
                  <Input
                    id="propertyInterest"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    placeholder="Specific property or location you're interested in"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide any additional details about your property requirements..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting</span>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Real Estate Avenue<br />
                    Luxury District<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-medium">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-medium">Email:</span> info@luxestate.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Hours:</span> Monday - Friday: 9am - 6pm
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-[400px] bg-gray-100 dark:bg-gray-800">
              <img  
                className="w-full h-full object-cover" 
                alt="Map location of our office"
               src="https://images.unsplash.com/photo-1562021536-4cf14536f213" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
