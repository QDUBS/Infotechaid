import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/user-profile.dto';
import { UserProfileService } from './user-profile.service';

@Controller('profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @ApiOkResponse({ description: 'Get All User Profiles' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('get-all-user-profiles')
  async getAllUserProfiles() {
    return await this.userProfileService.getAllUserProfiles();
  }

  @ApiOkResponse({ description: 'Get User Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('get-user-rofile')
  async getUserProfile(@Request() req: any) {
    return await this.userProfileService.getUserProfile(req.userId);
  }

  @ApiOkResponse({ description: 'Create User Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('create-user-profile')
  async createUserProfile(
    @Body() createUserProfileDto: CreateUserProfileDto,
    @Request() req: any,
  ) {
    return await this.userProfileService.createUserProfile(
      createUserProfileDto,
    );
  }

  @ApiOkResponse({ description: 'Update User Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put('update-user-profile')
  async updateUserProfile(
    @Body() updateUserProfileDto: UpdateUserProfileDto,
    @Request() req: any,
  ) {
    return await this.userProfileService.updateUserProfile(
      req.profile.userId,
      updateUserProfileDto,
    );
  }

  @ApiOkResponse({ description: 'Delete User Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete('delete-user-profile')
  async deleteUserProfile(@Request() req: any) {
    return await this.userProfileService.deleteUserProfile(req.profile.id);
  }
}
