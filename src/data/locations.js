export const locations = [
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    averagePrice: 12000000,
    image: "bhubaneswar-skyline-new",
    features: [
      "Capital city with modern infrastructure",
      "Growing IT and education hub",
      "Mix of residential and commercial properties",
      "Excellent connectivity",
      "Smart city initiatives"
    ],
    isPopular: true
  },
  {
    id: "cuttack",
    name: "Cuttack",
    averagePrice: 8000000,
    image: "cuttack-cityscape-new",
    features: [
      "Historic city with commercial importance",
      "Silver city known for filigree work",
      "Developing real estate market",
      "Good for traditional homes",
      "Proximity to Bhubaneswar"
    ],
    isPopular: true
  },
  {
    id: "puri",
    name: "Puri",
    averagePrice: 9000000,
    image: "puri-beach-properties-new",
    features: [
      "Popular tourist destination",
      "Properties with sea views",
      "Growing demand for vacation homes",
      "Religious significance",
      "Good rental potential"
    ],
    isPopular: false
  },
  {
    id: "rourkela",
    name: "Rourkela",
    averagePrice: 6000000,
    image: "rourkela-downtown-new",
    features: [
      "Industrial city with steel plant",
      "Affordable housing options",
      "Growing infrastructure",
      "Educational institutions",
      "Good for long-term investment"
    ],
    isPopular: false
  }
];

export const getLocationById = (id) => {
  return locations.find(location => location.id === id);
};