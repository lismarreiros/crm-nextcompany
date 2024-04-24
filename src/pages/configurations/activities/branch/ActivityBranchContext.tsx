import React, { createContext, useContext, useState } from 'react';

interface ActivityBranch {
    idramoatividade: number;
    descricao: string;
}

interface ActivityBranchContextType {
    activityBranches: ActivityBranch[];
    addActivityBranch: (branches: ActivityBranch[]) => void;
}

const ActivityBranchContext = createContext<ActivityBranchContextType>({
  activityBranches: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addActivityBranch: () => {},
});

export const useActivityBranchContext = () => useContext(ActivityBranchContext);

export const ActivityBranchProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [activityBranches, setActivityBranches] = useState<ActivityBranch[]>([]);
  
  const addActivityBranch = (branches: ActivityBranch[]) => {
    setActivityBranches([...branches]);
  };

  return (
    <ActivityBranchContext.Provider value={{ addActivityBranch, activityBranches }}>
      {children}
    </ActivityBranchContext.Provider>
  );
};
