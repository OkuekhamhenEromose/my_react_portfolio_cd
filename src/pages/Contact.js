import React, { useState } from "react";
import Address from "../img/contact/addresslocation.png";
import { MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle backend API call here
  };

  return (
    <section className="section py-2">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Contact Form */}
          <div>
            <h1 className="h1 mb-2 mt-4">Let's work together</h1>
            <p className="mb-4">
              I’m a Software Engineer driven by innovation and results. Open to
              new opportunities where I can add value and grow — let’s connect!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-input"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-input"
                required
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="contact-input"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="contact-input resize-vertical"
                required
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="btn uppercase">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Map and Contact Info */}
          <div className="mt-4">
            <h3 className="h2 mb-4">Find Me Here</h3>
            <div className="rounded-lg overflow-hidden border border-gray-300 mb-2">
              <img
                src={Address}
                alt="Address Direction Map - Ikeja, Lagos"
                className="w-full h-full object-cover min-h-[430px]"
              />
            </div>

            {/* Address Info */}
            <div className="space-y-1">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="h3">My Location</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Ikeja, Lagos State, Nigeria
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Easily accessible via major highways and public transportation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
