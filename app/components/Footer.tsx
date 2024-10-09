"use client";

import Link from "next/link";
import FooterSection from "./FooterSection";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-[#ffff] border-[#ffff] w-full px-[100px] py-[25px]">
      <div className="grid grid-cols-4 gap-10 2xl:mr-20">
        <div className="flex flex-col ">
          <Link
            key={"home"}
            href={"/"}
            className="flex  group cursor-pointer w-fit"
          >
           
          </Link>
          <p className="text-md text-zinc-600">
            &copy; 2024 IAcademy, Inc. - Todos os direitos reservados.
          </p>
        </div>

        <FooterSection
          title={"Sobre a IAcademy"}
          texts={[
            "Quem Somos",
            "Nossa História",
            "Missão e Valores",
            "Parceiros",
            "Depoimentos"
          ]}
        />
        <FooterSection
          title={"Explorando a Inteligência Artificial"}
          texts={[
            "Cursos Oferecidos",
            "Projetos Práticos",
            "Comunidade",
            "Eventos e Workshops"
          ]}
        />
        <FooterSection
          title={"Políticas e Regulamentos"}
          texts={[
            "Conformidade Regulatória",
            "Cookies",
            "Privacidade",
            "Termos de Serviço"
          ]}
        />
      </div>
    </footer>
  );
}
