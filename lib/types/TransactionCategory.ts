import { User } from "./User";

export type TransactionCategory = {
  id: string;
  name: string;
  transactionType: number;
  user: User;
};
