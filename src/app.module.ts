import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EngineerProfileModule } from './engineer-profile/engineer-profile.module';
import { EngineerProfile } from './engineer-profile/entities/engineer-profile.entity';
import { UserProfile } from './user-profile/entities/user-profile.entity';
import { User } from './user-profile/entities/user.entity';
import { UserProfileModule } from './user-profile/user-profile.module';
 
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, UserProfile, EngineerProfile],
      synchronize: true,
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([User, UserProfile, EngineerProfile]),
    UserProfileModule,
    EngineerProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 