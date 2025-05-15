
import React from 'react';

interface ScenePreviewProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ScenePreview = ({ title, imageUrl, description }: ScenePreviewProps) => {
  return (
    <div className="relative pixel-borders bg-fudencio-dark p-1 m-2">
      <div className="w-full h-32 md:h-48 overflow-hidden bg-black">
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            imageRendering: 'pixelated'
          }}
        />
      </div>
      <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 p-2">
        <h4 className="text-fudencio-yellow text-lg font-bold">{title}</h4>
        <p className="text-white text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ScenePreview;
