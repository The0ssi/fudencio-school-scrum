
import React from 'react';
import { Bolt, Skull, Megaphone, Star } from 'lucide-react';

const GameplayFeatures = () => {
  return (
    <div className="w-full py-8 pixel-borders bg-black bg-opacity-40 my-8">
      <h2 className="text-4xl text-fudencio-blue mb-6 font-bold">Sistema de Jogo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        <div className="flex flex-col items-center text-center p-4">
          <Bolt size={40} className="text-fudencio-yellow mb-2" />
          <h3 className="text-xl font-bold text-fudencio-yellow mb-2">Golpes Toscos</h3>
          <p>Sistema de combate simples mas caótico com golpes propositalmente desajeitados</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <Skull size={40} className="text-fudencio-red mb-2" />
          <h3 className="text-xl font-bold text-fudencio-red mb-2">Humor Ácido</h3>
          <p>Diálogos sarcásticos, referências bizarras e crítica social fora da curva</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <Megaphone size={40} className="text-fudencio-orange mb-2" />
          <h3 className="text-xl font-bold text-fudencio-orange mb-2">Ataques Especiais</h3>
          <p>Habilidades únicas baseadas nas características mais extremas de cada personagem</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <Star size={40} className="text-fudencio-purple mb-2" />
          <h3 className="text-xl font-bold text-fudencio-purple mb-2">Power-ups Estranhos</h3>
          <p>Coleta de itens bizarros como chicletes usados e cascas de banana para poder especial</p>
        </div>
      </div>
    </div>
  );
};

export default GameplayFeatures;
