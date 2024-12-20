import { ProfileStatus } from '../common/types';

export class CreateEngineerProfileDto {
  userId: string;
  profileStatus: ProfileStatus;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  bio?: string;
  skills?: string;
  location?: string;
  minRate: number;
  maxRate: number;
  rating?: number;
  createdAt: Date;
  updatedAt?: Date;
}

export class UpdateEngineerProfileDto {
  id: string;
  userId: string;
  profileStatus?: ProfileStatus;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  bio?: string;
  skills?: string;
  location?: string;
  minRate?: number;
  maxRate?: number;
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
