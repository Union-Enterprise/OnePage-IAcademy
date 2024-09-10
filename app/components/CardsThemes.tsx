import { Box, CircleAlert, Cone, Cuboid, Diameter, TriangleRight } from "lucide-react";

export function CardsThemes(){

    const contents = [
        {
          title: 'Geometria Plana',
          description: 'Geometria Plana explora figuras bidimensionais, como triângulos, círculos e quadrados, ajudando a calcular perímetros, áreas e ângulos.',
          icon: <Cone />,
        },
        {
          title: 'Geometria Analitica',
          description: 'Geometria Analítica utiliza coordenadas para unir álgebra e geometria, permitindo estudar formas e figuras no plano cartesiano',
          icon: <TriangleRight />,
        },
        {
          title: 'Fatorial',
          description: 'O fatorial é amplamente utilizado em combinatória, probabilidade e em várias áreas da matemática para calcular o número de permutações',
          icon: <CircleAlert />,
        },
        {
          title: 'Geometria Plana',
          description: 'Geometria plana estuda figuras 2D e conceitos como perímetro, área e o Teorema de Pitágoras.',
          icon: <Cuboid />,
        },
        {
          title: 'Geometria Espacial',
          description: 'Geometria Espacial examina figuras tridimensionais, como cubos, esferas e pirâmides, explorando conceitos como volume e etc',
          icon: <Box />,
        },
        {
          title: 'Topologia',
          description: 'Topologia estuda propriedades de espaços que não mudam com deformações contínuas.',
          icon: <Diameter />,
        },
      ];
    return(
        <><div className="py-12 bg-white ">
                <div className="max-w-7xl mx-auto px-1 ">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Explore alguns do nossos{' '}
                        <span className="text-blue-600">principais</span> conteúdos
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                        {contents.map((content, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 transform hover:scale-110 border cursor-default hover:border-mainBlue">
                                <div className="text-blue-600 text-4xl mb-4">{content.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900">{content.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{content.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    )
}