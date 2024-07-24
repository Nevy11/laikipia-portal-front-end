export interface FeeStructure {}

export interface feeStatement {
  no: number;
  date: string;
  ref: number;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}
export interface balance {
  debit: number;
  credit: number;
  balance: number;
}
