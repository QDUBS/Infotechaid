import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  passwordHash: string;

  @Column({ type: 'enum', enum: ['email', 'google', 'facebook'] })
  authProvider: 'email' | 'google' | 'facebook';

  @Column({ type: 'enum', enum: ['client', 'professional', 'admin'] })
  userType: 'client' | 'professional' | 'admin';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  updatedAt: Date;
}
