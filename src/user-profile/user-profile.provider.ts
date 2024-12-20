import { UserProfile } from './entities/user-profile.entity';
import { USER_PROFILE_REPOSITORY } from './user-profile.constants';

export const UserProfileProviders = [
  {
    provide: USER_PROFILE_REPOSITORY,
    useValue: UserProfile,
  },
];
