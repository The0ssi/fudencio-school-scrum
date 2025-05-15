
import React from 'react';
import ScenePreview from './ScenePreview';

const scenes = [
  {
    title: "Corredor Escolar",
    imageUrl: "/placeholder.svg",
    description: "Corredores imundos com pichações, armários quebrados e poças suspeitas."
  },
  {
    title: "Cantina Nojenta",
    imageUrl: "/placeholder.svg",
    description: "Comida duvidosa, baratas gigantes e uma merendeira mal-humorada."
  },
  {
    title: "Banheiro Depredado",
    imageUrl: "/placeholder.svg",
    description: "Vasos quebrados, pias entupidas e fantasmas de alunos traumatizados."
  },
  {
    title: "Sala da Diretoria",
    imageUrl: "/placeholder.svg",
    description: "Arena de boss fight contra o diretor Fulano, um tirano escolar."
  }
];

const SceneCollection = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-4xl text-fudencio-pink mb-6 font-bold">Cenários Caóticos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {scenes.map((scene, index) => (
          <ScenePreview 
            key={index}
            title={scene.title}
            imageUrl={scene.imageUrl}
            description={scene.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SceneCollection;
