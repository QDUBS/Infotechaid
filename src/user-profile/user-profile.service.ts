import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/user-profile.dto';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
  ) {}

  async getAllUserProfiles() {
    return this.userProfileRepository.find({
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });
  }

  async getUserProfile(userId: string) {
    const profile = await this.userProfileRepository.findOne({
      where: { userId },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(
        `User profile with ID ${userId} does not exist`,
      );
    }

    return profile;
  }

  async createUserProfile(createUserProfileDto: CreateUserProfileDto) {
    const { createdAt, updatedAt, ...profileData } = createUserProfileDto;
    try {
      const newProfile = this.userProfileRepository.create({
        ...profileData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return await this.userProfileRepository.save(newProfile);
    } catch (error) {
      console.error('Error:', error);
      return new ForbiddenException('An error occured. Try again.');
    }
  }

  async updateUserProfile(
    id: string,
    updateUserProfileDto: UpdateUserProfileDto,
  ) {
    const { updatedAt, ...profileData } = updateUserProfileDto;

    const profile = await this.userProfileRepository.findOne({
      where: { id },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(`User profile with ID ${id} does not exist`);
    }

    Object.assign(profile, {
      ...profileData,
      createdAt: profileData.createdAt,
      updatedAt: new Date(),
    });
    return await this.userProfileRepository.save(profile);
  }

  async deleteUserProfile(id: string): Promise<boolean> {
    const profile = await this.userProfileRepository.findOne({
      where: { id },
      select: [
        'id',
        'userId',
        'firstName',
        'lastName',
        'profilePicture',
        'bio',
        'location',
        'rating',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!profile) {
      throw new NotFoundException(`User profile with ID ${id} does not exist`);
    }

    await this.userProfileRepository.delete(id);
    return true;
  }
}
