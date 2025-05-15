
import React from 'react';

const CorridorBackground = () => {
  return (
    <div className="w-full h-full absolute">
      {/* Fundo de parede com pichações */}
      <div className="absolute inset-0 bg-fudencio-dark">
        <div className="absolute inset-0 bg-opacity-30 bg-black">
          {/* Pichações simuladas */}
          <div className="absolute top-[30%] left-[20%] text-fudencio-yellow transform rotate-12 opacity-50 text-xl font-comic">
            CHAOS!
          </div>
          <div className="absolute top-[40%] left-[70%] text-fudencio-red transform -rotate-6 opacity-40 text-xl font-comic">
            *&$#@!
          </div>
          <div className="absolute top-[60%] left-[40%] text-white transform rotate-3 opacity-30 text-xl font-comic">
            FUDÊNCIO WAS HERE
          </div>
        </div>
      </div>
      
      {/* Piso sujo */}
      <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 border-t-4 border-gray-900">
        {/* Manchas no piso */}
        <div className="absolute top-1/4 left-[10%] w-12 h-8 bg-fudencio-yellow opacity-20 rounded-full"></div>
        <div className="absolute top-1/3 left-[30%] w-8 h-6 bg-fudencio-green opacity-30 rounded-full"></div>
        <div className="absolute top-1/2 left-[60%] w-10 h-7 bg-fudencio-pink opacity-25 rounded-full"></div>
        <div className="absolute top-1/3 left-[80%] w-14 h-9 bg-fudencio-blue opacity-20 rounded-full"></div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute bottom-[15%] left-[15%] w-10 h-20 bg-fudencio-red opacity-60 pixel-borders"></div>
      <div className="absolute bottom-[15%] left-[45%] w-8 h-28 bg-gray-700 opacity-80 pixel-borders"></div>
      <div className="absolute bottom-[15%] right-[25%] w-12 h-24 bg-fudencio-blue opacity-70 pixel-borders"></div>
    </div>
  );
};

export default CorridorBackground;
