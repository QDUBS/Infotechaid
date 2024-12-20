import { Test, TestingModule } from '@nestjs/testing';
import { EngineerProfileProviders } from './engineer-profile.provider';
import { EngineerProfileService } from './engineer-profile.service';

describe('EngineerProfileService', () => {
  let service: EngineerProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerProfileService, ...EngineerProfileProviders],
    }).compile();

    service = module.get<EngineerProfileService>(EngineerProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
