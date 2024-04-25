import { OpportunityFlow } from '@/entities/opportunityFlow';
import axios from 'axios';
import Constants from '@/constants';
import { OpportunityFlowWithBussiness } from '@/entities/opportunityFlowWithBussiness';

export class OpportunityFlowService {

  private static api = axios.create({
    baseURL: Constants.BASE_URL,
  });

  private static token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibmV4dGNvbXBhbnkiLCJjb21wYW55SWQiOjEsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcxNDA0NjQ2NCwiZXhwIjoxNzE0MTMyODY0fQ.dNfz6mxnQq5aSaJAnBBdEE2b4Qo2R2g6BSKQBxYQQz4';

  public static async getOpportunityFlow(): Promise<OpportunityFlow[] | null> {
    // axios call
    const response = await this.api.get<any>('/opportunity-flow', {
      headers: {
        Authorization:
          'Bearer ' + this.token,
      },
    });

    if (response.status === 200) {
      return response.data.map((data: any) => ({
        id: data.id,
        description: data.description,
        order: data.order,
      }));
    }

    return null;
  }

  public static async getOpportunityFlowWithBussiness(): Promise<OpportunityFlowWithBussiness[] | null> {
    // axios call
    const response = await this.api.get<any>('/opportunity-flow-with-bussiness', {
      headers: {
        Authorization:
          'Bearer ' + this.token,
      },
    });

    if (response.status === 200) {
      return response.data.map((data: any) => ({
        id: data.id,
        description: data.description,
        order: data.order,
        bussiness: data.bussiness.map((bussiness: any) => ({
          id: bussiness.id,
          description: bussiness.description,
          status: bussiness.status,
          closedAt: bussiness.closedAt,
          startedAt: bussiness.startedAt,
          prevision: bussiness.prevision,
          clientId: bussiness.clientId,
        }))
      }));
    }

    return null;
  }

  public static async swapOpportunityFlows(firstOpportunityFlowId: number, secondOpportunityFlowId: number): Promise<OpportunityFlow[] | null> {
    const response = await this.api.post<any>('/opportunity-flow/change-order', {
      firstOpportunityFlowId: firstOpportunityFlowId,
      secondOpportunityFlowId: secondOpportunityFlowId
    }, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status === 201) {
      return response.data.map((data: any) => ({
        id: data.id,
        description: data.description,
        order: data.order,
      }));
    }

    return null;
  }

  // change opportunity flow of bussiness
  public static async changeOpportunityFlowOfBussiness(bussinessId: number, opportunityFlowId: number): Promise<OpportunityFlowWithBussiness[] | null> {
    const response = await this.api.post<any>('/bussiness/change-opportunity-flow', {
      bussinessId: bussinessId,
      newOpportunityFlowId: opportunityFlowId
    }, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status === 201) {
      return response.data.map((data: any) => ({
        id: data.id,
        description: data.description,
        order: data.order,
        bussiness: data.bussiness.map((bussiness: any) => ({
          id: bussiness.id,
          description: bussiness.description,
          status: bussiness.status,
          closedAt: bussiness.closedAt,
          startedAt: bussiness.startedAt,
          prevision: bussiness.prevision,
          clientId: bussiness.clientId,
        }))
      }));
    }

    return null;
  }

  public static async updateManyOpportunityFlow(opportunitiesFlows: OpportunityFlow[]): Promise<OpportunityFlow[] | null> {

    const response = await this.api.post<any>('/opportunity-flow/update-many', {
      opportunitiesFlows: opportunitiesFlows.map((opportunityFlow) => ({
        id: opportunityFlow.id,
        description: opportunityFlow.description,
        order: opportunityFlow.order
      }))
    }, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status === 201) {
      return response.data.map((data: any) => ({
        id: data.id,
        description: data.description,
        order: data.order,
      }));
    }

    return null;
  }
}
