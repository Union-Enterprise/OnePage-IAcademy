import React from 'react';

export function CardsContent() {
  return (
    <div className="relative z-30 pb-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1012 526"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#0066ff"
          d="M 1.6 69.3 L 36.2 75.9 C 70.8 82.8 140.1 96.1 209.3 87.4 C 278.5 78.5 347.8 47.3 417 27.7 C 486.2 8.1 555.5 0 624.7 5.8 C 694 11.5 763.2 31.9 832.4 54 C 901.6 76.1 971 99.9 1036.1 135.2 L 1100.5 170.5 L 1031.8 170.5 L 1031.8 356.7 L 1.6 356.7 L 1.6 69.3 Z"
          transform="translate(-10,0)"
        />
        <path
          fill="#004aad"
          d="M 1.6 349.6 L 1.6 332.6 C 71.1 303 139.6 231.9 208.2 184.6 C 276.7 137.4 345.2 114 413.7 116 C 482.2 118 550.8 145.5 619.3 175.2 C 687.8 204.9 756.3 236.8 824.8 249.1 C 893.4 261.4 961.9 254.1 1026.8 227.6 L 1031.8 225.8 L 1031.8 356.7 L 1.6 356.7 L 1.6 349.6 Z"
        />
        <path
          fill="#004aad"
          d="M 1031.8 356.7 L 1031.8 467 L 1.8 467 L 1.8 465.8 C 72.5 431.4 141.7 407.9 211 396.8 C 280.2 385.7 349.4 387 418.7 396.7 C 488 406.3 557.1 424.4 626.4 451.3 C 695.6 478.2 764.8 513.5 834 521 L 1031.8 521 L 1031.8 356.7 Z"
          transform="rotate(180, 520.9, 438.85) scale(1.6) translate(7, -130)"
        />

        <foreignObject x="200" y="180" width="600" height="200">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-white">Recursos oferecidos</h2>
            <p className="text-lg text-white mt-4">
              Oferecemos materiais didáticos atualizados e personalizados para garantir uma experiência de aprendizado eficaz e envolvente.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-mainBlue font-semibold rounded-full hover:bg-mainBlue hover:text-white transition-all shadow-xl">
              Saber mais
            </button>
          </div>
        </foreignObject>
      </svg>

      <div className="flex justify-center mt-32 px-20">
        <div className="grid grid-cols-4 gap-32">
          {[
            {
              title: "IA",
              description: "Explore materiais exclusivos de IA para ampliar seu conhecimento e dominar habilidades do futuro.",
              imgSrc: "/conteudoia.svg",
              color: "bg-mainBlue rounded-xl ",
              textColor: "text-mainBlue ",
              hoverColor: "hover:border-mainBlue",
            },
            {
              title: "Trilhas",
              description: "Caminhe por trilhas interativas que levam você por temas variados de entretenimento.",
              imgSrc: "/trilhasia.svg",
              color: "bg-red-500 rounded-xl",
              textColor: "text-red-500",
              hoverColor: "hover:border-red-500",
            },
            {
              title: "Quizzes",
              description: "Teste seu conhecimento com quizzes desafiadores e divertidos. Aprenda enquanto se diverte!",
              imgSrc: "/quizia.svg",
              color: "bg-yellow-500 rounded-xl",
              textColor: "text-yellow-500",
              hoverColor: "hover:border-yellow-500",
            },
            {
              title: "Auxílio",
              description: "Conte com ferramentas e suporte dedicados para facilitar sua jornada e maximizar seu potencial.",
              imgSrc: "/auxilioia.svg",
              color: "bg-green-500 rounded-xl",
              textColor: "text-green-500",
              hoverColor: "hover:border-green-500",
            },
          ].map(({ title, description, imgSrc, color, textColor, hoverColor }, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-60 h-60 p-6 bg-white border shadow-lg rounded-lg ${hoverColor} transform transition-transform duration-300 hover:scale-105 relative overflow-visible`}
            >
              <div className={`absolute -top-28 ${color} text-white w-40 h-52 p-4 flex items-center justify-center`}>
                <img src={imgSrc} alt={title} className="w-96 h-36 transition-transform duration-300 transform hover:scale-110" />
              </div>
              <h3 className={`text-xl font-semibold ${textColor} mt-20 pb-2`}>{title}</h3>
              <p className="text-sm text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
