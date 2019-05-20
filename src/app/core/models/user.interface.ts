import { BffDetail } from './bff-detail.interface';
import { Photo } from './photo.interface';
import { Role } from './role.interface';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  moodMessage?: string;
  photo?: Photo;
  roles?: Role[];
  bffDetail?: BffDetail;
  followingCount?: number;
  followersCount?: number;
  followed?: boolean;
}
