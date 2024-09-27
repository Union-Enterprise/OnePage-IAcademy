import { faPix } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BadgeCheck, Barcode, ChartNoAxesCombined, CreditCard, HeartHandshakeIcon } from "lucide-react";

export function CardsEstudent() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative">
            <div className="absolute top-0 mr-96 mt-48">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2200"
                    height="2200"
                    viewBox="0 0 1024.5 576"
                >
                    <defs>
                        <clipPath id="clip-path">
                            <path d="M 0 50 L 996.90625 50 L 996.90625 575.859375 L 0 575.859375 Z" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#clip-path)">
                        <path
                            fill="#1865f2"
                            d="M 996.359375 575.859375 L 0.546875 575.859375 C 19.875 396.835938 126.679688 501.726562 233.480469 393.785156 C 430.8125 194.421875 583.386719 364.289062 657.640625 182.214844 C 731.894531 0.140625 996.359375 59.136719 996.359375 59.136719 Z"
                        />
                    </g>
                </svg>
            </div>

            <div className="relative z-30 grid grid-cols-3 gap-20 px-10 py-10">
                <div className="bg-white border shadow-lg rounded-lg p-6 w-80 h-96 flex flex-col items-center">
                    <HeartHandshakeIcon className="text-mainBlue w-32 h-32" />
                    <h3 className="text-xl font-bold text-mainBlue">Estratégias e Dicas</h3>
                    <p className="text-gray-600 text-center mt-4">
                        Descubra como a tecnologia pode ser sua aliada na preparação para os exames, com dicas exclusivas.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
                        Saiba mais
                    </button>
                </div>

                <div className="bg-white border shadow-lg rounded-lg grid grid-cols-2 justify-between col-span-2 w-[700px]">
                    <div className="bg-mainBlue rounded-lg h-full w-full p-2">
                        <ChartNoAxesCombined className="text-white w-10 h-10 ml-2" />
                        <h1 className="flex justify-center mt-1 mb-2 text-white text-2xl p-2">
                            Quais são os benefícios de usar a IAcademy?
                        </h1>
                        <p className="flex justify-center text-white text-lg">Educação personalizada,</p>
                        <p className="flex justify-center text-white text-lg">materiais atualizados e</p>
                        <p className="flex justify-center text-white text-lg">tecnologia de ponta.</p>
                        <p className="flex justify-center text-white text-lg">Prepare-se para vestibulares</p>
                        <p className="flex justify-center text-white text-lg">com feedback instantâneo</p>
                        <p className="flex justify-center text-white text-lg">e suporte contínuo.</p>
                        <p className="flex justify-center text-white text-lg mt-4">Foco na excelência acadêmica</p>
                    </div>
                    <div className="w-full">
                        <img src="/mulher.svg" alt="" className="mt-16" />
                    </div>
                </div>

                <div className="bg-zinc-100 border shadow-lg rounded-lg p-6 w-80 flex flex-col items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <BadgeCheck className="text-green-600 w-10 h-10" />
                        <h3 className="text-xl font-bold text-mainBlue">Vantagens de usar a IAcademy</h3>
                    </div>
                    <p className="text-mainBlue text-center">
                        O primeiro site educacional com IA. Assistência 24H via IA.
                    </p>
                    <p className="text-mainBlue text-center">Conteúdo auto regenerativo</p>
                    <button className="mt-4 px-6 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
                        Saiba mais
                    </button>
                </div>

                <div className="bg-white border shadow-lg rounded-lg grid grid-cols-2 justify-between col-span-2 w-[700px]">
                    <div className="bg-mainBlue rounded-lg h-full w-full">
                        <img src="/homemMat.svg" alt="" className="w-full h-full" />
                    </div>
                    <div className="p-2">
                        <p className="text-zinc-500 text-sm flex justify-center">Transforme seu futuro com nossa formação</p>
                        <h1 className="flex justify-center text-2xl mt-2">Preparação <span className="text-mainBlue ml-1">Premium</span></h1>
                        <h1 className="flex justify-center text-2xl">para <span className="text-mainBlue ml-1">Vestibulares</span></h1>
                        <p className="mt-4 flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-4" />Livre de anúncios</p>
                        <p className="mt-4 flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-3" />Quizzes</p>
                        <p className="mt-4 flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-4" />Perguntas ilimitadas à IA</p>
                        <button className="mt-10 px-6 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all flex justify-center">
                            Obter plano
                        </button>
                    </div>
                </div>

                <div className="bg-white border shadow-lg rounded-lg p-6 flex flex-col justify-between w-[330px] h-96">
                    <h1 className="flex justify-center text-zinc-600 text-2xl">O que você recebe</h1>
                    <p className="flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-4" />Auxílio ao usuário</p>
                    <p className="flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-4" />Recursos de IA ilimitados</p>
                    <p className="flex"><BadgeCheck className="text-green-600 w-5 h-5 mr-4" />Auxílio ao usuário</p>
                    <p className="flex justify-center text-3xl">R$199,00</p>
                    <p className="flex justify-center text-sm text-zinc-600">Cartão: 12x sem juros</p>
                    <button className="mt-4 px-6 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
                        Saber mais
                    </button>
                </div>

                <div className="bg-white border shadow-lg rounded-lg grid grid-cols-2 justify-between col-span-2 w-[700px] overflow-hidden">
                    <div className="bg-zinc-100 w-full h-full p-4">
                        <h1 className="flex justify-center text-2xl">Planos exclusivos</h1>
                        <h1 className="flex justify-center text-2xl">para vestibulares</h1>
                        <p className="text-1xl flex justify-center">R$ 500,00</p>
                        <p className="text-sm text-zinc-600 mt-1 ml-5">Aproveite nossa oferta e transforme seu aprendizado com acesso premium!</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <CreditCard className="text-mainBlue" />
                            <Barcode />
                            <FontAwesomeIcon icon={faPix} style={{ color: "#4bb0a7" }} className="w-6 h-6" />
                        </div>
                        <h1 className="text-2xl flex mt-3">Assine o plano <span className="text-mainBlue ml-1">Premium</span></h1>
                        <button className="mt-10 px-14 py-2 bg-mainBlue text-white font-semibold rounded-full hover:bg-white hover:text-mainBlue transition-all">
                            Obter plano
                        </button>
                        <p className="text-sm mt-5 text-zinc-600">Ensino personalizado e inovador para o futuro</p>
                    </div>
                    <div className="bg-mainBlue w-full h-full rounded-md p-3">
                        <BadgeCheck className="text-white w-28 h-28 ml-24" />
                        <h1 className="text-white text-2xl mt-10">Transforme sua preparação com o plano da IAcademy. Tenha acesso a educação personalizada, materiais atualizados e tecnologia de ponta.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
