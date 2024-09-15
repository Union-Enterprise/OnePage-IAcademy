
import React from 'react';
import { Globe, CircleUserRound, Moon } from 'lucide-react';

const IconGroup: React.FC = () => {
  return (
    <div className="flex items-center gap-2 justify-end">
        <Globe className="w-9 h-9 mt-1 hover:fill-mainBlue" />
        <div className="bg-white text-mainBlue flex gap-3 w-32 h-12 justify-center items-center rounded-xl">
            <CircleUserRound className="w-8 h-8 hover:fill-mainBlue" />
            <Moon className="w-8 h-8 fill-mainBlue" />
        </div>
  </div>
  );
};

export default IconGroup;
