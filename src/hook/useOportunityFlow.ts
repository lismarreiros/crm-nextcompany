import { OpportunityFlow } from '@/entities/opportunityFlow';
import { OpportunityFlowWithBussiness } from '@/entities/opportunityFlowWithBussiness';
import { OpportunityFlowService } from '@/services/OpportunityFlowService';
import { useEffect, useState } from 'react';
export function useOpportunityFlow() {
  const [opportunityFlows, setOpportunityFlows] = useState<OpportunityFlow[]>([]);
  const [opportunityFlowsWithBussiness, setOpportunityFlowsWithBussiness] = useState<OpportunityFlowWithBussiness[]>([]);
  const [errorFetchOpportunityFlows, setErrorFetchOpportunityFlows] = useState(false);

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

  return { opportunityFlows, errorFetchOpportunityFlows, opportunityFlowsWithBussiness};
}
