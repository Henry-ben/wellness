"use client";

import { useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export default function Modal({ open, closeModal }: ModalProps) {
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

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" id="booking" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Full-screen background image */}
          <Dialog.Panel className="fixed inset-0 bg-cover bg-center bg-[url('/images/envelop-1.png')] flex items-center justify-center">
            <div className="relative justify-items-center bg-white/5 backdrop-blur-lg rounded-3xl lg:p-14 sm:p-9 p-3 mx-2 my-5 lg:max-w-5xl md:max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute sm:top-4 top-1 sm:right-4 right-2 text-white mb-3"
              >
                ✕
              </button>
              <section className="justify-items-center text-center sm:flex sm:text-start md:justify-between sm:items-center md:items-start w-full">
                <div className="text-amber-50 mt-2 mb-4">
                  <h1 className="px-1 font-activa mb-4 md:mb-2 text-lg md:text-2xl">
                    BOOK YOUR VISIT RIGHT NOW
                  </h1>
                  <p className="text-sm max-w-lg">
                    Steaming services are available by appointment only. Dont
                    miss out on the opportunity to get maximum comfort and
                    relaxation
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
                      className="w-full rounded-full bg-[#0f3529] lg:py-4 py-3 text-amber-50 placeholder-amber-50 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                      required
                    />
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Phone number"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      className="w-full rounded-full bg-[#0f3529] text-amber-50 placeholder-amber-50 lg:py-4 py-3 text-center text-sm focus:placeholder-transparent focus:outline-none focus:ring-0"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full transition bg-[#f3e2d0] text-black lg:py-4 py-3 text-sm font-medium"
                    >
                      Book Now
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
