"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Wellness() {
  return (
    <motion.section
      className="relative md:h-full h-full w-full flex items-center justify-center pt-10 md:pt-10"
      id="about"
    >
      <div className=" h-full flex justify-between items-center md:w-[85vw] w-full px-5 md:pb-10 bg-cover bg-center bg-[url('/images/home-3.jpg')] before:absolute before:inset-0 before:bg-black/40 before:z-0">
        <div className="w-full flex flex-col h-full md:px-0 md:pt-14 md:mr-6 z-10 ">
          {/* Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/100 from-20% via-black/90 via-80% to-transparent to-200%" />
        <div className="absolute inset-x-0 bottom-0 md:h-1/4 h-1/2 bg-gradient-to-t from-black/90 from-20% to-transparent" />
          <h1 className=" font-activa text-xl md:text-3xl lg:text-5xl text-amber-50 md:mb-4 mb-8 z-20 w-full">
            <span className="lg:ml-20 md:ml-14 ml-5 block">
              A WELLNESS SPA COMPLEX{" "}
            </span>{" "}
            IN THE HEART OF WARSAW
          </h1>
          <div className="flex justify-center items-center z-10">
            <div className="flex-1 flex flex-col">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{  }}
                variants={{
                  hidden: {},
                  visible: {},
                }}
                className="flex flex-col max-h-[310px] h-full lg:gap-16 gap-8 z-20 mb-44 md:mb-0 text-amber-50"
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  className="w-72 lg:w-[350px] h-auto lg:text-sm text-xs bg-white/30 backdrop-blur-xl lg:py-6 px-3 py-4 lg:px-[22px] rounded-2xl xl:ml-24 lg:ml-10 mr-2 text-amber-50"
                >
                  We were inspired to create a space for true relaxation of body
                  and soul, with a focus on the beloved slavic tradition of
                  broom steaming
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  className="w-72 lg:w-[350px] h-auto lg:text-sm text-xs bg-white/30 backdrop-blur-xl lg:py-6 px-3 py-4 lg:px-[22px] rounded-2xl ml-auto md:mr-10"
                >
                  AB Wellness is a comprehensive centre offering a range of
                  services, including a hamman, Finish sauna, Russian steam
                  room, relaxation area, jacuzzi, a terrace with a cold plunge
                  pool, and an open fire
                </motion.p>
              </motion.div>
              <button
                type="submit"
                className="w-[80vw] place-self-center md:place-self-start px-8 rounded-full transition bg-[#f3e2d0] text-black py-3 text-sm font-medium md:w-fit z-20 lg:ml-24 mt-4"
              >
                Find Out More
              </button>
            </div>

            <div className="flex-1 max-h-[600px] max-w-[430px] hidden h-full w-full z-10 md:flex bg-gradient-to-l from-black/100 from-70% via-black/90 via-70% to-black/80 to-70% rounded-3xl -mr-10">
              <Image
                src="/images/random-3.jpg"
                alt="wellness"
                width={1000}
                height={1000}
                className=" rounded-2xl object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
