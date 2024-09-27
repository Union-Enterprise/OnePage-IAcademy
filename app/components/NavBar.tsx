"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const links = [
  [
    {
      key: "Inicio",
      href: "#home",
      text: "Início",
    },
    { key: "partners", href: "#trilhas", text: "Trilhas" },
  ],
  [
    { key: "plans", href: "#planos", text: "Planos" },
    { key: "sobre", href: "#info", text: "Sobre" },
    { key: "content", href: "#themes", text: "Conteudos" },
  ],
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const checkScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
    setIsImageVisible(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-[rgba(0,0,0,0.4)] backdrop-saturate-[1.8] backdrop-blur-xl"
          : "*:text-mainBlue opacity-100"
      } w-full flex justify-between items-center px-[100px] h-[80px] fixed top-0 z-40 duration-100 text-lg`}
    >
      <div className="flex gap-10 items-center">
        <Link
          key={"home"}
          href={"/"}
          className="flex gap-5 group cursor-pointer"
        >
          <div>
            {isImageVisible && (
              <img src="/whiteIcon.svg" alt="" width={50} height={50} className="hover:text-mainBlue" />
            )}
          </div>
        </Link>
        <div className="flex gap-10">
          {links[0].map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-white transition-all duration-100 ${
                isScrolled ? "hover:text-mainBlue/75" : "hover:text-white/70"
              }`}
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
              className={`text-white transition-all duration-100 ${
                isScrolled ? "hover:text-mainBlue/75" : "hover:text-white/70"
              }`}
            >
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
