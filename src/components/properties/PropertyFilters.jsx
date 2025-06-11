
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";

const PropertyFilters = ({ filters, setFilters, applyFilters }) => {
  const handlePriceChange = (value) => {
    setFilters({ ...filters, price: value[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({
      search: "",
      type: "all",
      bedrooms: "any",
      bathrooms: "any",
      price: 5000000,
      location: "all"
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Find Your Perfect Property</h2>
        <Button variant="ghost" size="sm" onClick={handleReset} className="text-gray-500">
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <div className="relative mt-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="search"
              name="search"
              placeholder="Search properties..."
              value={filters.search}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="type">Property Type</Label>
          <Select
            value={filters.type}
            onValueChange={(value) => handleSelectChange("type", value)}
          >
            <SelectTrigger id="type" className="mt-1">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Select
            value={filters.location}
            onValueChange={(value) => handleSelectChange("location", value)}
          >
            <SelectTrigger id="location" className="mt-1">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => handleSelectChange("bedrooms", value)}
          >
            <SelectTrigger id="bedrooms" className="mt-1">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Select
            value={filters.bathrooms}
            onValueChange={(value) => handleSelectChange("bathrooms", value)}
          >
            <SelectTrigger id="bathrooms" className="mt-1">
              <SelectValue placeholder="Bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="lg:col-span-2">
          <div className="flex justify-between mb-2">
            <Label htmlFor="price">Max Price: ${filters.price.toLocaleString()}</Label>
          </div>
          <Slider
            id="price"
            min={100000}
            max={10000000}
            step={100000}
            value={[filters.price]}
            onValueChange={handlePriceChange}
            className="mt-3"
          />
        </div>
      </div>

      <Button onClick={applyFilters} className="w-full">
        <Search className="mr-2 h-4 w-4" /> Search Properties
      </Button>
    </div>
  );
};

export default PropertyFilters;
