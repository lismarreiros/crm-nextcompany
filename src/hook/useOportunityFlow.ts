import { OpportunityFlow } from '@/entities/opportunityFlow';
import { OpportunityFlowWithBussiness } from '@/entities/opportunityFlowWithBussiness';
import { OpportunityFlowService } from '@/services/OpportunityFlowService';
import { useEffect, useState } from 'react';
export function useOpportunityFlow() {
  const [opportunityFlows, setOpportunityFlows] = useState<OpportunityFlow[]>([]);
  const [opportunityFlowsWithBussiness, setOpportunityFlowsWithBussiness] = useState<OpportunityFlowWithBussiness[]>([]);
  const [errorFetchOpportunityFlows, setErrorFetchOpportunityFlows] = useState(false);
  const [saveOpportunityFlowsError, setSaveOpportunityFlowsError] = useState(false);

  const getAllOpportunityFlowWithBussiness = async () => {
    try {
      const response = await OpportunityFlowService.getOpportunityFlowWithBussiness();
      if (response) setOpportunityFlowsWithBussiness(response);
    } catch (error) {
      console.log(error);
      // setErrorFetchOpportunityFlows(true);
    }
  };

  useEffect(() => {
    const fetchOpportunityFlows = async () => {
      try {
        const response = await OpportunityFlowService.getOpportunityFlow();
        if (response) setOpportunityFlows(response);
      } catch (error) {
        console.log(error);
        
        setErrorFetchOpportunityFlows(true);
      }
    };

    fetchOpportunityFlows();
    getAllOpportunityFlowWithBussiness();
  }, []);

  const swapOpportunityFlows = async (firstOpportunityFlowId: number, secondOpportunityFlowId: number) => {
    const response = await OpportunityFlowService.swapOpportunityFlows(firstOpportunityFlowId, secondOpportunityFlowId);
    console.log(response);
  };

  // todo: adicionar função para remove fluxo de oportunidade.

  const changeOpportunityFlowOfBussiness = async (bussinessId: number, opportunityFlowId: number) => {
    const response = await OpportunityFlowService.changeOpportunityFlowOfBussiness(bussinessId, opportunityFlowId); 
    // if (response) setOpportunityFlowsWithBussiness(response);
    console.log(response);
  };

  const saveOpportunityFlows = async (opportunityFlows: OpportunityFlow[]) => {
    try {
      await OpportunityFlowService.updateManyOpportunityFlow(opportunityFlows);
    } catch (error) {
      console.log(error);
      setSaveOpportunityFlowsError(true);
    }
  };

  return {
    opportunityFlows,
    errorFetchOpportunityFlows,
    opportunityFlowsWithBussiness,
    saveOpportunityFlowsError,
    swapOpportunityFlows,
    saveOpportunityFlows,
    changeOpportunityFlowOfBussiness
  };
}
