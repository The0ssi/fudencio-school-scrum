
import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  {
    name: "Fudêncio",
    description: "Pequeno, arrogante e totalmente sem filtros. Atira palavrões como se fossem socos.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYjIxODhlMDAtYTcxZi00Y2RkLWEzMjctZjA3OTA5ZDg5NTYyXkEyXkFqcGc@._V1_.jpg",
    color: "fudencio-red",
    specialAttack: "Chuva de Palavrões"
  },
  {
    name: "Conrado",
    description: "Eterno sofredor, usa suas lágrimas infinitas como arma sonora.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/7/7a/Conrado.jpg/revision/latest?cb=20180213161054",
    color: "fudencio-blue",
    specialAttack: "Choro Devastador"
  },
  {
    name: "Funérea",
    description: "Emo gótica depressiva com um guarda-chuva afiado e letal.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/e/e4/FunereaAeronave.png/revision/latest?cb=20240601125344",
    color: "fudencio-purple",
    specialAttack: "Rodopio Sombrio"
  },
  {
    name: "Zezé Maria",
    description: "Militante extrema que usa cartazes e megafone contra inimigos.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/e/e3/AntiZeMaria.JPG/revision/latest?cb=20240621065406",
    color: "fudencio-orange",
    specialAttack: "Protesto Ensurdecedor"
  },
  {
    name: "Popoto",
    description: "Fofo por fora, psicopata por dentro. Mordidas e brinquedos explosivos.",
    imageUrl: "https://static.wikia.nocookie.net/fudencio/images/c/c3/PopotoDesignAntesDaSerie.png/revision/latest/scale-to-width-down/1000?cb=20231101062344",
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
