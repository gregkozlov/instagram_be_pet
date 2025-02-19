// users.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // findAll() {
  //   // return [];
  //   return this.usersService.findAll();
  // }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    console.log('Response:', users);
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }
}
