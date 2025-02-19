import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column('text')
  bio: string;

  @Column({ name: 'profile_pic', length: 255 })
  profilePic: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
