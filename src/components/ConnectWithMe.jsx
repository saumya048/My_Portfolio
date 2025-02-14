import React, { useState } from "react";

const ConnectWithMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Connect With Me
        </h2>
        <p className="text-center text-gray-400 mt-2">I'd love to hear from you!</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 rounded-lg transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-blue-500 hover:text-blue-400 text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-400 text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-500 text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Success Popup */}
        {showPopup && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-md shadow-lg">
            Thank you! Your message has been sent. 😊
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWithMe;
