import { User } from './user.interface';

export interface SingleQuestion {
  id: number;
  createdAt: Date;
  questioner?: User;
  answerer: User;
  questionText: string;
  answerText: string;
  answered: boolean;
  answeredAt: Date;
  loveCount: number;
}
