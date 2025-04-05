"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import { SetStateAction, useState, useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Haman",
    features: [""],
    subtitle: "The Art of Oriental Relaxation",
    temperature: "40 °C",
    humidity: "100%",
    description: [
      `Our Haman is built using marble and ceramics, which creates an atmosphere of sophistication and comfort. One of the unique features is the "starry sky", these are flashing light points of different colors in the steam enviroment, filling the space with a magical atmosphere.`,
    ],
    gallery: [
      "/images/home-6.jpg",
      "/images/massage-4.jpg",
      "/images/extra-2.jpg",
      "/images/extra-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Finish Sauna",
    features: [""],
    subtitle: "Immersion in Scandinavian Traditions",
    temperature: "100 °C",
    humidity: "10%",
    description:
      "The Finnish Sauna made of Canadian cedar, features wooden benches and a stone stove. Dry sauna steam helps prevent colds, rheumatism and obesity, but consultation with a doctor is advised due to potential contraindicators like hypertension and heart conditions.",
    gallery: [
      "/images/home-2.jpg",
      "/images/steam-2.jpg",
      "/images/steam-3.jpg",
      "/images/steam-1.jpg",
    ],
  },
  {
    id: 3,
    title: "Slavic Steam Room",
    features: [""],
    subtitle: "It is our crown jewel",
    temperature: "70 °C",
    humidity: "50%",
    description:
      "Here, traditional rituals are performed using birch oak, and linden brooms. The Slavic steam room is known for its gentle approach, offering a much more comfortable steaming experience. The process feels more like a sacred ritual than a simple hygiene practice",
    gallery: [
      "/images/sauna-3.jpg",
      "/images/steam-3.jpg",
      "/images/sauna-1.jpg",
      "/images/steam-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Relaxation Zone",
    features: [""],
    subtitle: "The art of oriental relaxation",
    temperature: "48 °C",
    humidity: "100%",
    description: `Our Haman is built using marble and ceramics, which creates an atmosphere of sophistication and comfort. One of the unique features is the "starry sky", these are flashing light points of different colors in the steam enviroment, filling the space with a magical atmosphere.`,
    gallery: [
      "/images/spa-relax-2.jpg",
      "/images/bath-3.jpg",
      "/images/spa-relax-3.jpg",
      "/images/massage-2.jpg",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentService = servicesData[activeService];

  const handleServiceChange = (index: SetStateAction<number>) => {
    setActiveService(index);
    setCurrentImageIndex(0);
    setHasInteracted(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentService.gallery.length);
    setHasInteracted(true);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentService.gallery.length - 1 : prev - 1
    );
    setHasInteracted(true);
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setActiveService((prev) => (prev + 1) % servicesData.length);
    }
    if (touchStart - touchEnd < -50) {
      setActiveService((prev) =>
        prev === 0 ? servicesData.length - 1 : prev - 1
      );
    }
  };

  // Autoplay for mobile gallery
  useEffect(() => {
    if(isMobile) {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % currentService.gallery.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }
  }, [isMobile, currentService.gallery.length, activeService]);

  // Mobile View
  
  const mobileView = (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="md:hidden w-full h-full flex flex-col mt-10 px-2"
    >
      {/* Image Gallery with Autoplay */}
      <div className="relative h-80 w-full">
        {currentService.gallery.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt={currentService.title}
              fill
              className="object-cover rounded-3xl"
              sizes={'auto'}
            />
          </motion.div>
        ))}
      </div>

      {/* Service Details */}
      <div className="flex-1 text-amber-50 mt-9">
        <div className="justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-activa">{currentService.title}</h2>
            <p className="text-sm opacity-75">{currentService.subtitle}</p>
          </div>
          <div className="flex text-sm opacity-85 justify-between mt-4">
            <p>Temp: {currentService.temperature}</p>
            <p>Humidity: {currentService.humidity}</p>
          </div>
        </div>

        <p className="text-sm mb-6">{currentService.description}</p>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-full h-1 rounded-full ${
                activeService === index ? "bg-white/30" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* Book Button */}
        <Button
          modalContent
          className="w-full bg-amber-50 text-gray-900 py-3 rounded-full font-semibold hover:bg-amber-200 transition-colors"
        >
          Book a Visit
        </Button>
      </div>
    </div>
  );

  return (
    <motion.section id="services"  className="mt-16 relative h-full w-full items-center justify-center flex bg-cover bg-center bg-[url('/images/grass-1.jpg')] before:absolute before:inset-0 before:bg-black/60 before:z-0 pt-10 md:pt-14 px-4 md:pb-10 md:mb-10">
      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/100 from-20% via-black/90 via-80% to-transparent to-200%" />
      <div className="absolute inset-x-0 bottom-0 md:h-1/4 h-1/2 bg-gradient-to-t from-black/90 from-20% to-transparent" />
      <div className="z-10 md:w-[85vw] h-full md:pb-8">
        <div className="w-full">
          <h1 className="font-activa text-xl md:text-3xl lg:text-5xl text-amber-50 md:mb-10">
            <span className="lg:ml-24 md:ml-14 ml-7 block">
              COMPREHENSIVE SERVICES
            </span>{" "}
            FOR YOUR COMFORT
          </h1>
          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            <div className="flex-1 relative transition-all h-[700px] w-[500px] duration-700">
              <Image
                src={currentService.gallery[currentImageIndex]}
                alt={currentService.title}
                fill
                className=" object-cover rounded-3xl"
                sizes={'auto'}
              />

              {/* Navigation controls */}
              <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 flex justify-between items-center">
                <div className="flex gap-4">
                  <button
                    onClick={prevImage}
                    className="bg-black/20 px-2 py-1 rounded-full text-white hover:bg-black/70 transition-all backdrop-blur-md"
                  >
                    <span className="text-3xl font-thin">&lt;</span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/20 backdrop-blur-md px-2 py-1 rounded-full text-white hover:bg-black/70 transition-all"
                  >
                    <span className="text-3xl font-thin">&gt;</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 text-sm justify-end w-full mr-9">
                  <hr className="border-t-2 border-white/40 max-w-56 w-full" />
                  <p>0{`${currentImageIndex + 1}`}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="flex-1 h-full">
                <div className="place-self-end text-sm text-white/15 text-end flex flex-col gap-1">
                  {servicesData.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceChange(index)}
                      className={`text-end ${
                        activeService === index
                          ? "text-amber-50"
                          : "text-white/30 hover:text-amber-50"
                      } transition-colors`}
                    >
                      <p>{service.title}</p>
                      {service.features.map((feature, i) => (
                        <p key={i}>{feature}</p>
                      ))}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col md:pb-9">
                <div className="flex-1 flex flex-col justify-between max-w-[75%] text-amber-50 gap-4">
                  {/* Service details */}
                  <div className="flex justify-between text-sm ">
                    <div className="flex flex-col mr-3">
                      <h1 className="font-activa text-2xl">
                        {currentService.title}
                      </h1>
                      <p>{currentService.subtitle}</p>
                    </div>
                    <div className="max-w-32 w-full h-full flex flex-col gap-3">
                      <p className="flex gap-2 w-full justify-between text-nowrap">
                        Temperature <span>{currentService.temperature}</span>
                      </p>
                      <p className="flex gap-2 w-full justify-between">
                        Humidity <span>{currentService.humidity}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm mt-2">{currentService.description}</p>
                </div>

                <div className="flex-1 flex gap-4 mt-3 max-h-48 -ml-20 place-self-end lg:mt-5">
                  <Button
                    modalContent
                    className="bg-white/5 backdrop-blur-xl max-h-40 max-w-36 w-full p-1 h-full rounded-2xl justify-items-center font-bold text-amber-50 hover:bg-black-50 hover:text-gray-500 transition-all duration-1000 content-center"
                  >
                    <Image
                      src="/images/wellness-logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                      sizes={'auto'}
                      className="w-16 object-contain"
                    />
                    <p>Book a visit</p>
                  </Button>
                  {currentService.gallery.map((img, index) => (
                    <div
                      key={index}
                      className={`max-h-40 max-w-36 w-full transition-all duration-300 ${
                        hasInteracted && index === currentImageIndex
                          ? "border-2 border-white rounded-lg"
                          : ""
                      }`}
                    >
                      <Image
                        src={img}
                        alt={currentService.title}
                        width={1000}
                        height={1000}
                        className="h-full w-full rounded-lg object-cover"
                        sizes={'auto'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full h-full z-10">{mobileView}</div>
        </div>
      </div>
    </motion.section>
  );
}
