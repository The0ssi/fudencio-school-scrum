
import React from 'react';
import GameplayDemo from '@/components/GameplayDemo';
import { Button } from '@/components/ui/button';
import GameLogo from '@/components/GameLogo';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full ms-paint-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="outline" 
            className="border-2 border-fudencio-yellow text-fudencio-yellow hover:bg-fudencio-dark"
            onClick={() => navigate('/')}
          >
            Voltar ao Menu
          </Button>
          
          <div className="scale-75 origin-right">
            <GameLogo />
          </div>
        </div>
        
        {/* Game Container */}
        <div className="pixel-borders bg-black bg-opacity-50 p-4">
          <GameplayDemo />
        </div>
        
        {/* Game Instructions */}
        <div className="mt-8 bg-black bg-opacity-70 pixel-borders p-4">
          <h3 className="text-2xl text-fudencio-yellow mb-4">Como Jogar:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-fudencio-pink mb-2">Controles:</h4>
              <ul className="text-white space-y-2">
                <li>→ / ← : Andar para os lados</li>
                <li>Espaço: Pular</li>
                <li>X: Ataque (Palavrão Atordoante)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-fudencio-pink mb-2">Objetivo:</h4>
              <p className="text-white">
                Sobreviva no corredor escolar derrotando os valentões que se aproximam.
                Use o ataque especial de palavrões do Fudêncio para atordoá-los e derrotá-los!
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Demo Técnica • Fudêncio: Caos Escolar • Jogo Conceitual • 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
