
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
      
      // Move towards player
      setEnemyPosition(prev => {
        const newPos = playerPosition > prev 
          ? prev + 1 
          : prev - 1;
          
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
        isHit ? "animate-shake text-red-500" : ""
      )}
      style={{ 
        left: `${enemyPosition}%`,
        transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        opacity: health / 100
      }}
    >
      {/* Placeholder enemy image - would be replaced with actual character */}
      <div className="bg-fudencio-dark text-white p-2 h-20 w-16 flex items-center justify-center pixel-borders">
        <span className="text-xs">Aluno<br/>Valentão</span>
      </div>
      
      {/* Health bar */}
      <div className="w-full h-1 bg-red-900">
        <div 
          className="h-full bg-red-500"
          style={{ width: `${health}%` }}
        />
      </div>
    </div>
  );
};

export default Enemy;
