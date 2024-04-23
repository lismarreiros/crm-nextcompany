import React, { createContext, useContext, useState } from 'react';

interface ActivityType {
    idtipoatividade: number;
    descricao: string;
}

interface ActivityTypeContextType {
    activityTypes: ActivityType[];
    addActivityType: (types: ActivityType[]) => void;
}

const ActivityTypeContext = createContext<ActivityTypeContextType>({
  activityTypes: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addActivityType: () => {},
});

export const useActivityTypeContext = () => useContext(ActivityTypeContext);

export const ActivityTypeProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [activityTypes, setActivityTypes] = useState<ActivityType[]>([]);
    
  const addActivityType = (types: ActivityType[]) => {
    setActivityTypes([...types]);
  };
  
  return (
    <ActivityTypeContext.Provider value={{ addActivityType, activityTypes }}>
      {children}
    </ActivityTypeContext.Provider>
  );
};
