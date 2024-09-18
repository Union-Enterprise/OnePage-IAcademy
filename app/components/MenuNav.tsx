import React from 'react';

const MenuNav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-36 ml-96">
      <h1 className="text-xl relative cursor-pointer group" onClick={() => scrollToSection('inicio')}>
        Início
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-100 group-hover:scale-x-100"></span>
      </h1>
      <h1 className="text-xl relative cursor-pointer group" onClick={() => scrollToSection('trilhas')}>
        Trilhas
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
      </h1>
      <h1 className="text-xl relative cursor-pointer group" onClick={() => scrollToSection('planos')}>
        Planos
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
      </h1>
      <h1 className="text-xl relative cursor-pointer group" onClick={() => scrollToSection('sobre')}>
        Sobre
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
      </h1>
      <h1 className="text-xl relative cursor-pointer group" onClick={() => scrollToSection('fale-conosco')}>
        Fale Conosco
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
      </h1>
    </div>
  );
};

export default MenuNav;
