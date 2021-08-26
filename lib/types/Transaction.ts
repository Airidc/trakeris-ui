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
