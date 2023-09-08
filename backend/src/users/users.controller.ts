import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UsersService } from './users.service';
import { CreateUserBody } from 'src/dtos/create-user-body';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserBody): Promise<void> {
    await this.userService.createUser(body);
  }
}
