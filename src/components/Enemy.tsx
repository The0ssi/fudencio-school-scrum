
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface EnemyProps {
  id: number;
  position: number;
  playerPosition: number;
  isAttacked: boolean;
  onCollision: (id: number) => void;
  onEnemyDefeated: (id: number) => void;
}

const Enemy = ({ 
  id, 
  position, 
  playerPosition, 
  isAttacked, 
  onCollision, 
  onEnemyDefeated 
}: EnemyProps) => {
  const [enemyPosition, setEnemyPosition] = useState(position);
  const [health, setHealth] = useState(100);
  const [isHit, setIsHit] = useState(false);
  const [direction, setDirection] = useState(playerPosition > position ? 'right' : 'left');

  // Move towards player
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setDirection(playerPosition > enemyPosition ? 'right' : 'left');
      
      // Move towards player - velocidade variável baseada na distância
      setEnemyPosition(prev => {
        const distance = Math.abs(playerPosition - prev);
        const speedFactor = distance > 20 ? 2 : 1; // Move mais rápido quando distante
        const moveStep = 1 * speedFactor;
        
        const newPos = playerPosition > prev 
          ? prev + moveStep 
          : prev - moveStep;
          
        // Check collision
        if (Math.abs(newPos - playerPosition) < 5) {
          onCollision(id);
        }
        
        return newPos;
      });
    }, 200);
    
    return () => clearInterval(moveInterval);
  }, [playerPosition, enemyPosition, id, onCollision]);
  
  // Handle attacks
  useEffect(() => {
    if (isAttacked && Math.abs(playerPosition - enemyPosition) < 20) {
      setIsHit(true);
      setHealth(prev => Math.max(0, prev - 25));
      
      setTimeout(() => setIsHit(false), 300);
      
      if (health <= 25) {
        onEnemyDefeated(id);
      }
    }
  }, [isAttacked, playerPosition, enemyPosition, health, id, onEnemyDefeated]);
  
  return (
    <div 
      className={cn(
        "enemy absolute bottom-0 transition-all",
        isHit ? "animate-shake bg-red-500" : ""
      )}
      style={{ 
        left: `${enemyPosition}%`,
        transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        opacity: health / 100
      }}
    >
      {/* Inimigo com melhor feedback visual */}
      <div className="relative">
        <img 
          src="https://static.wikia.nocookie.net/fudencio/images/e/ec/Cudi_PNG.png"
          alt="Aluno Valentão" 
          className={cn(
            "h-20 w-auto pixelated",
            isHit ? "border-red-500 border-4" : ""
          )}
          style={{ imageRendering: 'pixelated' }}
        />
        
        {isHit && (
          <div className="absolute inset-0 bg-red-500 opacity-50 animate-pulse"></div>
        )}
      </div>
      
      {/* Health bar with improved visibility */}
      <div className="w-full h-2 bg-red-900">
        <div 
          className="h-full bg-red-500"
          style={{ width: `${health}%` }}
        />
      </div>
    </div>
  );
};

export default Enemy;
