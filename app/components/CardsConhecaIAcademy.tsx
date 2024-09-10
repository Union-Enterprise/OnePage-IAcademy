import { ElementType } from "react";

interface CardsConhecaIAcademyProps {
  cards: { text: string; icon: ElementType }[];
}

export function CardsConhecaIAcademy({ cards }: CardsConhecaIAcademyProps) {
  return (
    <div className="grid grid-cols-2 gap-4 justify-evenly">
      {cards.map(({ text, icon: Icon }, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-white border shadow-xl rounded-lg w-48 hover:border-mainBlue transform transition-transform duration-300 hover:scale-105 mr-96
          "
        >
          <Icon className="w-16 h-16 mb-4 text-mainBlue" />
          <h3 className="text-xl font-semibold">{text}</h3>
        </div>
      ))}
    </div>
  );
}
