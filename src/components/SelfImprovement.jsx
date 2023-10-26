"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const itemAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2 } }),
};

const contentData = [
  {
    emoji: "🟣",
    title: "It's not easy as 1-2-3",
    description:
      "The journey may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
  },
  {
    emoji: "🟣",
    title: "Old habits are hard to break",
    description:
      "And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use.",
  },
  {
    emoji: "🟣",
    title: "You and your motivation don't have a long-term relationship.",
    description:
      "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.",
  },
  {
    emoji: "🟣",
    title: "Books just don't offer practical solutions.",
    description:
      "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towars your goals. Learning just a bit, then immediately springing into action.",
  },
  {
    emoji: "🟣",
    title: "Inspiration is great, but then what.",
    description:
      "We make sure your energy from all the content you consume does not fizzle out.",
  },
];

const SelfImprovement = () => {
  return (
    <section id="manifesto" className="p-20 my-24">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-xl font-bold text-black">
            Wrong with self-improvement & how we&apos;re fixing it.
          </div>
          <br />
          <div className="text-6xl pb-3 font-bold text-black">
            Self-improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center"
        >
          <Image src="/blue-ghost.png" alt="" width={70} height={70} />
        </motion.div>
      </div>
      <div className="timeline px-20 pt-14 h-96 overflow-y-scroll mx-auto max-w-screen-lg">
        <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              className="max-w-[40rem] relative align-top pl-8"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={itemAnimation}
            >
              <div style={{ left: "-12px" }} className="absolute">
                {item.emoji}
              </div>
              <p className="text-xl font-bold">{item.title}</p>
              <p className="mt-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;