import React, { createContext, useContext, useState } from 'react';

interface SourceType {
    idfontenegocio: number,
    descricao: string
}

interface SourceContextType {
    sources: SourceType[];
    addSource: (sources: SourceType[]) => void;
}

const SourceContext = createContext<SourceContextType>({
  sources: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addSource: () => {},
});

export const useSourceContext = () => useContext(SourceContext);

export const SourceContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sources, setSources] = useState<SourceType[]>([]);

  const addSource = (sources: SourceType[]) => {
    setSources([...sources]);
  };

  return (
    <SourceContext.Provider value={{ sources, addSource }}>
      {children}
    </SourceContext.Provider>
  );
};
