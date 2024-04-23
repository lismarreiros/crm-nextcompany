import { OpportunityFlow } from '@/entities/opportunityFlow';
import axios from 'axios';

export class OpportunityFlowService {

  public static async getOpportunityFlow(): Promise<OpportunityFlow[] | null> {
    const api = axios.create({
      baseURL: 'http://localhost:3001',
    });
    // axios call
    const response = await api.get<any>(
      '/opportunity-flow',
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibmV4dGNvbXBhbnkiLCJjb21wYW55SWQiOjEsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcxMzg3Nzg5MywiZXhwIjoxNzEzOTY0MjkzfQ.n99xq4Kuaw4H7OVefglC3cHnxKJdNTeZo27OKtNScs0'
        },
      }
    );

    if (response.status === 200) {
      return response.data.map((data: any) => (
        {
          id: data.id,
          description: data.description,
          order: data.order,
        }
      ));
    }

    return null;
  }
}
