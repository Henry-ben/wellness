"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Content data structure
const buttonContents = [
  {
    id: 0,
    bgImage: "/images/oasis-1.jpeg",
    text1:
      "Get bonuses for each visit and use them to pay for the following services",
    text2: "The more often you choose our services, The less you pay",
    textPosition1: "md:ml-40 lg:ml-80 place-self-start",
    textPosition2: "ml-auto lg:mr-24 md:mr-16",
  },
  {
    id: 1,
    bgImage: "/images/oasis-2.jpeg",
    text1:
      "Enjoy the peaceful atmosphere and recieve the utmost attention from our staff",
    text2:
      "For your comfort and privacy we strictly limit the number of visitors at the same time",
    textPosition1: "ml-auto",
    textPosition2: "mr-auto",
  },
  {
    id: 2,
    bgImage: "/images/oasis-3.jpg",
    text1:
      "The interior of our salon features canadian cedar and himalayan salt highlighting the premium quaklity of the design",
    text2:
      "Every element is carefully crafted to create a sense of comfort and sophistication for our guests",
    textPosition1: "md:mr-40 lg:mr-80 w-64 ",
    textPosition2: "place-self-end",
  },
  {
    id: 3,
    bgImage: "/images/oasis-4.jpg",
    text1: "We thrive to provide you with the highest form of comfort",
    text2:
      "In the relaxation area complimentary refreshments are available for our guests",
    textPosition1: "md:ml-20 lg:ml-44",
    textPosition2: "md:mr-20 lg:mr-96 place-self-end",
  },
];

export default function Oasis() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      className="relative md:h-screen h-full w-full flex items-center justify-center pt-6 md:pt-14 md:pb-4"
    >
      
     
      <div className="h-full flex flex-col justify-between items-center w-full px-5 md:pb-7 pb-7 md:px-4 bg-cover bg-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5, }}
            className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black/30 before:z-0"
            style={{
              backgroundImage: `url(${buttonContents[activeIndex].bgImage})`,
            }}
          />
        </AnimatePresence>
        {/* Gradient Overlays */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/100 from-10% via-black/90 via-40% to-transparent to-100%" />
        <div className="absolute inset-x-0 bottom-0 md:h-1/4 h-1/2 bg-gradient-to-t from-black/90 from-20% to-transparent" />

        <div className="w-full flex flex-col h-full before:z-10 px-4 md:px-[100px] md:pt-14 z-10">
          <h1 className="font-activa text-xl md:text-3xl lg:text-5xl text-amber-50 md:mb-16 mb-14 z-10 w-full lg:ml-20 md:ml-14 ml-5">
            AN OASIS OF RELAXATION
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial="hidden"
              animate="visible"
              exit="0"
              transition={{ duration: 0.5 }}
              className="flex flex-col md:gap-3 gap-10 mb-14"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className={`w-56 md:w-[310px] h-auto md:text-sm text-xs text-amber-50 bg-white/30 backdrop-blur-xl md:py-6 px-3 py-4 md:px-[22px] rounded-2xl ${buttonContents[activeIndex].textPosition1}`}
              >
                {buttonContents[activeIndex].text1}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 200 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className={`w-56 md:w-[310px] h-auto md:text-sm text-xs text-amber-50 bg-white/30 backdrop-blur-xl md:py-6 px-3 py-4 md:px-[22px] rounded-2xl ${buttonContents[activeIndex].textPosition2}`}
              >
                {buttonContents[activeIndex].text2}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="md:flex gap-4 w-[90vw]">
          {[
            "CUMMULATIVE BONUS SYSTEM",
            "LIMITED NUMBER OF PEOPLE",
            "PREMIUM FINNISH",
            "ADDITIONAL AMENITIES",
          ].map((name, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`md:p-4 p-4 backdrop-blur-sm w-full ${
                activeIndex === index
                  ? "bg-white/20 border-white/30 border-2"
                  : "bg-white/5 hover:bg-white/10"
              } transition-all duration-300 mb-2 text-amber-50 rounded-2xl flex flex-col md:gap-2`}
            >
              <h1 className="md:text-base text-sm font-medium md:font-activa">
                {name}
              </h1>
              <p className="opacity-60 ml-auto hidden md:block">0{index + 1}</p>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
