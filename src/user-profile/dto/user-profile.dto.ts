export class CreateUserProfileDto {
  userId: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  bio?: string;
  location?: string;
  rating?: number;
  createdAt?: number;
  updatedAt?: number;
}

export class UpdateUserProfileDto {
  id: string;
  userId: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  bio?: string;
  location?: string;
  rating?: number;
  createdAt?: number;
  updatedAt?: number;
}
