import { ENGINEER_PROFILE_REPOSITORY } from './engineer-profile.constants';
import { EngineerProfile } from './entities/engineer-profile.entity';

export const EngineerProfileProviders = [
  {
    provide: ENGINEER_PROFILE_REPOSITORY,
    useValue: EngineerProfile,
  },
];
