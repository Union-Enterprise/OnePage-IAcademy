import React, { useEffect, useState } from 'react';
import MenuNav from './MenuNav'; // Assumindo que você importa o MenuNav aqui
import IconGroup from './IconGroup'; // Assumindo que você importa o IconGroup aqui

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Ajuste o valor de 100 conforme necessário
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup do evento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 text-white flex flex-col items-end p-4 px-10 transition-transform duration-500 ${
        isScrolled ? 'fixed bg-black bg-opacity-75' : 'absolute'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 z-50 mt-1 ml-2">
        <img src="/whiteIcon.svg" alt="" width={80} height={80} className="hover:fill-mainBlue" />
      </div>
      <div className="-z-10 grid grid-cols-2 items-center justify-end w-full">
        <div className="flex justify-center">
          <MenuNav />
        </div>
        <IconGroup />
      </div>
    </nav>
  );
};

export default Navbar;
