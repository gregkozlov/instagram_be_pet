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
  id!: string;

  @Column({ length: 50, unique: true })
  username!: string;

  @Column({ length: 100, unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @Column({ type: 'text', nullable: true })
  bio?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
