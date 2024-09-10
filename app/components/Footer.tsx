"use client";

import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";
import LogoIcon from "./LogoIcon";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-[#ffff] border-t-2 border-[#ffff] w-full px-[100px] py-[80px] ">
      <div className="grid grid-cols-4 gap-10 2xl:mr-20">
        <div className="flex flex-col gap-5">
          <Link
            key={"home"}
            href={"/"}
            className="flex gap-5 group cursor-pointer w-fit"
          >
            <LogoIcon />
          </Link>
          <p className="text-md text-zinc-600">
            &copy; 2024 IAcademy, Inc. - Todos os direitos reservados.
          </p>
        </div>
        <FooterSection
          title={"Recursos"}
          texts={[
            "Documentação",
            "Estudos de Caso",
            "FAQ",
            "Suporte ao Cliente",
          ]}
        />
        <FooterSection
          title={"Sobre a IAcademy"}
          texts={["Equipe", "História", "Missão e Valores", "Parceiros"]}
        />
        <FooterSection
          title={"Legalidade"}
          texts={[
            "Conformidade Regulatória",
            "Cookies",
            "Privacidade",
            "Termos de Serviço",
          ]}
        />
      </div>
    </footer>
  );
}
