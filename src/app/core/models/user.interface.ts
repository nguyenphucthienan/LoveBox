import { BffDetail } from './bff-detail.interface';
import { Role } from './role.interface';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  moodMessage?: string;
  roles?: Role[];
  bffDetail?: BffDetail;
  followingCount?: number;
  followersCount?: number;
  followed?: boolean;
}
