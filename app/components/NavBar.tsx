"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import LogoIcon from "./LogoIcon";
import IconGroup from "./IconGroup";
import { CircleUserRound, Globe, Moon } from "lucide-react";

const links = [
  [
    {
      key: "services",
      href: "#services",
      text: "Início",
    },

    { key: "partners", href: "#trilhas", text: "Trilhas" },
  ],
  [
    { key: "developers", href: "#planos", text: "Planos" },
    { key: "enterprise", href: "info", text: "Sobre" },
  ],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  });
  return (
    <>
      <header
        className={`${
          isScrolled
            ? "bg-[rgba(0,0,0,0.64)] backdrop-blur-md"
            : "bg-transparent opacity-100"
        }  w-full flex gap-10 items-center px-[100px] h-[80px] fixed top-0 z-[999] text-lg `}
      >
        <div className="flex gap-10 items-center">
          <div className={`${"bg-[rgba(0,0,0,0.4)] "}`}></div>
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer hover:text-mainBlue transition-all "
          >
          
           <div>
            <img src="/whiteLogo.svg" alt="" width={200} height={200} />
           </div>
          </Link>
          <div className="flex gap-10">
            {links[0].map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-white hover:text-main-purple duration-100"
              >
                <p>{link.text}</p>
              </Link>
            ))}
          </div>
          <div className="flex gap-10 items-center">
          {links[1].map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-white hover:text-main-purple duration-100"
            >
              <p>{link.text}</p>
            </Link>
          ))}
        
        </div>
        </div>
       
      </header>
    </>
  );
}
