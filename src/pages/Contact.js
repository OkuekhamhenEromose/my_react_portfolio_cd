import React, { useState } from 'react'; 
import Address from '../img/contact/addresslocation.png';
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">
                Let's work together
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Nesciunt sit illo esse commodi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300 text-sm"
                  required
                >
                  <option value="" className="bg-gray-800">Select a service</option>
                  <option value="web-development" className="bg-gray-800">Web Development</option>
                  <option value="mobile-development" className="bg-gray-800">Mobile Development</option>
                  <option value="ui-ux-design" className="bg-gray-800">UI/UX Design</option>
                  <option value="consulting" className="bg-gray-800">Consulting</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300 resize-vertical text-sm"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="flex flex-col h-full">
            {/* Map Container - Takes most of the height */}
            <div className="flex-grow mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Find Me Here</h3>
              <div className="h-full rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src={Address} 
                  alt="Address Direction Map - Ikeja, Lagos" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
            
            {/* Address Information - Placed below the map */}
            <div className="pt-12">
              <div className="flex items-center mb-1"> 
                <MapPin className="w-4 h-4 text-green-400 mr-2" />
                <h4 className="font-semibold text-white text-sm">My Location</h4>
              </div>
              <p className="text-gray-300 text-xs">
                Ikeja, Lagos State, Nigeria
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Easily accessible via major highways and public transportation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;