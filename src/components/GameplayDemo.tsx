
import React, { useState, useEffect } from 'react';
import PlayerCharacter from './PlayerCharacter';
import Enemy from './Enemy';
import CorridorBackground from './CorridorBackground';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Sword } from 'lucide-react';

interface Enemy {
  id: number;
  position: number;
}

const GameplayDemo = () => {
  const [playerPosition, setPlayerPosition] = useState(50);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [isAttacking, setIsAttacking] = useState(false);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const { toast } = useToast();
  
  // Track player position from PlayerCharacter component
  const updatePlayerPosition = (position: number) => {
    setPlayerPosition(position);
  };
  
  // Handle player attack
  const handlePlayerAttack = () => {
    setIsAttacking(true);
    
    // Play attack sound effect
    const audio = new Audio('/attack-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      console.log('Audio playback prevented due to browser restrictions');
    });
    
    setTimeout(() => setIsAttacking(false), 300);
  };
  
  // Handle enemy collision with player
  const handleEnemyCollision = (id: number) => {
    if (!gameOver) {
      // Efeito sonoro de dano
      const hitSound = new Audio('/hit-sound.mp3'); // (precisaria ser criado)
      hitSound.volume = 0.2;
      hitSound.play().catch(() => {
        console.log('Audio playback prevented due to browser restrictions');
      });
      
      setPlayerHealth(prev => {
        const newHealth = Math.max(0, prev - 5);
        if (newHealth <= 0) {
          setGameOver(true);
          toast({
            title: "Game Over!",
            description: `Você foi derrotado! Pontuação final: ${score}`,
            variant: "destructive"
          });
        }
        return newHealth;
      });
    }
  };
  
  // Handle enemy defeated
  const handleEnemyDefeated = (id: number) => {
    setEnemies(prev => prev.filter(enemy => enemy.id !== id));
    setScore(prev => prev + 100);
    
    toast({
      title: "Inimigo Derrotado!",
      description: "Você derrotou um valentão! +100 pontos",
      variant: "default"
    });
  };
  
  // Aumentar a dificuldade progressivamente com o tempo
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    const difficultyTimer = setInterval(() => {
      setDifficultyLevel(prev => Math.min(prev + 1, 10)); // Máximo de 10 níveis de dificuldade
    }, 15000); // A cada 15 segundos aumenta a dificuldade
    
    return () => clearInterval(difficultyTimer);
  }, [gameStarted, gameOver]);
  
  // Spawn multiple enemies progressively after Fury level 2
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    // Determinar quantos inimigos spawnar simultaneamente baseado na fúria
    const getEnemySpawnCount = () => {
      if (difficultyLevel < 2) return 1; // Até fúria 1: apenas 1 inimigo
      if (difficultyLevel < 4) return 2; // Fúria 2-3: 2 inimigos simultâneos
      if (difficultyLevel < 6) return 3; // Fúria 4-5: 3 inimigos simultâneos
      return Math.min(4, 2 + Math.floor(difficultyLevel / 2)); // Fúria 6+: até 4 inimigos
    };
    
    // Máximo de inimigos na tela baseado na fúria
    const maxEnemiesOnScreen = difficultyLevel < 2 ? 2 : Math.min(6, 3 + difficultyLevel);
    
    const spawnInterval = setInterval(() => {
      if (enemies.length < maxEnemiesOnScreen) {
        const enemiesToSpawn = getEnemySpawnCount();
        const newEnemies: Enemy[] = [];
        
        for (let i = 0; i < enemiesToSpawn && (enemies.length + newEnemies.length) < maxEnemiesOnScreen; i++) {
          // Alternar entre spawns da esquerda e direita para criar caos
          const spawnFromRight = Math.random() > 0.5;
          // Adicionar variação nas posições iniciais para evitar sobreposição
          const basePosition = spawnFromRight ? 95 : 5;
          const positionVariation = (Math.random() - 0.5) * 10; // Variação de ±5%
          
          newEnemies.push({
            id: Date.now() + i, // Garantir IDs únicos
            position: Math.max(0, Math.min(100, basePosition + positionVariation))
          });
        }
        
        if (newEnemies.length > 0) {
          setEnemies(prev => [...prev, ...newEnemies]);
        }
      }
    }, Math.max(3000 - (difficultyLevel * 300), 800)); // Spawn mais frequente e mais agressivo
    
    return () => clearInterval(spawnInterval);
  }, [gameStarted, gameOver, enemies.length, difficultyLevel]);
  
  // Start the game
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setPlayerHealth(100);
    setScore(0);
    setEnemies([]);
    setDifficultyLevel(0);
    
    toast({
      title: "Jogo Iniciado!",
      description: "Derrote os valentões do corredor escolar!",
    });
  };

  return (
    <div className="w-full">
      {!gameStarted ? (
        <div className="flex flex-col gap-4 items-center justify-center p-8">
          <h2 className="text-3xl font-bold text-fudencio-yellow">Corrado: Caos Escolar</h2>
          <p className="text-white">Demo de Gameplay - Fase: Corredor Escolar</p>
          
          <div className="my-4 pixel-borders p-4 bg-fudencio-dark">
            <h3 className="text-fudencio-yellow mb-2">Controles:</h3>
            <p className="text-white text-sm">Setas para andar</p>
            <p className="text-white text-sm">X para atacar</p>
          </div>
          
          <Button 
            onClick={startGame} 
            className="bg-fudencio-red hover:bg-fudencio-red/80 text-xl py-6 px-8 font-pixel"
          >
            <Sword className="mr-2" /> Iniciar Demo
          </Button>
        </div>
      ) : (
        <div className="relative w-full">
          {/* Game interface */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <div className="bg-black bg-opacity-70 p-2 pixel-borders">
              <div className="text-white font-pixel">HP: {playerHealth}</div>
              <div className="w-full h-2 bg-red-900">
                <div 
                  className="h-full bg-red-500"
                  style={{ width: `${playerHealth}%` }}
                />
              </div>
            </div>
            
            <div className="bg-black bg-opacity-70 p-2 pixel-borders">
              <div className="text-fudencio-yellow font-pixel">Pontos: {score}</div>
            </div>
            
            {/* Indicador de fúria com feedback visual melhorado */}
            <div className="bg-black bg-opacity-70 p-2 pixel-borders">
              <div className={`font-pixel ${difficultyLevel >= 2 ? 'text-red-500 animate-pulse' : 'text-fudencio-orange'}`}>
                Fúria: {difficultyLevel}
                {difficultyLevel >= 2 && <span className="text-red-400 ml-1">⚠️</span>}
              </div>
            </div>
            
            {/* Contador de inimigos na tela */}
            <div className="bg-black bg-opacity-70 p-2 pixel-borders">
              <div className="text-white font-pixel">Valentões: {enemies.length}</div>
            </div>
          </div>
          
          {/* Game scene */}
          <div 
            className="game-scene relative w-full h-[300px] overflow-hidden border-4 border-black"
          >
            {/* Custom background */}
            <CorridorBackground />
            
            {/* Player character */}
            <PlayerCharacter onAttack={handlePlayerAttack} onPositionChange={updatePlayerPosition} />
            
            {/* Enemies */}
            {enemies.map(enemy => (
              <Enemy 
                key={enemy.id}
                id={enemy.id}
                position={enemy.position}
                playerPosition={playerPosition}
                isAttacked={isAttacking}
                onCollision={handleEnemyCollision}
                onEnemyDefeated={handleEnemyDefeated}
                difficulty={difficultyLevel}
              />
            ))}
            
            {/* Game over overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
                <h2 className="text-4xl text-fudencio-red font-bold mb-4">GAME OVER</h2>
                <p className="text-white mb-4">Pontuação Final: {score}</p>
                <Button 
                  onClick={startGame} 
                  className="bg-fudencio-yellow hover:bg-fudencio-yellow/80 text-fudencio-dark"
                >
                  Tentar Novamente
                </Button>
              </div>
            )}
          </div>
          
          {/* Game instructions */}
          <div className="mt-4 text-sm text-white">
            <p>Teclas: Setas para andar | X para atacar</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameplayDemo;
