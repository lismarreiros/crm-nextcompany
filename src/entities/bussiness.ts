export interface _BusinessComment {
  id: number;
  comment: string;
  user: {
    id: number;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Bussiness {
    id: number;
    description: string;
    bussinessComments?: _BusinessComment[]
    contactNumber?: string;
    closedAt?: Date;
    startedAt?: Date;
    createdAt?: Date;
    prevision?: Date;
    client?: {
      id: number;
      corporateName: string;
      fantasyName: string;
    };
    opportunityFlowId: number;
}

export type BusinessCreateType = Omit<Bussiness, 'id'> 
