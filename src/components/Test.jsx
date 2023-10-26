"use client";
import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <section id="test" className="flex flex-col gap-3 text-center p-20">
      <p className="font-bold text-center">We take Privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
        &quot;We Won&apos;t share your answers with anyone.
        <br /> (and won&apos;t ever tell you which friends said what about
        you)&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center text-md">
        <p className="">with Love, </p>
        <motion.p
          variants={{
            initial: {
              opacity: 0,
              x: -10,
            },
            animate: {
              opacity: [0, 0, 0, 0.5, 1],
              x: [0, 0, 2.5, 3, 2.7, 0],
              transition: {
                duration: 1.3,
              },
            },
          }}
          height="70"
          initial="initial"
          animate="animate"
          viewBox="0 0 450 150"
        >
          Team Ahead
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
          className="pt-3"
        >
          <button className="rounded-3xl p-4 px-6 text-white bg-black">
            Start Test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;