"use client";

import React, { useState } from "react";
// import { Link, userouter } from "react-router-dom";
import Logo from "../assets/logo/TechFilo-Final_2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/Firebase.config";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const [toggle, setToggle] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="w-full flex  relative backdrop-blur-3xl  z-[9999]  px-6 lg:px-10 items-center text-black justify-start h-16  py-8  bg-white">
      <div className="flex max-w-[1440px] mx-auto items-center w-full h-full justify-between gap-10">
        <Link href="/" className="flex items-center ">
          <Image className="lg:w-56  md:w-40 w-40 " src={Logo} alt="" />
        </Link>

        <nav className=" lg:flex hidden items-center text-base gap-7 font-medium">
          <Link
            className={`${
              router === "/" && "text-primary"
            } hover:text-primary transition-colors`}
            href="/"
          >
            Home
          </Link>
          {/* <Link
            className={` ${
              router === "/tutorial" && "text-primary"
            } hover:text-primary transition-colors`}
            href="/"
          >
            Tutorial
          </Link> */}
          <Link
            href="/services"
            className={`${
              router === "/services" && "text-primary"
            } hover:text-primary transition-colors`}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className={`${
              router === "/portfolio" && "text-primary"
            } hover:text-primary transition-colors`}
          >
            Portfolio
          </Link>
          <Link
            className={`${
              router === "/pricing" && "text-primary"
            } hover:text-primary transition-colors`}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            href="/studio"
            className={` ${
              router === "/studio" && "text-primary"
            } hover:text-primary transition-colors`}
          >
            Studio
          </Link>
          <Link
            className={`${
              router === "/contact-us" && "text-primary"
            } hover:text-primary transition-colors`}
            href="/contact-us"
          >
            Contact
          </Link>
          {user?.email && (
            <Link
              href="/dashboard"
              className="hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>
        {/* mobile responsive */}

        <div
          onClick={() => setToggle(!toggle)}
          className="flex lg:hidden flex-col gap-2 cursor-pointer"
        >
          <div
            className={`w-8 h-1 ${
              toggle && "-rotate-45 translate-y-2 bg-primary"
            } transition-transform duration-500 bg-black`}
          ></div>
          <div
            className={` ${
              toggle && "hidden "
            } transition-all w-8 h-1 bg-black`}
          ></div>
          <div
            className={`w-8 h-1 ${
              toggle && "rotate-45 -translate-y-1 bg-primary"
            } transition-transform duration-500 bg-black`}
          ></div>
        </div>
      </div>
      <ul
        className={` ${
          toggle ? "translate-x-0 " : "translate-x-full"
        } z-[99999] xl:hidden transition-transform duration-500 text-black flex flex-col backdrop-blur-3xl py-10  absolute top-16 left-0 bg-white w-full h-screen items-center  text-2xl gap-8 font-medium`}
      >
        <Link
          onClick={() => setToggle(!toggle)}
          className={`${
            router === "/" && "text-primary"
          } hover:text-primary transition-colors`}
          href="/"
        >
          Home
        </Link>
        {/* <Link
          onClick={() => setToggle(!toggle)}
          className={` ${
            router === "/tutorial" && "text-primary"
          } hover:text-primary transition-colors`}
          href="/"
        >
          Tutorial
        </Link> */}
        <Link
          href="/services"
          onClick={() => setToggle(!toggle)}
          className={`${
            router === "/services" && "text-primary"
          } hover:text-primary transition-colors`}
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setToggle(!toggle)}
          className={`${
            router === "/portfolio" && "text-primary"
          } hover:text-primary transition-colors`}
        >
          Portfolio
        </Link>
        <Link
          onClick={() => setToggle(!toggle)}
          className={`${
            router === "/pricing" && "text-primary"
          } hover:text-primary transition-colors`}
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          href="/studio"
          onClick={() => setToggle(!toggle)}
          className={` ${
            router === "/studio" && "text-primary"
          } hover:text-primary transition-colors`}
        >
          Studio
        </Link>
        <Link
          onClick={() => setToggle(!toggle)}
          className={`${
            router === "/contact-us" && "text-primary"
          } hover:text-primary transition-colors`}
          href="/contact-us"
        >
          Contact
        </Link>
        {user?.email && (
          <Link
            href="/dashboard"
            className="hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
