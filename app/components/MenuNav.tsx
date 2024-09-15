
import React from 'react';

const MenuNav: React.FC = () => {
  return (
    <div className="flex gap-36 justify-end">
        <h1 className="text-xl relative cursor-pointer group">
        Início
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-100 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="text-xl relative cursor-pointer group">
        Trilhas
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="text-xl relative cursor-pointer group">
        Planos
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="text-xl relative cursor-pointer group">
        Sobre
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
  </div>
  );
};

export default MenuNav;
