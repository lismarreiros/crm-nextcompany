import Constants from '@/constants';
import axios from 'axios';

export interface BusinessCommentCreateType {
    businessId: number;
    comment: string;
}

export class  BusinessCommentService {
  private static api = axios.create({
    baseURL: Constants.BASE_URL,
  });

  private static token = localStorage.getItem('APP_ACCESS_TOKEN')?.replace(/"/g, '');

  public static async createBusinessComment(comment: BusinessCommentCreateType): Promise<any | null> {
    const response = await this.api.post<any>('/comment', comment, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });

    if (response.status !== 201) {
      return null;
    }

    return response.data.comment;
  }

}

