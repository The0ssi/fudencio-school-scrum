
import React from 'react';

const GameLogo = () => {
  return (
    <div className="relative">
      <h1 className="text-6xl md:text-7xl font-bold text-fudencio-red mb-2 animate-shake">
        <span className="block">FUDÊNCIO:</span>
        <span className="block text-fudencio-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">CAOS ESCOLAR</span>
      </h1>
      <div className="absolute -top-4 right-0 rotate-12 comic-text text-sm">
        Politicamente Incorreto!
      </div>
    </div>
  );
};

export default GameLogo;
