"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          We are here to help you with any questions or inquiries you may have.
          Please feel free to reach out to us using the form below.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Information */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Contact Information
          </h2>

          <p className="text-lg text-gray-600 mb-4">Phone: +1 (972) 832-8638</p>
        </section>
      </section>
    </main>
  );
}
