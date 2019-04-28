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
  followingCount?: number;
  followersCount?: number;
  followed?: boolean;
}
