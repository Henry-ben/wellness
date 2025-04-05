"use client";

import { motion } from "framer-motion";
import Button from "@/components/button/button";
import Image from "next/image";

export default function Hero() {;

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center before:absolute before:inset-0 before:bg-black/30 before:z-0 pt-48">
      <Image
        src="/images/Hero-img.jpg"
        alt="Hero image"
        fill
        sizes={'auto'}
        className="absolute inset-0 object-cover bg-center"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/90 from-40% to-transparent to-90%" />
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-white justify-items-center items-center"
      >
        <div className="z-10 relative px-12 justify-items-center items-center -mt-32">
          <h1 className="md:mb-10 mb-3 lg:text-7xl/tight md:text-5xl/tight text-3xl/normal text-white font-activa max-w-[1000px] ">
            TIFÉ WELLNESS
            <span className="block">
              A SPACE FOR RELAXATION OF BODY AND SOUL
            </span>
          </h1>
          <p className="md:text-lg text-amber-50 hidden sm:block">
            Discover a new source of energy and vitality.
          </p>
          <Button
            className="md:mt-6 mt-5 bg-black text-amber-50 px-10 py-4 rounded-full"
            modalContent
          >
            Book a Visit
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
