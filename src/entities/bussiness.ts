export interface Bussiness {
    id: number;
    description: string;
    status?: string;
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
