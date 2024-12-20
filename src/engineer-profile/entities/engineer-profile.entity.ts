import { User } from 'src/user-profile/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileStatus } from '../common/types';

@Entity('engineer-profiles')
export class EngineerProfile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'enum',
    enum: ProfileStatus,
  })
  profileStatus: ProfileStatus;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', nullable: true })
  profilePicture: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'text', nullable: true })
  skills: string;

  @Column({ type: 'varchar', nullable: true })
  location: string;

  @Column({ type: 'float', nullable: true })
  minRate: number;

  @Column({ type: 'float', nullable: true })
  maxRate: number;

  @Column({ type: 'float', nullable: true })
  rating: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;
}
