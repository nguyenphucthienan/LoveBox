import { User } from './user.interface';

export interface BffRequest {
  id: number;
  createdAt: Date;
  fromUser: User;
  toUser: User;
  text: string;
}
