import React, { createContext, useContext, useState } from 'react';

interface OpportunityFlow {
  idfluxodeoportunidade: number;
  ordem: number;
  descricao: string;
}

interface OpportunityFlowContextType {
  opportunityFlows: OpportunityFlow[];
  addOpportunityFlow: (flows: OpportunityFlow[]) => void;
}

const OpportunityFlowContext = createContext<OpportunityFlowContextType>({
  opportunityFlows: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addOpportunityFlow: () => {},
});

export const useOpportunityFlowContext = () => useContext(OpportunityFlowContext);

export const OpportunityFlowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [opportunityFlows, setOpportunityFlows] = useState<OpportunityFlow[]>([]);

  const addOpportunityFlow = (flows: OpportunityFlow[]) => {
    setOpportunityFlows([...flows]);
  };

  return (
    <OpportunityFlowContext.Provider value={{ opportunityFlows, addOpportunityFlow }}>
      {children}
    </OpportunityFlowContext.Provider>
  );
};
