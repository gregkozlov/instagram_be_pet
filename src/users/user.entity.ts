// user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // UUID primary key

  @Column({ length: 50, unique: true })
  username!: string; // Unique username

  @Column({ length: 100, unique: true })
  email!: string; // Unique email

  @Column({ length: 255 })
  password!: string; // Hashed password

  @Column({ type: 'text', nullable: true }) // Bio is optional
  bio?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
