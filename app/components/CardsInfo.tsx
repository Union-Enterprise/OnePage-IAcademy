import { CircleChevronDown } from "lucide-react";

export function CardsInfo() {
  return (
    <div className="relative z-30 px-10 pt-[430px]">
      {/* Primeira fileira */}
      <div className="grid grid-cols-3 px-32 mb-16"> {/* Reduzi o gap para aproximar os cards */}
        <div className="bg-white border shadow-lg rounded-lg p-6 grid grid-flow-row w-80 h-72 items-center">
          <div>
            <CircleChevronDown className="text-mainBlue w-20 h-10" />
            <p className="text-mainBlue text-3xl text-center mt-4">
              Descubra fatos interessantes sobre o exame que define futuro
            </p>
          </div>
          <button className="mt-4 px-6 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
            Conhecer
          </button>
        </div>
        <div className="shadow-lg rounded-lg grid grid-flow-row w-72">
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/mulherEnem.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">Enem 2024</p>
          </div>
        </div>
        <div className="bg-white border shadow-lg rounded-lg p-6 grid grid-flow-row w-[400px] h-64">
          <div>
            <h1 className="text-2xl text-green-400">Conteúdo Personalizado</h1>
            <h1 className="text-2xl text-mainBlue pb-1">Seu estudo, nosso foco</h1>
            <p className="text-sm text-zinc-600 pb-1">
              Utilizamos inteligência artificial para adaptar o material de estudo às necessidades e ao ritmo de cada aluno, garantindo um aprendizado mais eficiente e direcionado.
            </p>
            <p className="text-mainBlue mt-7 cursor-pointer">Saber mais</p>
          </div>
        </div>
      </div>

      {/* Segunda fileira */}
      <div className="grid grid-cols-3 gap-20 ml-20"> {/* Mova toda a segunda fileira um pouco para a direita */}
        <div className="bg-white border shadow-lg rounded-lg grid grid-flow-row w-72 h-72">
          <div className="relative bg-white border shadow-lg rounded-lg overflow-hidden w-72 h-72">
            <img src="/Enem.svg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-flow-row w-full h-full">
          <div className="relative rounded-lg w-full h-full overflow-hidden">
            <img src="/EstudosEnem.svg" alt="" className="w-full h-full object-cover" />
            <p className="absolute bottom-8 left-4 text-white text-xl font-semibold">Outros meios de estudo</p>
            <p className="absolute bottom-1 left-4 text-white text-xl font-semibold hover:text-mainBlue transition-all cursor-pointer">
              Explorar
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row w-72 h-72">
          <div className="relative rounded-lg overflow-hidden w-72 h-72">
            <img src="/PulandoEnem.svg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
