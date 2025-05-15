
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sword } from 'lucide-react';

interface PlayerCharacterProps {
  onAttack: () => void;
  onPositionChange?: (position: number) => void;
}

const PlayerCharacter = ({ onAttack, onPositionChange }: PlayerCharacterProps) => {
  const [position, setPosition] = useState(50);
  const [isJumping, setIsJumping] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);
  const [facingDirection, setFacingDirection] = useState('right');
  
  // Atualiza a posição no componente pai
  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(position);
    }
  }, [position, onPositionChange]);
  
  // Handle keyboard controls
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPosition(prev => Math.max(0, prev - 15));
        setFacingDirection('left');
      }
      if (e.key === 'ArrowRight') {
        setPosition(prev => Math.min(85, prev + 15));
        setFacingDirection('right');
      }
      if (e.key === ' ' && !isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
      if (e.key === 'x' && !isAttacking) {
        setIsAttacking(true);
        onAttack();
        setTimeout(() => setIsAttacking(false), 300);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isJumping, isAttacking, onAttack]);

  return (
    <div 
      className={cn(
        "player absolute bottom-0 transition-all",
        isJumping ? "animate-bounce" : "",
        isAttacking ? "attacking" : ""
      )}
      style={{ 
        left: `${position}%`,
        transform: `scaleX(${facingDirection === 'left' ? -1 : 1})`,
        transition: 'left 0.1s ease-out'
      }}
    >
      <div className="relative">
        {isAttacking && (
          <>
            <div className={cn(
              "absolute comic-text animate-fade-out text-xl font-bold",
              facingDirection === 'right' ? "left-12" : "right-12"
            )}>
              *PIIII*
            </div>
            {/* Efeito de onda de ataque */}
            <div className={cn(
              "absolute w-24 h-16 rounded-full bg-fudencio-yellow opacity-70 animate-pulse",
              facingDirection === 'right' ? "left-12 -top-4" : "right-12 -top-4"
            )} />
          </>
        )}
        <img 
          src="https://static.wikia.nocookie.net/fudencio/images/1/1d/Fud%C3%AAncio_PNG.png/revision/latest/scale-to-width-down/100"
          alt="Fudêncio" 
          className={cn(
            "h-24 w-auto pixelated",
            isAttacking ? "animate-attack" : ""
          )}
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
};

export default PlayerCharacter;
