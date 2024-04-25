import { Bussiness } from '@/entities/bussiness';
import { BussinessService } from '@/services/BussinessService';
import { useEffect, useState } from 'react';

export function useBussiness(bussinessId: number) {
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

  return { bussiness };
}
