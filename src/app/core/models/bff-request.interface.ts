import { User } from './user.interface';

export interface BffRequest {
  id: number;
  fromUser: User;
  toUser: User;
  text: string;
  createdAt: Date;
}
