interface _Bussiness {
  [x: string]: any;
  id: number;
  description: string;
  satus?: string;
  closedAt?: Date;
  startedAt?: Date;
  prevision?: Date;
  clientId?: number;  
  contactNumber?: string;
}

export interface OpportunityFlowWithBussiness {
  id: number;
  order: number;
  description: string;
  bussiness: _Bussiness[];
}

