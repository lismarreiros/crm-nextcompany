import { Bussiness } from '@/entities/bussiness';
import { useBussiness } from '@/hook/useBussiness';
import { BussinessService } from '@/services/BussinessService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// business detail contex
interface IBusinessDetail {
  bussiness: Bussiness
}

const BusinessDetailContext = React.createContext<any>({} as IBusinessDetail);

export const BusinessDetailProvider: React.FC<any> = ({ children }) => {
  const leadId =  Number(useParams().leadId);
  const [bussiness, setBussiness] = useState<Bussiness>();
  // const { bussiness } = useBussiness(leadId);

  useEffect(() => {
    const fetchBussinessById = async () => {
      if (!leadId) return;
      const response = await BussinessService.getBussinesById(leadId);
      if (response) setBussiness(response);
    };
    fetchBussinessById();
  }, [leadId]);

  return (
    <BusinessDetailContext.Provider value={{ bussiness }}>
      {children}
    </BusinessDetailContext.Provider>
  );
};

export const useBusinessDetailContext = () => React.useContext(BusinessDetailContext);
