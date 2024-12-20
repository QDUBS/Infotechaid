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
  CreateEngineerProfileDto,
  UpdateEngineerProfileDto,
} from './dto/engineer-profile.dto';
import { EngineerProfileService } from './engineer-profile.service';

@Controller('engineer-profile')
export class EngineerProfileController {
  constructor(
    private readonly engineerProfileService: EngineerProfileService,
  ) {}

  @ApiOkResponse({ description: 'Get All Engineer Profiles' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('get-all-engineer-profiles')
  async getAllEngineerProfiles() {
    return await this.engineerProfileService.getAllEngineerProfiles();
  }

  @ApiOkResponse({ description: 'Get Engineer Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('get-engineer-profile')
  async getEngineerProfile(@Request() req: any) {
    return await this.engineerProfileService.getEngineerProfile(req.userId);
  }

  @ApiOkResponse({ description: 'Create Engineer Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('create-engineer-profile')
  async createEngineerProfile(
    @Body() createEngineerProfileDto: CreateEngineerProfileDto,
    @Request() req: any,
  ) {
    return await this.engineerProfileService.createEngineerProfile(
      createEngineerProfileDto,
    );
  }

  @ApiOkResponse({ description: 'Update Engineer Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put('update-engineer-profile')
  async updateEngineerProfile(
    @Body() updateEngineerProfileDto: UpdateEngineerProfileDto,
    @Request() req: any,
  ) {
    return await this.engineerProfileService.updateEngineerProfile(
      req.profile.userId,
      updateEngineerProfileDto,
    );
  }

  @ApiOkResponse({ description: 'Delete Engineer Profile' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete('delete-engineer-profile')
  async deleteEngineerProfile(@Request() req: any) {
    return await this.engineerProfileService.deleteEngineerProfile(
      req.profile.id,
    );
  }
}
