
import React from 'react';
import GameLogo from '@/components/GameLogo';
import CharacterSelection from '@/components/CharacterSelection';
import SceneCollection from '@/components/SceneCollection';
import GameplayFeatures from '@/components/GameplayFeatures';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full ms-paint-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-10">
          <GameLogo />
          
          <p className="text-lg mt-4 max-w-3xl text-center">
            Um beat 'em up 2D side-scroller com visual propositalmente tosco, humor ácido e 
            gameplay caótico inspirado na série animada mais politicamente incorreta do Brasil!
          </p>

          <div className="flex gap-4 mt-6">
            <Button className="bg-fudencio-red hover:bg-fudencio-red/80 text-white text-xl px-8 py-6 font-pixel">
              Jogar Agora
            </Button>
            <Button className="bg-fudencio-dark border-2 border-fudencio-yellow hover:bg-fudencio-yellow/20 text-fudencio-yellow text-xl px-8 py-6 font-pixel">
              Tutorial
            </Button>
          </div>
        </div>
        
        <div className="my-12 pixel-borders p-6 bg-black bg-opacity-50 glitch">
          <h2 className="text-3xl font-bold text-fudencio-green mb-4">ALERTA DE CONTEÚDO</h2>
          <p className="text-fudencio-yellow">
            Este jogo contém humor ácido, linguagem imprópria, referências escrachadas e é completamente inadequado para crianças e adultos sensíveis. É tipo aquela série que você assistia escondido, só que agora em formato jogável!
          </p>
        </div>

        <CharacterSelection />
        
        <GameplayFeatures />
        
        <SceneCollection />

        <div className="mt-12 text-center">
          <p className="text-fudencio-pink text-lg">
            Inspirado na série "Fudêncio e Seus Amigos" • Estilo visual propositalmente tosco
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
