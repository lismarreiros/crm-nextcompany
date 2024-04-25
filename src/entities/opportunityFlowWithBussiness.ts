interface _Bussiness {
  id: number;
  description: string;
  satus?: string;
  closedAt?: Date;
  startedAt?: Date;
  prevision?: Date;
  clientId?: number;  
}

export interface OpportunityFlowWithBussiness {
  id: number;
  order: number;
  description: string;
  bussiness: _Bussiness[];
}

