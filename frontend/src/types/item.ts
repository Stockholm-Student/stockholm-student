// src/types/item.ts
export interface Item {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
  }
  
  export interface NewItem {
    name: string;
    description: string;
  }
  
  