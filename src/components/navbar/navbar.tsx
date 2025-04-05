"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TIFE_DETAILS } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Added the isOpen state

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Booking", href: "#booking" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed min-h-[68px] md:min-h-[84px] top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-1 px-1 md:px-10">
        {/* Left-side Desktop Links */}
        <div className="hidden md:flex flex-1 justify-end lg:gap-28 md:gap-14 gap-8">
          {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
            <Link key={link.name} href={link.href} >
              <motion.span
                className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-xl md:text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Logo (Centered on Desktop) with Bottom-to-Top Animation */}
        <Link href="/" className="md:px-14 lg:px-28 md:flex md:justify-center md:my-2 ml-2">
          <div
            className="w-14 h-14 md:h-16  sm:w-full cursor-pointer flex justify-center items-center">
            <Image
              src="/images/wellness-logo.png"
              alt="wellness logo"
              width={70}
              height={70}
              className="w-[4.5rem] object-contain"
              priority
              sizes={'auto'}
            />
          </div>
        </Link>

        {/* Right-side Desktop Links */}
        <div className="hidden md:flex flex-1 lg:gap-28 md:gap-14 gap-8">
          {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.span
                className="text-amber-50 hover:text-white transition-colors duration-300 lg:text-xl md:text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-3 mr-2">
          <a
            href={TIFE_DETAILS.phone.url} // Replace with actual phone number
            className="text-amber-100  transition p-2 border-2 border-amber-100 rounded-full"
          >
            <PhoneIcon className="w-3 h-3" />
          </a>
          <a
            href={TIFE_DETAILS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-100 transition p-2 border-2 border-amber-100 rounded-full"
          >
            <FaInstagram className="w-3 h-3" />
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)} // Toggle isOpen on click
          >
            {isOpen ? (
              <XMarkIcon className="w-9 h-9 text-amber-100 font-extralight" />
            ) : (
              <Bars3Icon className="w-9 h-9 text-amber-100" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#765331]/50 backdrop-blur-lg py-4 shadow-md h-screen"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center gap-[2.5rem] h-[calc(100%-68px)] justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-white font-medium text-xl hover:text-teal-600 transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
