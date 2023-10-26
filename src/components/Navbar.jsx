import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="fixed top-[0] left-[0]  bg-white z-[100]">
      <header className="flex  justify-between h-20 items-center py-3 px-10 w-screen">
        <div className="px-10">
          <Link href="/">
            <Image width={50} height={50} alt="" src="/logo.png" />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-12 items-center">
            <li className="cursor-pointer font-semibold ">
              <Link href="/#emotions">Emotions</Link>
            </li>
            <li className="cursor-pointer font-semibold ">
              <Link href="/#manifesto">Manifesto</Link>
            </li>
            <li className="cursor-pointer font-semibold ">
              <Link href="/#test">Self-awareness test</Link>
            </li>
            <li className="cursor-pointer font-semibold ">
              <Link href="/#wwu">Work With Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="cursor-pointer text-white bg-black rounded-full px-5 mr-10 py-3 font-semibold">
            Download App
          </button>
        </div>
      </header>
    </section>
  );
}