import { User } from './user.interface';

export interface BffDetail {
  id: number;
  createdAt: Date;
  firstUser: User;
  secondUser: User;
  description: string;
}
