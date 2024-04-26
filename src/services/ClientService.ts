import { Api } from './api/axios-config';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
    cellPhone: string;
    jobtitle: string;
}

interface Address {
    id: number;
    zipCode: string;
    address: string;
    city: string;
    complement: string;
    number: string;
    ibgeCode: string;
    federativeUnit: string;
    neighborhood: string;
}

export interface Client {
    id: number;
    status: string;
    cpfCnpj: string;
    corporateName: string;
    fantasyName: string;
    activityBranchId: number;
    contacts: Contact;
    address: Address;
    companyId: number;
}

const create = async (dados: Omit <Client, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api().post<Client>('/client', dados);
    if (data) {
      return data.id;
    }
    return new Error('Erro ao criar os registros.');
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string }).message || 'Erro ao criar os registros.');
  }
};

const getById = async (id: number): Promise<Client | Error> => {
  try {
    const { data } = await Api().get(`/client/${id}`);
    if (data) {
      return data;
    }
    return new Error('Erro ao consultar os registros');
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar os registros');
  }
};

export const ClientService = {
  create,
  getById
};
