"use client";

import { TIFE_DETAILS } from "@/lib/utils";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  // FaFacebookF,
  FaClock,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

interface prop {
  main: boolean;
}

const Booking = ({ main }: prop) => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
  });

  const sendWhatsappMessage = (values: { name: string, phonenumber: string }) => {
      // Replace with your phone number including the country code (without + sign)
      const phoneNumber = '2349085552450' ;
      // Customize your message
      const message = encodeURIComponent (`Hello My name is ${values.name}, I'm interested in booking your service`);
      // WhatsApp API URL
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      // Open WhatsApp in a new tab/window
      window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsappMessage(formData);
  };

  if (main) {
    return (
      <div className="bg-white/10 backdrop-blur-lg sm:flex max-w-5xl rounded-3xl px-2">
        <section id="contact" className="justify-items-center rounded-2xl my-5 py-2 px-2 text-start md:p-6 md:justify-between md:items-center w-full">
          <div className="text-amber-50 mt-2 mb-4">
            <h1 className="px-1 font-activa mb-4 md:mb-2 text-lg md:text-2xl">
              BOOK YOUR VISIT RIGHT NOW
            </h1>
            <p className="text-sm max-w-lg">
              Steaming services are available by appointment only. Dont miss out
              on the opportunity to get maximum comfort and relaxarion
            </p>
          </div>
          <div className="max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-full bg-[#0f3529] py-3 text-amber-50 placeholder-amber-50 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                required
              />
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full rounded-full bg-[#0f3529] text-amber-50 placeholder-amber-50 py-3 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full transition bg-[#f3e2d0] text-black py-3 text-sm font-medium"
              >
                Book Now
              </button>
            </form>
          </div>
        </section>
        <section className="justify-items-center rounded-2xl my-5 py-2 px-2 text-start md:p-6 max-w-5xl md:justify-between md:items-center w-full">
          <div className="text-amber-50 mt-2 mb-4">
            <h1 className="px-1 font-activa mb-4 md:mb-2 text-lg md:text-2xl">
              CONTACT
            </h1>
            <p className="text-sm max-w-lg">
              Contact us for more information or support. We&#39;re always ready to
              help
            </p>
          </div>
          <div className="flex flex-col gap-3 text-amber-50 w-full">
            <div className="flex items-center gap-3">
              <a
                href={TIFE_DETAILS.address.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
              >
                <FaMapMarkerAlt className="w-3 h-3" />
              </a>
              <span>{TIFE_DETAILS.address.value}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={TIFE_DETAILS.phone.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
              >
                <FaPhoneAlt className="w-3 h-3" />
              </a>
              <span><a href={TIFE_DETAILS.phone.url}>{TIFE_DETAILS.phone.label}</a></span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
              >
                <FaClock className="w-3 h-3" />
              </div>
              <span>Tues - Sat 10:00-20:00</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={TIFE_DETAILS.email.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
              >
                <FaEnvelope className="w-3 h-3" />
              </a>
              <span>{TIFE_DETAILS.email.label}</span>
            </div>
            <div className="sm:flex-row flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={TIFE_DETAILS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
                >
                  <FaInstagram className="w-3 h-3" />
                </a>
                <span>We&#39;re on Instagram</span>
              </div>
              {/* facebook link */}
              {/* <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 transition p-1 border-2 border-amber-100 rounded-full"
                >
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <span>We&#39;re on Facebook</span>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div id="booking" className="px-4 w-full justify-items-center">
        <section className="justify-items-center text-center lg:rounded-3xl rounded-2xl mx-2 my-5 py-2 px-2 bg-white/5 backdrop-blur-lg sm:flex sm:text-start lg:p-10 md:p-7 lg:max-w-5xl md:max-w-3xl md:justify-between md:items-center w-full">
          <div className="text-amber-50 mt-2 mb-4">
            <h1 className="px-1 font-activa mb-4 md:mb-2 text-lg md:text-2xl">
              BOOK YOUR VISIT RIGHT NOW
            </h1>
            <p className="text-sm max-w-lg">
              Steaming services are available by appointment only. Dont miss out
              on the opportunity to get maximum comfort and relaxation
            </p>
          </div>
          <div className="max-w-96 w-full">
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-full bg-[#0f3529] py-3 text-amber-50 placeholder-amber-50 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                required
              />
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full rounded-full bg-[#0f3529] text-amber-50 placeholder-amber-50 py-3 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full transition bg-[#f3e2d0] text-black py-3 text-sm font-medium"
              >
                Book Now
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
};

export default Booking;
