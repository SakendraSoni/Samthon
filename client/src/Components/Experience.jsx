import { OrbitControls, Stage } from '@react-three/drei';
import { Ring } from './Ring';
import { useConfigurator } from '../Context/Configurator';
import { Ring2 } from './Ring2';

export const Experience = () => {
  const { itemNo } = useConfigurator();
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        // shadows={{
        //   type: 'accumulative',
        //   color: '#d9afd9',
        //   colorBlend: 2,
        //   opacity: 2,
        // }}
        adjustCamera={2}
      >
        {itemNo === 0 && <Ring />}
        {itemNo === 1 && <Ring2 />}
      </Stage>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};
