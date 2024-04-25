import Constants from '@/constants';
import { Bussiness } from '@/entities/bussiness';
import axios from 'axios';

export class BussinessService {
  private static api = axios.create({
    baseURL: Constants.BASE_URL,
  });

  private static token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibmV4dGNvbXBhbnkiLCJjb21wYW55SWQiOjEsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcxNDA0NjQ2NCwiZXhwIjoxNzE0MTMyODY0fQ.dNfz6mxnQq5aSaJAnBBdEE2b4Qo2R2g6BSKQBxYQQz4';

  public static async getBussinesById(bussinessId: number): Promise<Bussiness| null> {

    const response = await this.api.get<Bussiness>(`/bussiness/${bussinessId}`, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data;

  }

}

