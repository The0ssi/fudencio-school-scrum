
import React from 'react';
import GameLogo from '@/components/GameLogo';
import CharacterSelection from '@/components/CharacterSelection';
import GameplayFeatures from '@/components/GameplayFeatures';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Sword } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full ms-paint-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-10">
          <GameLogo />
          
          <p className="text-lg mt-4 max-w-3xl text-center">
            Um beat 'em up 2D side-scroller com visual propositalmente tosco, humor ácido e 
            gameplay caótico inspirado na série animada mais mais do Brasil!
          </p>

          <div className="flex gap-4 mt-6">
            <Button 
              className="bg-fudencio-red hover:bg-fudencio-red/80 text-white text-xl px-8 py-6 font-pixel"
              onClick={() => navigate('/game')}
            >
              <Sword className="mr-2" /> Jogar Demo
            </Button>
          </div>
        </div>
        
        <div className="my-12 pixel-borders p-6 bg-black bg-opacity-50 glitch">
          <h2 className="text-3xl font-bold text-fudencio-green mb-4">ALERTA DE CONTEÚDO</h2>
          <p className="text-fudencio-yellow">
            Este jogo contém humor ácido, mimimi e referências escrachadas. É baseap na animação que conta as desventuras de Conrado, um caqui que estuda com uma série de mini delinquentes, só que agora em formato jogável!
          </p>
        </div>

        <CharacterSelection />
        
        <GameplayFeatures />

        <div className="mt-12 text-center">
          <p className="text-fudencio-pink text-lg">
            Inspirado na série "Fudêncio e Seus Amigos" 
          </p>
          <p className="text-sm mt-2 text-gray-400">
            Todas as imagens e referências a personagens pertencem a seus respectivos proprietários. 
            Este é um conceito visual de fã.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
