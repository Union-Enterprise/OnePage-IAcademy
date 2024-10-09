"use client";

import { useEffect, useState } from 'react';
import { MoveRight } from "lucide-react";
import CardsConhecaIAcademy from "./components/CardsConhecaIAcademy";
import { CardsContent } from "./components/CardsContent";
import { CardsEstudent } from "./components/CardsEstudent";
import { CardsInfo } from "./components/CardsInfo";
import { CardsThemes } from "./components/CardsThemes";
import { ContentVideo } from "./components/ContentVideo";
import FormInputGroup from "./components/FormInputGroup";
import Footer from "./components/Footer";
import Link from "next/link";
import SvgGroup from "./components/SvgGroup";
import NavBar from "./components/NavBar";
import emailjs from "emailjs-com";

export default function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9l5f0zw",
        "template_663fyav",
        e.target as HTMLFormElement,
        "Xts0UwNohpeU1f3pZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="home">
        <SvgGroup />
      </div>

      <NavBar />

      <div className="absolute -top-0 ml-52 mt-[400px] pb-48 z-20">
        <div className="flex items-center mb-4">
          <img src="/blueLogo.svg" alt="Logo" className="w-40 lg:w-80" />
        </div>
        <div className="text-left text-mainBlue px-4">
          <h1 className="text-2xl font-bold">
            Domine a <span className="text-green-500">matemática</span>
          </h1>
          <h1 className="text-2xl font-bold">
            para o <span className="text-green-500">ENEM</span>
          </h1>
          <h1 className="text-2xl font-bold">com o poder da</h1>
          <h1 className="text-2xl font-bold">inteligência artificial ao seu lado!</h1>
          <Link href={'http://localhost:3000/register'}>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full border hover:bg-white cursor-pointer hover:border-mainBlue hover:text-mainBlue transition-all shadow-xl">
              DESCUBRA A IACADEMY
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center ml-10 px-12 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-mainBlue mb-4">Conheça a IAcademy</h2>
          <p className="text-lg text-gray-700">
            Fundada em 2024, a Iacademy surge com a de alta qualidade e personalizada.
          </p>
          <p className="text-lg text-gray-700">missão de transformar o cenário educacional e preparar nossos alunos para</p>
          <p className="text-lg text-gray-700">a excelência nos vestibulares. Somos uma instituição</p>
          <p className="text-lg text-gray-700">inovadora que utiliza tecnologia de ponta</p>
          <p className="text-lg text-gray-700">e inteligência artificial para oferecer uma educação </p>
          <div className="flex items-center mt-6">
            <p className="text-zinc-500 text-xl flex hover:text-mainBlue cursor-pointer">
              Saiba mais sobre <MoveRight className="mt-1 ml-1" />
            </p>
          </div>
        </div>
        <CardsConhecaIAcademy />
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

      <section id="contact" className="px-[180px] grid grid-cols-2 gap-28 py-[160px] relative mt-10">
        <div className="flex flex-col gap-7">
          <img src="/blueLogo.svg" alt="" className='mt-20' />

          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Estamos sempre buscando melhorar a experiência do usuário. Seu feedback é importante para nós! Acreditamos que cada interação conta e queremos garantir que você tenha a melhor experiência possível ao utilizar nossos serviços.
          </p>
        </div>

        <form className="flex flex-col gap-y-14 ml-10" onSubmit={sendEmail}>
          <div className="bg-white shadow-xl rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fale com a <span className="text-mainBlue">IAcademy</span>
            </h2>
            <div className="gap-10 mb-6">
              <FormInputGroup label="Nome completo" name="name" />
        
            </div>
            <FormInputGroup label="E-mail " name="email" />
            <FormInputGroup label="Mensagem" isTextArea={true}  name="message" />

            <button
              type="submit"
              className="py-3 bg-mainBlue border-2 border-transparent rounded-md hover:border-mainBlue hover:bg-transparent text-white hover:text-black mt-4 w-full"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
      {showSuccessMessage && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-md">
          Mensagem enviada com sucesso!
        </div>
      )}

      <div className="border-zinc-600/20 border-b" />
      <Footer />
    </>
  );
}
