"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Booking from "../booking/booking";

const images = [
  "/images/scrub-3.jpg",
  "/images/sauna-3.jpg",
  "/images/massage-2.jpg",
  "/images/pool.jpg",
];

export default function IMMERSE() {
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop carousel controls
  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  // Mobile autoplay
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextImage, 9000);
      return () => clearInterval(interval);
    }
  }, [isMobile, activeImage]);

  // Desktop Carousel
  const gap = 70; // Gap between images in pixels
  const imageWidth = 750; // Main image width
  const adjacentWidth = 600; // Adjacent image width

  const DesktopCarousel = (
    <div className="hidden md:flex w-full h-[550px] items-center justify-center relative overflow-visible mb-40">
      {images.map((img, index) => {
        // Calculate the raw difference
        let position = index - activeImage;

        // Adjust (wrap) the position if it's outside the "shortest path"
        if (position > images.length / 2) {
          position -= images.length;
        } else if (position < -images.length / 2) {
          position += images.length;
        }

        const isActive = position === 0;
        const isAdjacent = Math.abs(position) === 1;

        // Calculate dynamic scale, opacity, and z-index based on position
        const scale = isActive ? 1 : isAdjacent ? 0.85 : 0.7;
        const opacity = isActive ? 2 : isAdjacent ? 0.8 : 0.6;
        const zIndex = isActive ? 10 : isAdjacent ? 5 : 0;

        // Calculate the horizontal offset based on your image width and gap
        const xOffset = position * (imageWidth - gap);

        return (
          <motion.div
            key={`${img}-${index}`}
            className="absolute h-[500px] cursor-pointer origin-center"
            style={{
              width: isActive ? imageWidth : adjacentWidth,
              x: xOffset,
              scale,
              opacity,
              zIndex,
            }}
            animate={{
              x: xOffset,
              scale,
              opacity,
            }}
            transition={{ type: "spring", stiffness: 70, damping: 30 }}
            onClick={() => !isActive && setActiveImage(index)}
          >
            <div className="w-full h-full relative">
              <Image
                src={img}
                alt="Spa facility"
                fill
                className="rounded-3xl object-cover shadow-xl"
                sizes={'auto'}
              />
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }} // Delays appearance until after image transition
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[730px] flex justify-between z-30"
                >
                  <button
                    onClick={prevImage}
                    className="bg-black/20 px-[.5rem] py-[.5rem] rounded-full backdrop-blur-sm hover:bg-black/50 transition-all"
                  >
                    <span className="text-5xl text-white/50 font-thin">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/20 px-[.5rem] py-[.5rem] flex items-center rounded-full backdrop-blur-sm hover:bg-black/50 transition-all"
                  >
                    <span className="text-5xl text-white/50 font-thin">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Arrows positioned relative to main image */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[730px] flex justify-between z-30">
        <button
          onClick={prevImage}
          className="bg-black/20 px-3 py-[.5rem] rounded-full backdrop-blur-sm hover:bg-black/50 transition-all"
        >
          <span className="text-5xl text-white/50 font-thin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </span>
        </button>
        <button
          onClick={nextImage}
          className="bg-black/20 px-3 flex items-center rounded-full backdrop-blur-sm hover:bg-black/50 transition-all"
        >
          <span className="text-5xl text-white/50 font-thin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </button>
      </div> */}
    </div>
  );

  // Mobile Carousel
  const MobileCarousel = (
    <div
      className="md:hidden w-full relative h-[400px] mb-28"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full mb-3"
        >
          <Image
            src={images[activeImage]}
            alt="Spa facility"
            fill
            className="object-cover rounded-xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className=" flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-full h-1 rounded-full ${
              activeImage === index
                ? "bg-white/30 backdrop-blur-lg"
                : "bg-white/10 backdrop-blur-lg"
            }`}
          />
        ))}
      </div>
    </div>
  );
  return (
    <motion.section
      className="relative h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('/images/grass-2.jpg')] pt-10 md:pt-14 px-4 pb-12"
    >
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/100 from-20% via-black/90 via-80% to-transparent to-200%" />
      <div className="absolute inset-x-0 bottom-0 md:h-1/4 h-1/2 bg-gradient-to-t from-black/90 from-20% to-transparent" />
      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full">
          <h1 className="font-activa text-xl md:text-3xl lg:text-4xl/snug text-center sm:text-start text-amber-50 mb-8">
            <span className="lg:ml-24 md:ml-14 sm:block">
              IMMERSE YOURSELF IN AN ATMOSPHERE
            </span>{" "}
            OF COMFORT AND STYLE
          </h1>
          {/* Carousel Container */}
          {DesktopCarousel}
          {MobileCarousel}
        </div>
        <Booking main={true} />
      </div>
    </motion.section>
  );
}
