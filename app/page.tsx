"use client";

import { Globe, Moon, CircleUserRound, CalendarDays, ShieldQuestion, Users, ShieldCheck, MoveRight } from "lucide-react";
import  CardsConhecaIAcademy  from "./components/CardsConhecaIAcademy";
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
import IconGroup from "./components/IconGroup";
import MenuNav from "./components/MenuNav";
import SvgGroup from "./components/SvgGroup";
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";


export default function Home() {
  const cardsData = [
    { text: "Atualizações", icon: CalendarDays },
    { text: "Dúvidas", icon: ShieldQuestion },
    { text: "Comunidade", icon: Users },
    { text: "Segurança", icon: ShieldCheck },
  ];
  return (
    <>
      <div id="home">
        <SvgGroup/>
      </div>
     
      <NavBar/>

      <div className="absolute -top-0    ml-52 mt-[400px]  pb-48 z-20">
        <div className="flex items-center mb-4">
          <img src="/blueLogo.svg" alt="Logo" className="w-40 lg:w-80" />
        </div>
        <div className="text-left text-mainBlue px-4" >
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

      <div className="flex flex-col md:flex-row items-center  ml-10 px-12 ">
        <div className="w-full  ">
          <h2 className="text-3xl font-bold text-mainBlue mb-4">Conheça a IAcademy</h2>
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
        <CardsConhecaIAcademy  />
      </div>

      <div id="trilhas">
      <CardsContent />
      </div>
    
      <div id="planos">
        <CardsEstudent />
      </div>

      <div id="info">
        <CardsInfo />
      </div>
      
      <ContentVideo />
      <div id="themes">
        <CardsThemes />
      </div>

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
            <FormInputGroup label="E-mail " delayTime={3} />
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
