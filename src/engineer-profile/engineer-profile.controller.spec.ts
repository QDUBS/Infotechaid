import { Test, TestingModule } from '@nestjs/testing';
import { EngineerProfileController } from './engineer-profile.controller';
import { EngineerProfileProviders } from './engineer-profile.provider';
import { EngineerProfileService } from './engineer-profile.service';

describe('EngineerProfileController', () => {
  let controller: EngineerProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerProfileController],
      providers: [EngineerProfileService, ...EngineerProfileProviders],
    }).compile();

    controller = module.get<EngineerProfileController>(EngineerProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
