import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { UserProfileProviders } from './user-profile.provider';
import { UserProfileService } from './user-profile.service';

@Module({
  imports: [],
  controllers: [UserProfileController],
  exports: [UserProfileService],
  providers: [UserProfileService, ...UserProfileProviders],
})
export class UserProfileModule {}
