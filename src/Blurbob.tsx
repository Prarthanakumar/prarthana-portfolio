import React from 'react';

interface BlurBlobProps {
  position: {
    top: string;
    left: string;
  };
  size: {
    width: string;
    height: string;
  };
}

const BlurBlob: React.FC<BlurBlobProps> = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
