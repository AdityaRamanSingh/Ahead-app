"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Power through, even when the going gets tough",
    content:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
  },
  {
    title: "Learn more about who you are and where you want to go",
    content:
      "We ask the right questions to help you better understand why you do things the way you do.",
  },
  {
    title: "Play and grow together with others on the same journey",
    content:
      "Ahead feels like a game, not like a chore See yourself grow every day towards achieving your goals!",
  },
  {
    title: "Master how to make it happen in real life",
    content:
      "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.",
  },
  {
    title:
      "Learn about practical skills that you can actually use in real life",
    content:
      "We teach you smart psychological techniques and habit-forming strategies that are easy to apply.",
  },
  {
    title: "Get support that's made for your needs",
    content:
      "We build your personal roadmap of lessons and actions towards your goals.",
  },
];

const WorkWithUs = () => {
  return (
    <div id="wwu" className="px-20 py-4">
      <section className="m-20 rounded-2xl bg-violet-100 p-12 px-16">
        <div className="flex  justify-between items-center text-5xl font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="ml-5">Work with us</span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-violet-800 mr-10">ahead</span>
          </motion.div>
        </div>
        <div className="mt-12 flex gap-20 overflow-hidden">
          <div className="grow ml-5">
            <div className="rounded-2xl bg-white  pt-8 max-w-[30rem] shadow-lg ">
              <motion.div
                className="pl-4 inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                variants={{
                  visible: {
                    opacity: [0.8, 0.9, 1.01, 1],
                    scale: [0.6, 0.55, 0.8, 1],
                    rotate: [0, 45, -35, 10, 0],
                  },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <Image width={60} height={60} alt="" src="/newghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4">
                <h2 className="font-bold">About</h2>
                <p className="font-normal">
                  At ahead our goal is to make self-improvement fun and lasting.
                  We know there is a way how to make it work. And that is what
                  ahead is all about!
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8  p-4 rounded-2xl  mt-8 bg-orange-50">
                <h2 className="font-bold">Product</h2>
                <p className="font-normal">
                  Sure, you could spend ages reading books or sitting in
                  seminars on how to become a better spouse, parent, or manager
                  - like we did...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto pr-6 custom-scrollbar">
            {articles.map((article, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]"
                key={index}
              >
                <h2 className="font-bold">{article.title}</h2>
                <p className="font-normal">{article.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;