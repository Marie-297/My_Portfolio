"use client";

import React, { useState } from "react";
import { ButtonLinks } from "@/app/data";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/LOGO.png";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex lg:flex-row md:flex-row flex-row-reverse items-center justify-between bg-black px-4 py-3">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>

        <div>
          <div className="hidden md:flex lg:flex">
            {ButtonLinks.map((btnlink, index) => (
              <Link
                key={index}
                href={btnlink.link}
                target={btnlink.newTab ? "_blank" : "_self"}
              >
                <Button key={index} className={`${pathname === btnlink.link ? "text-orange-700 font-extrabold" : "text-white"} hover:bg-white hover:text-black transition`}>{btnlink.label}</Button>
              </Link>
            ))}
          </div>

          <div className="lg:hidden md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden md:hidden absolute z-50 top-14 left-0 w-40 bg-black text-white">
              <div className="flex flex-col items-center w-full py-2 space-y-2">
                {ButtonLinks.map((btnlink, index) => (
                  <Link
                    key={index}
                    href={btnlink.link}
                    target={btnlink.newTab ? "_blank" : "_self"}
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    <Button key={index} className="hover:text-black hover:bg-white transition w-full bg-transparent text-center">{btnlink.label}</Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
