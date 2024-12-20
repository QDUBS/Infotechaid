import { Module } from '@nestjs/common';
import { EngineerProfileController } from './engineer-profile.controller';
import { EngineerProfileProviders } from './engineer-profile.provider';
import { EngineerProfileService } from './engineer-profile.service';

@Module({
  imports: [],
  controllers: [EngineerProfileController],
  exports: [EngineerProfileService],
  providers: [EngineerProfileService, ...EngineerProfileProviders],
})
export class EngineerProfileModule {}
