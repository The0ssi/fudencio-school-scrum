
import React from 'react';

const CorridorBackground = () => {
  return (
    <div className="w-full h-full absolute">
      {/* Imagem de fundo do corredor da escola */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ 
          backgroundImage: `url('https://static.wikia.nocookie.net/fudencio/images/f/fe/Corredor2.png/revision/latest/scale-to-width-down/1000?cb=20250128234023')`,
          imageRendering: 'pixelated',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Camada semi-transparente para garantir visibilidade dos elementos do jogo */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Piso sujo */}
      <div className="absolute bottom-0 w-full h-[15%] bg-gray-800 border-t-4 border-gray-900 bg-opacity-70">
        {/* Manchas no piso */}
        <div className="absolute top-1/4 left-[10%] w-12 h-8 bg-fudencio-yellow opacity-20 rounded-full"></div>
        <div className="absolute top-1/3 left-[30%] w-8 h-6 bg-fudencio-green opacity-30 rounded-full"></div>
        <div className="absolute top-1/2 left-[60%] w-10 h-7 bg-fudencio-pink opacity-25 rounded-full"></div>
        <div className="absolute top-1/3 left-[80%] w-14 h-9 bg-fudencio-blue opacity-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default CorridorBackground;
