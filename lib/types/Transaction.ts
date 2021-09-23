import { TransactionCategory } from "./TransactionCategory";
import { User } from "./User";

export type Transaction = {
  id: string;
  createdAt: string;
  amount: number;
  currency: string;
  label: string;
  category: TransactionCategory;
  comment: string;
  user: User;
};

export type GroupedTransactions = {
  income:
    | [
        {
          name: string;
          values: GroupedTransactionValue[];
        }
      ]
    | [];
  expenses:
    | [
        // loop as rows
        {
          name: string;
          values: GroupedTransactionValue[];
        }
      ]
    | [];
};

export type GroupedTransactionValue = {
  selector: string;
  value: number;
};
