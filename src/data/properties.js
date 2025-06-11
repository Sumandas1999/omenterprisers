export const properties = [
  {
    id: 1,
    title: "Luxury Villa in Patia",
    location: "Bhubaneswar, Odisha",
    price: "₹2,50,00,000",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    type: "Villa",
    isNew: true,
    yearBuilt: 2022,
    description: "This stunning villa in Patia offers luxurious living spaces and modern amenities. Featuring spacious rooms, a modular kitchen, landscaped garden, and dedicated parking. The property includes a master suite with an attached balcony, study room, and servant quarters.",
    image: "luxury-villa-bhubaneswar",
    images: [
      "bhubaneswar-villa-1",
      "bhubaneswar-villa-2",
      "bhubaneswar-villa-3",
      "bhubaneswar-villa-4"
    ]
  },
  {
    id: 2,
    title: "Modern Apartment in Saheed Nagar",
    location: "Bhubaneswar, Odisha",
    price: "₹95,00,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    type: "Apartment",
    isNew: false,
    yearBuilt: 2020,
    description: "Located in the heart of Saheed Nagar, this modern apartment offers comfort and convenience. The open concept living space features vitrified tiles, designer lighting, and a modular kitchen. Building amenities include 24-hour security, power backup, and a community hall.",
    image: "saheed-nagar-apartment",
    images: [
      "saheed-nagar-apartment-1",
      "saheed-nagar-apartment-2",
      "saheed-nagar-apartment-3",
      "saheed-nagar-apartment-4"
    ]
  },
  {
    id: 3,
    title: "Independent House in Chandrasekharpur",
    location: "Bhubaneswar, Odisha",
    price: "₹1,75,00,000",
    bedrooms: 5,
    bathrooms: 4,
    area: 2800,
    type: "House",
    isNew: false,
    yearBuilt: 2015,
    description: "A beautiful independent house in the prime locality of Chandrasekharpur. Spacious rooms, ample natural light, and well-maintained interiors. Close to schools, hospitals, and shopping centers. Features a private garden and covered parking.",
    image: "cspur-house",
    images: [
      "cspur-house-1",
      "cspur-house-2",
      "cspur-house-3",
      "cspur-house-4"
    ]
  },
  {
    id: 4,
    title: "Sea View Apartment",
    location: "Puri, Odisha",
    price: "₹1,20,00,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    type: "Apartment",
    isNew: true,
    yearBuilt: 2023,
    description: "This sea-facing apartment in Puri offers panoramic ocean views and direct beach access. The unit features an open floor plan, large balcony, and modern fittings. Building amenities include a swimming pool, gym, and 24-hour security.",
    image: "puri-sea-view-apartment",
    images: [
      "puri-apartment-1",
      "puri-apartment-2",
      "puri-apartment-3",
      "puri-apartment-4"
    ]
  },
  {
    id: 5,
    title: "Commercial Space in Cuttack",
    location: "Cuttack, Odisha",
    price: "₹3,50,00,000",
    bedrooms: 0,
    bathrooms: 2,
    area: 4000,
    type: "Commercial",
    isNew: false,
    yearBuilt: 2018,
    description: "Prime commercial space located in a busy area of Cuttack. Ideal for showrooms, offices, or retail outlets. Features ample parking space, high visibility, and modern infrastructure.",
    image: "cuttack-commercial-space",
    images: [
      "cuttack-commercial-1",
      "cuttack-commercial-2",
      "cuttack-commercial-3",
      "cuttack-commercial-4"
    ]
  },
  {
    id: 6,
    title: "Plot in Infocity Area",
    location: "Bhubaneswar, Odisha",
    price: "₹80,00,000",
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    type: "Plot",
    isNew: true,
    yearBuilt: 0,
    description: "Residential plot available in the rapidly developing Infocity area of Bhubaneswar. Close to IT parks and educational institutions. Ideal for building your dream home or for investment purposes.",
    image: "infocity-plot-bhubaneswar",
    images: [
      "infocity-plot-1",
      "infocity-plot-2",
      "infocity-plot-3",
      "infocity-plot-4"
    ]
  }
];

export const getPropertyById = (id) => {
  return properties.find(property => property.id === parseInt(id));
};