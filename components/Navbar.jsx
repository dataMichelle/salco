"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link href="/">Salco Global Solutions</Link>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-600"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              className="block text-gray-600 hover:text-primary transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-primary transition duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-600 hover:text-primary transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block text-gray-600 hover:text-primary transition duration-300"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-primary transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
