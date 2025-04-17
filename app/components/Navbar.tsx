"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Professionals", path: "/professionals" },
    { name: "Services", path: "/services" },
    { name: "Social Commitment", path: "/socialcommitment" },
    { name: "Careers", path: "/careers" },
    { name: "News & Insights", path: "/news&insight", isItalic: true },
    { name: "Location", path: "/locations", isItalic: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow-sm">
      <div className=" p-2 md:p-1 py-1 border-b border-black bg-[#fdefe0] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
            width={100}
            height={100}
              src="/logo.svg"
              alt="Evian & Co Attorneys"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Get Started Button and Menu Button */}
          <div className="flex gap-2 md:gap-10 items-center">
            <Link
              href="/start-project"
              className="hidden sm:flex items-center bg-[#182492] text-white px-3 py-1 md:px-4 md:py-2 rounded-3xl hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              Get Started
              <BsArrowRight className="ml-2" />
            </Link>

            <button
              onClick={toggleMenu}
              className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="mr-2 text-gray-700 text-sm md:text-base">MENU</span>
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Close Button (X) - Top Right */}
          <div className="flex justify-end p-4 md:p-6">
            <button 
              onClick={toggleMenu}
              className="text-red-600 hover:text-red-800"
            >
              <IoClose size={32} />
            </button>
          </div>

          {/* Menu Links - Right Aligned */}
          <div className="flex-grow flex flex-col items-end justify-center p-6 md:p-8">
            <div className="space-y-6 md:space-y-8 text-right">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={toggleMenu}
                  className={`
                    block text-xl md:text-2xl font-medium
                    ${pathname === link.path ? 'text-blue-700' : 'text-gray-800'}
                    ${link.isItalic ? 'italic text-blue-700' : ''}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Get Started Button */}
          <div className="px-6 pb-4 flex justify-end sm:hidden">
            <Link
              href="/start-project"
              onClick={toggleMenu}
              className="flex items-center bg-[#182492] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition-colors"
            >
              Get Started
              <BsArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Social Media Icons - Bottom Left */}
          <div className="p-6 md:p-8 flex">
            <div className="flex space-x-4 md:space-x-6">
              <Link href="https://linkedin.com" className="text-gray-800">
                <FaLinkedin size={20} className="md:w-6 md:h-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-800">
                <FaXTwitter size={20} className="md:w-6 md:h-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-800">
                <FaInstagram size={20} className="md:w-6 md:h-6" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-800">
                <FaYoutube size={20} className="md:w-6 md:h-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}