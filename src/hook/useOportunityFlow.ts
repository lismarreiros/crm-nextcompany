import { OpportunityFlow } from '@/entities/opportunityFlow';
import { OpportunityFlowService } from '@/services/OpportunityFlowService';
import { useEffect, useState } from 'react';
export function useOpportunityFlow() {
  const [opportunityFlows, setOpportunityFlows] = useState<OpportunityFlow[] | null>([]);
  const [errorFetchOpportunityFlows, setErrorFetchOpportunityFlows] = useState(false);
  useEffect(() => {
    const fetchOpportunityFlows = async () => {
      try {
        const response = await OpportunityFlowService.getOpportunityFlow();
        setOpportunityFlows(response);
      } catch (error) {
        console.log(error);
        
        setErrorFetchOpportunityFlows(true);
      }
    };

    fetchOpportunityFlows();
  }, []);

  return { opportunityFlows, errorFetchOpportunityFlows };
}
