"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Booking from "../booking/booking";

const services = [
  { title: "SCRUB", image: "/images/scrub-1.jpg" },
  { title: "STEAMING WITH BROOMS ", image: "/images/extra-3.jpg" },
  { title: "MASSAGE", image: "/images/scrub-4.jpg" },
  { title: "SALON RENTAL", image: "/images/extra-1.jpg" },
];

export default function Additional() {
  return (
    <motion.section
      className="relative h-full w-full flex items-center justify-center bg-cover bg-center bg-[url('/images/grass-1.jpg')] before:absolute before:inset-0 before:bg-black/60 before:z-0 pt-10 md:pt-14 px-4 md:mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-1/3 bg-black/70" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="z-10">
        <div className="w-full">
          <h1 className="font-activa text-xl md:text-3xl lg:text-5xl text-amber-50 lg:ml-24 md:ml-14 ml-7">
            ADDITIONAL SERVICES
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-4 mt-24 md:mt-24 md:mb-28 mb-24 lg:mb-44 lg:mt-36 min-w-[85vw] mr-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative w-full h-52 md:h-72 lg:h-[400px] overflow-hidden rounded-3xl flex
                    ${index === 0 || index === 2 ? "-mt-16" : ""}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes={'auto'}
                  style={{'objectFit': 'cover',}}
                  className=" w-full rounded-3xl border border-black"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/100 from-10% via-black/30 via-30% to-transparent to-90% flex items-end justify-center p-1 pb-4">
                  <p className="text-sm md:text-lg lg:text-2xl text-center font-activa text-amber-50 w-full">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Booking main={false} />
      </div>
    </motion.section>
  );
}
