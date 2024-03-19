import { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [itemNo, setItemNo] = useState(0);
  const [diamondsColor, setDiamondsColor] = useState('#CFECEC');
  const [ringMaterial, setRingMaterial] = useState(0);
  return (
    <ConfiguratorContext.Provider
      value={{
        itemNo,
        setItemNo,
        diamondsColor,
        setDiamondsColor,
        ringMaterial,
        setRingMaterial,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
