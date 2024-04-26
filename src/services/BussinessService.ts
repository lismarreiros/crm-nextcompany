import Constants from '@/constants';
import { BusinessCreateType, Bussiness } from '@/entities/bussiness';
import axios from 'axios';

export class BussinessService {
  private static api = axios.create({
    baseURL: Constants.BASE_URL,
  });

  private static token = localStorage.getItem('APP_ACCESS_TOKEN')?.replace(/"/g, '');

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

  public static async createBussiness(bussiness: BusinessCreateType): Promise<Bussiness | null> {
    const response = await this.api.post<Bussiness>('/bussiness', bussiness, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status !== 201) {
      return null;
    }

    return response.data;
  }

}
