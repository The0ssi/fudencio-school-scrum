
import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  {
    name: "Fudêncio",
    description: "Pequeno, arrogante e totalmente sem filtros. Atira mimimi como se fossem socos.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/1/1d/Fud%C3%AAncio_PNG.png/revision/latest?cb=20250123110054",
    color: "fudencio-red",
    specialAttack: "Chuva de Mimimi´s"
  },
  {
    name: "Conrado",
    description: "Eterno sofredor, usa suas lágrimas infinitas como arma sonora.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/d/d7/Conrado_PNG.png/revision/latest?cb=20250123105846",
    color: "fudencio-blue",
    specialAttack: "Choro Devastador"
  },
  {
    name: "Funérea",
    description: "Emo gótica depressiva com um guarda-chuva afiado e letal.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/1/18/Fun%C3%A9rea_PNG.png/revision/latest?cb=20250123111130",
    color: "fudencio-purple",
    specialAttack: "Rodopio Sombrio"
  },
  {
    name: "Zezé Maria",
    description: "Militante extrema que usa cartazes e megafone contra inimigos.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/f/f5/Z%C3%A9_Maria_PNG.png/revision/latest?cb=20250123111152",
    color: "fudencio-orange",
    specialAttack: "Protesto Ensurdecedor"
  },
  {
    name: "Popoto",
    description: "Fofo por fora, psicopata por dentro. Mordidas e brinquedos explosivos.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/4/40/Popoto_PNG.png/revision/latest?cb=20250123111241",
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
