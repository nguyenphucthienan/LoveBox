import { User } from './user.interface';

export interface CoupleQuestion {
  id: number;
  createdAt: Date;
  questioner?: User;
  firstAnswerer: User;
  secondAnswerer: User;
  questionText: string;
  firstAnswerText: string;
  secondAnswerText: string;
  answered: boolean;
  answeredAt: Date;
  loves: User[];
}
