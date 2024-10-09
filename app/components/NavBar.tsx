"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import LogoIcon from "./LogoIcon";

const links = [
  {
    key: "partners",
    href: "#trilhas",
    text: "Trilhas",
  },
  { key: "plans", href: "#planos", text: "Planos" },
  { key: "about", href: "#info", text: "Sobre" },
  { key: "content", href: "#themes", text: "Conteúdos" },
  { key: "contact", href: "#contact", text: "Fale Conosco" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleLinkClick = (key: string) => {
    setActiveLink(key);
  };

  return (
    <>
      <header
        className={`${
          isScrolled
            ? "bg-[rgba(0,0,0,0.4)] backdrop-saturate-[1.8] backdrop-blur-xl"
            : "bg-transparent opacity-100"
        } w-full flex justify-between items-center px-[100px] h-[80px] fixed top-0 z-[999]`}
      >
        <div className="flex gap-10 items-center text-white">
          <Link
            key={"home"}
            href={"/"}
            className="flex group cursor-pointer text-white"
          >
            <LogoIcon />
          </Link>
        </div>
        <div className="flex gap-40 items-center">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-lg duration-100 ${
                activeLink === link.key
                  ? `border-b-2 ${
                      isScrolled ? "border-mainBlue" : "border-white"
                    } text-zinc-200`
                  : "text-white"
              }`}
              onClick={() => handleLinkClick(link.key)}
            >
              <p
                className={`hover:border-b-2 ${
                  isScrolled ? "hover:border-mainBlue" : "hover:border-white"
                }`}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
