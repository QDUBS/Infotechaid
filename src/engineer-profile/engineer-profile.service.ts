import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateEngineerProfileDto,
  UpdateEngineerProfileDto,
} from './dto/engineer-profile.dto';
import { EngineerProfile } from './entities/engineer-profile.entity';

@Injectable()
export class EngineerProfileService {
  constructor(
    @InjectRepository(EngineerProfile)
    private engineerProfileRepository: Repository<EngineerProfile>,
  ) {}

  async getAllEngineerProfiles() {
    return this.engineerProfileRepository.find({
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'skills',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });
  }

  async getEngineerProfile(userId: string) {
    const profile = await this.engineerProfileRepository.findOne({
      where: { userId },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'skills',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(
        `Engineer profile with ID ${userId} does not exist`,
      );
    }

    return profile;
  }

  async createEngineerProfile(
    createEngineerProfileDto: CreateEngineerProfileDto,
  ) {
    const { createdAt, updatedAt, ...profileData } = createEngineerProfileDto;

    try {
      const newProfile = this.engineerProfileRepository.create({
        ...profileData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return await this.engineerProfileRepository.save(newProfile);
    } catch (error) {
      console.error('Error:', error);
      return new ForbiddenException('An error occured. Try again.');
    }
  }

  async updateEngineerProfile(
    id: string,
    updateEngineerProfileDto: UpdateEngineerProfileDto,
  ) {
    const { updatedAt, ...profileData } = updateEngineerProfileDto;

    const profile = await this.engineerProfileRepository.findOne({
      where: { id },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'skills',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(
        `Engineer profile with ID ${id} does not exist`,
      );
    }

    Object.assign(profile, {
      ...profileData,
      createdAt: profileData.createdAt,
      updatedAt: new Date(),
    });
    return await this.engineerProfileRepository.save(profile);
  }

  async deleteEngineerProfile(id: string): Promise<boolean> {
    const profile = await this.engineerProfileRepository.findOne({
      where: { id },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'skills',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(
        `Engineer profile with ID ${id} does not exist`,
      );
    }

    await this.engineerProfileRepository.delete(id);
    return true;
  }
}
