import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Address from "../img/contact/addresslocation.png";
import { MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Animation variants
const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const leftSideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const rightSideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: 'success' or 'error'
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    const { name, email, subject, message } = formData;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!name || !email || !subject || !message) {
      showMessage("Please fill in all fields", "error");
      setIsLoading(false);
      return;
    }

    if (!email.match(emailPattern)) {
      showMessage("Please enter a valid email address", "error");
      setIsLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        "service_i3co2is", // Replace with your EmailJS service ID
        "template_jvifwwf", // Replace with your EmailJS template ID
        formRef.current,
        "8TSj0kj-2cY_yk4X2" // Replace with your EmailJS public key
      );

      showMessage("Message sent successfully!", "success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      showMessage("Failed to send message. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="section py-2"
      initial="hidden"
      animate="visible"
      variants={leftSideVariants}
    >
      <div className="container mx-auto px-4 pt-12">
        {/* Message Notification */}
        {/* Message Notification */}
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed right-4 z-50 px-3 py-2 rounded-md shadow-md max-w-sm text-sm font-medium flex items-center ${
              message.type === "success" ? "bg-green-400" : "bg-red-400"
            }`}
            style={{ color: "#003366", top: "100px" }} // ← moved down by 170px
          >
            {message.type === "success" ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            <span>{message.text}</span>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Side - Contact Form */}
          <motion.div variants={leftSideVariants}>
            {/* Heading */}
            <motion.h1 className="h1 mb-2 mt-4" variants={fadeInDown}>
              Let&apos;s work together
            </motion.h1>

            {/* Paragraph */}
            <motion.p className="mb-4" variants={fadeInDown}>
              I'm a Software Engineer driven by innovation and results. Open to
              new opportunities where I can add value and grow — let's connect!
            </motion.p>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-input"
                required
                variants={fadeInLeft}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-input"
                required
                variants={fadeInLeft}
              />

              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="contact-input"
                required
                variants={fadeInLeft}
              />

              <motion.textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="contact-input resize-vertical"
                required
                variants={fadeInLeft}
              ></motion.textarea>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`btn uppercase flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                variants={fadeInLeft}
                whileHover={!isLoading ? { scale: 1.05, x: 5 } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Map and Contact Info */}
          <motion.div className="mt-4" variants={rightSideVariants}>
            <motion.h3 className="h2 mb-4" variants={fadeInDown}>
              Find Me Here
            </motion.h3>

            <motion.div
              className="rounded-lg overflow-hidden border border-gray-300 mb-2"
              variants={fadeInRight}
            >
              <img
                src={Address}
                alt="Address Direction Map - Ikeja, Lagos"
                className="w-full h-full object-cover min-h-[430px]"
              />
            </motion.div>

            {/* Address Info */}
            <motion.div className="space-y-1" variants={fadeInRight}>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
