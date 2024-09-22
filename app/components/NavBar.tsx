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
      key: "Inicio",
      href: "#services",
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
                  ? "bg-[rgba(71,102,163,0.4)] backdrop-saturate-[1.8] backdrop-blur-xl"
                  : "*:text-black opacity-100"
              }  w-full flex justify-between items-center px-[100px] h-[80px] fixed top-0 z-40 duration-100 text-lg`}
            >
      
        <div className="flex gap-10 items-center">
          <div className={`${"bg-[rgba(0,0,0,0.4)] "}`}></div>
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer hover:text-mainBlue transition-all "
          >
          
           <div>
            <img src="/whiteIcon.svg" alt="" width={80} height={80} />
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
