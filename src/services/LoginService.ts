/* eslint-disable @typescript-eslint/no-explicit-any */
import Constants from '@/constants';
import axios from 'axios';
import { string } from 'zod';

interface Login {
    accessToken: string;
}

export class LoginService {
    
  private static api = axios.create({
    baseURL: Constants.BASE_URL,
  });

  public static async getLogin(): Promise<Login | null> {
    // axios call
    const response = await this.api.get<any>('/login', { data: { email: string, password: string}
    });

    if (response.status === 200 ) {
      return response.data.map((data: any) => ({
        email: data.email,
        password: data.password
      }));
    }

    return null;
  }
}
