// users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // async findAll(): Promise<User[]> {
  //   const users = await this.userRepository.find();
  //   console.log('Fetched users:', users); // Debugging log
  //   return users;
  // }
  async findAll(): Promise<User[]> {
    console.log('Fetching users...');
    const users = await this.userRepository.find();
    console.log('Fetched users:', users); // Should display user data
    return users;
  }
}
