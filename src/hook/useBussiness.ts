import { BusinessCreateType, Bussiness } from '@/entities/bussiness';
import { BusinessCommentCreateType, BusinessCommentService } from '@/services/BusinessCommentService';
import { BussinessService } from '@/services/BussinessService';
import { useEffect, useState } from 'react';

export function useBussiness(bussinessId?: number) {
  const [bussiness, setBussiness] = useState<Bussiness>();

  useEffect(() => {
    const fetchBussinessById = async () => {
      if (!bussinessId) return;
      const response = await BussinessService.getBussinesById(bussinessId);
      if (response) setBussiness(response);
    };

    fetchBussinessById();
  }
  , [bussinessId]);

  // create business
  const createBusiness = async (bussiness: BusinessCreateType) => {
    const response = await BussinessService.createBussiness(bussiness);
    if (response) setBussiness(response);
  };

  const createBusinessComment = async (comment: BusinessCommentCreateType) => {
    await BusinessCommentService.createBusinessComment(comment);
    // if (response) setBussiness(response);
  };

  return { bussiness, createBusiness, createBusinessComment };
}
