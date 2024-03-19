import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../Components/Experience';
import { Interface } from '../Components/Interface';
import './Customization.css';

const Customization = () => {
  return (
    <div className="webgl">
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface />
    </div>
  );
};

export default Customization;
