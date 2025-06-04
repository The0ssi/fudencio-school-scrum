
import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  {
    name: "Fudêncio",
    description: "Pequeno, arrogante e totalmente sem filtros. Atira mimimi como se fossem socos.",
    imageUrl: "https://i.pinimg.com/736x/c0/eb/93/c0eb930fbed9feb9370d230d83765ecf.jpg",
    color: "fudencio-red",
    specialAttack: "Chuva de Mimimi´s"
  },
  {
    name: "Conrado",
    description: "Eterno sofredor, usa suas lágrimas infinitas como arma sonora.",
    imageUrl: "https://i.pinimg.com/736x/00/7f/91/007f9161f71420e05bc3d6a9539eb12d.jpg",
    color: "fudencio-blue",
    specialAttack: "Choro Devastador"
  },
  {
    name: "Funérea",
    description: "Emo gótica depressiva com um guarda-chuva afiado e letal.",
    imageUrl: "https://i.pinimg.com/736x/94/4d/be/944dbe7218317165d306f24979ab9102.jpg",
    color: "fudencio-purple",
    specialAttack: "Rodopio Sombrio"
  },
  {
    name: "Zezé Maria",
    description: "Militante extrema que usa cartazes e megafone contra inimigos.",
    imageUrl: "https://i.pinimg.com/736x/8d/37/07/8d3707301607f542d48d20dd1da097fd.jpg",
    color: "fudencio-orange",
    specialAttack: "Protesto Ensurdecedor"
  },
  {
    name: "Popoto",
    description: "Fofo por fora, psicopata por dentro. Mordidas e brinquedos explosivos.",
    imageUrl: "https://i.pinimg.com/736x/ab/34/56/ab3456d25402dc14ea628288298a2fe6.jpg",
    color: "fudencio-green",
    specialAttack: "Fofura Mortal"
  }
];

const CharacterSelection = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-4xl text-fudencio-yellow mb-8 font-bold">Escolha seu Personagem</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {characters.map((character, index) => (
          <CharacterCard 
            key={index}
            name={character.name}
            description={character.description}
            imageUrl={character.imageUrl}
            color={character.color}
            specialAttack={character.specialAttack}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterSelection;
