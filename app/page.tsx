"use client";

import { Globe, Moon, CircleUserRound, CalendarDays, ShieldQuestion, Users, ShieldCheck, MoveRight } from "lucide-react";
import { CardsConhecaIAcademy } from "./components/CardsConhecaIAcademy";
import { CardsContent } from "./components/CardsContent";
import { CardsEstudent } from "./components/CardsEstudent";
import { CardsInfo } from "./components/CardsInfo";
import { CardsThemes } from "./components/CardsThemes";
import { ContentVideo } from "./components/ContentVideo";
import FormInputGroup from "./components/FormInputGroup";
import Button from "./components/Button";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const cardsData = [
    { text: "Atualizações", icon: CalendarDays },
    { text: "Dúvidas", icon: ShieldQuestion },
    { text: "Comunidade", icon: Users },
    { text: "Segurança", icon: ShieldCheck },
  ];

  return (
    <>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 576"
        width="100%"
        height="140%"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#1f5ccd"
          d="M1024 327.27C657.02 543.67 308.71 224.15 197.15 139.59 85.59 55.02 0 26.35 0 26.35V-36.72H1024V327.27Z"
        />
        <path
          fill="#617eea"
          d="M666.31-36.72c0 177.08-243.8 205.79-394.38 205.79S0.08 414.67 0.08 437.97V-36.72H666.31Z"
        />
        <path
          fill="#1865f2"
          d="M1024 222.23C867.56 38.43 735.77 262.08 558.89 277.68 382.05 293.28 0.08 76.56 0.08 76.56V-36.72H1024V222.23Z"
        />
        <path
          fill="#1865f2"
          d="M806.13-36.72s64.54 146.98-53.77 237.34C634.04 290.95 320.34 68.65 209.19 74.06 98.04 79.43 0.08 222.23 0.08 222.23V-36.72H806.13Z"
        />
      </svg>


      <div className="absolute top-0 left-0 right-0 z-10 mt-5 ml-2 ">
        <img src="/whiteIcon.svg" alt="" width={80} height={80} className="hover:fill-mainBlue " />
      </div>


      <div className="absolute top-0 left-0 right-0 z-10 mt-5 text-white flex justify-end p-4 gap-2  ">
        <Globe className="w-7 h-7 mt-1 hover:fill-mainBlue " />
        <div className="bg-white text-mainBlue flex gap-3 w-32 h-10 justify-center items-center rounded-xl ">
          <CircleUserRound className="w-7 h-7 hover:fill-mainBlue" />
          <Moon className="w-7 h-7 fill-mainBlue " />
        </div>
      </div>


      <div className="absolute top-0 left-0 right-0 z-10 mt-6 text-white flex justify-end p-4 gap-36 mr-52">
        <h1 className="text-xl hover:border-b-white cursor-pointer ">Início</h1>
        <h1 className="text-xl hover:border-b-white cursor-pointer ">Trilhas</h1>
        <h1 className="text-xl hover:border-b-white cursor-pointer ">Planos</h1>
        <h1 className="text-xl hover:border-b-white cursor-pointer ">Sobre</h1>
      </div>


      <div className="absolute -top-0  -left-0 ml-52 mt-[400px]  pb-48 z-20">
        <div className="flex items-center mb-4">
          <img src="/blueLogo.svg" alt="Logo" className="w-40 lg:w-80" />
        </div>
        <div className="text-left text-mainBlue px-4">
          <h1 className="text-2xl  font-bold">
            Domine a <span className="text-green-500">matemática</span>
          </h1>
          <h1 className="text-2xl  font-bold">
            para o <span className="text-green-500">ENEM</span>
          </h1>
          <h1 className="text-2xl  font-bold">com o poder da</h1>
          <h1 className="text-2xl  font-bold">inteligência artificial ao seu lado!</h1>
          
          <Link href={'http://localhost:3000/register'}>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full border hover:bg-white cursor-pointer hover:border-mainBlue hover:text-mainBlue transition-all shadow-xl">
              DESCUBRA A IACADEMY
            </button>
          </Link>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-around items-center gap-10 ml-10 ">
        <div className="w-full ">
          <h2 className="text-3xl font-bold text-mainBlue mb-4">Conheça a Iacademy</h2>
          <p className="text-lg  text-gray-700">
            Fundada em 2024, a Iacademy surge com a   de alta qualidade e personalizada.
          </p>
          <p  className="text-lg  text-gray-700">missão de transformar o cenário educacional e preparar nossos alunos para</p>
          <p className="text-lg  text-gray-700">a excelência nos vestibulares. Somos uma instituição</p>
          <p className="text-lg  text-gray-700">inovadora que utiliza tecnologia de ponta </p>
          <p className="text-lg  text-gray-700">e inteligência artificial para oferecer uma educação </p>
          <div className="flex items-center mt-6">
            <p className="text-zinc-500 text-xl flex hover:text-mainBlue cursor-pointer">
              Saiba mais sobre <MoveRight className="mt-1 ml-1" />
            </p>
          </div>
        </div>
        <CardsConhecaIAcademy cards={cardsData} />
      </div>


      <CardsContent />
      <CardsEstudent />
      <CardsInfo />
      <ContentVideo />
      <CardsThemes />

      <section className="bg-gradient-radial bg-white px-32 md:px-20  py-20 mt-20 ">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-10 w-full lg:w-1/2">
            <h1 className="text-6xl  font-semibold leading-tight  ">
              Como podemos te ajudar hoje?
            </h1>
            <p className="text-xl text-p-gray ">
              Nós da IAcademy estamos ansiosos para te ajudar a criar um futuro incrível de novas possibilidades.
            </p>
          </div>

          <form className="flex flex-col gap-y-6 w-1/2">
            <div className="flex flex-col gap-6 pb-4">
              <FormInputGroup label="Nome" />
              <FormInputGroup label="Sobrenome" delayTime={2.5} />
            </div>
            <FormInputGroup label="E-mail da empresa" delayTime={3} />
            <FormInputGroup label="Assunto" delayTime={3.5} />
            <FormInputGroup label="Mensagem" isTextArea={true} delayTime={4} />
            <Button text="Enviar Mensagem"/>
          </form>
        </div>
      </section>

      <div className="border-zinc-600/20 border-b"/>
      <Footer />
    </>
  );
}
