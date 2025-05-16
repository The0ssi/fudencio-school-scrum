
import React from 'react';
import { cn } from '@/lib/utils';

interface CharacterCardProps {
  name: string;
  description: string;
  imageUrl: string;
  color: string;
  specialAttack: string;
}

const CharacterCard = ({ name, description, imageUrl, color, specialAttack }: CharacterCardProps) => {
  return (
    <div className={cn(
      "character-select pixel-borders p-4 rounded-md bg-opacity-80 transition-all",
      "flex flex-col items-center justify-center text-center h-full",
      `bg-${color}`
    )}>
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-32 h-32 object-contain" 
        />
      </div>
      
      <h3 className="text-2xl font-bold mt-2 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">{name}</h3>
      <p className="text-white text-sm my-2 h-16 overflow-auto">{description}</p>
      
      <div className="mt-2 bg-black bg-opacity-50 p-2 rounded-md w-full">
        <span className="text-fudencio-yellow font-bold">Ataque Especial:</span> 
        <span className="text-white"> {specialAttack}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
