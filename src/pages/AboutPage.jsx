import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, TrendingUp, Clock, Shield } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Mr. Om Prakash",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in Odisha real estate, Mr. Prakash has built OM ENTERPRISERS into a premier agency serving clients across the state.",
      image: "om-prakash-ceo"
    },
    {
      name: "Mrs. Anita Sahoo",
      position: "Chief Property Officer",
      bio: "Anita's expertise in property valuation and market analysis ensures our clients receive the most accurate and valuable information for Odisha properties.",
      image: "anita-sahoo-cpo"
    },
    {
      name: "Mr. Rajesh Mohanty",
      position: "Head of Client Relations",
      bio: "Rajesh's dedication to exceptional client service has established OM ENTERPRISERS' reputation for personalized and attentive care in Odisha.",
      image: "rajesh-mohanty-hcr"
    },
    {
      name: "Ms. Priya Das",
      position: "Investment Advisor",
      bio: "Priya specializes in helping clients build strategic real estate portfolios in Odisha that align with their long-term financial goals.",
      image: "priya-das-ia"
    }
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centered Approach",
      description: "We prioritize our clients' needs and preferences, providing personalized service throughout the entire process."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence in Service",
      description: "We strive for excellence in every aspect of our business, from property selection to client communication."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Market Expertise",
      description: "Our team continuously analyzes market trends in Odisha to provide clients with the most accurate and valuable information."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Response",
      description: "We understand the importance of time in real estate decisions and ensure prompt communication and action."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity & Transparency",
      description: "We conduct our business with the highest ethical standards, ensuring transparency in all transactions."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "We carefully vet all properties in our portfolio to ensure they meet our high standards of quality and value."
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About OM ENTERPRISERS</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Discover our story, mission, and the team behind our exceptional real estate services in Bhubaneswar and Odisha
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Founded in 2005, OM ENTERPRISERS began with a simple mission: to provide exceptional real estate services in Bhubaneswar and across Odisha, building lasting relationships with our clients.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Over the years, we've grown from a local agency to a recognized leader in Odisha's real estate market, serving clients looking for properties in Bhubaneswar, Cuttack, Puri, and beyond.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our success is built on our commitment to understanding each client's unique needs and providing personalized service that exceeds expectations. We believe that finding the perfect property is about more than just location and amenities—it's about finding a place where our clients can create memories and build their future in Odisha.
            </p>
            <Button size="lg" asChild>
              <Link to="/inquiry">Contact Us</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden"
          >
            <img  
              className="w-full h-auto" 
              alt="OM ENTERPRISERS office building in Bhubaneswar"
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            These principles guide everything we do at OM ENTERPRISERS, from how we interact with clients to how we select properties for our portfolio in Odisha.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-12">
            Our experienced team of real estate professionals is dedicated to providing exceptional service and expertise in the Odisha property market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={member.name}
                   src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;