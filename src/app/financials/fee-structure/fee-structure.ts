export interface FeeStructure {}

export interface PeriodicElement {
  no: number;
  date: Date;
  ref: number;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}
