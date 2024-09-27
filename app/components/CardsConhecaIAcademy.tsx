import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardData = [
 
    {
      title: "Dúvidas",
      subtitle: "Respostas rápidas para suas perguntas sobre IA.", 
      imageUrl: "/duvida.svg", 
    },
    {
      title: "Comunidades",
      subtitle: "Participe de grupos focados em IA e colabore com outros.", 
      imageUrl: "/comunidade.svg",
    },
    {
      title: "Seguro",
      subtitle: "Saiba como proteger suas informações ao usar IA.", 
      imageUrl: "/seguro.svg",
    },
    {
      title: "Atualizações",
      subtitle: "Fique por dentro das últimas novidades sobre IA.", 
      imageUrl: "/atualizacoes.svg",
    },
  ];
  


export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs mr-32 -mt-16">
      <CarouselContent>
        {cardData.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center ">
                <img src={card.imageUrl}  width={300} height={300}  alt={card.title} className=" object-contain" />
                  <span className="text-2xl font-semibold mt-4">{card.title}</span>
                  <span className="text-xl text-gray-500 text-center">{card.subtitle}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
