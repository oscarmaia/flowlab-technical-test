import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async createUser(@Body() body: Prisma.UserCreateInput): Promise<void> {
    await this.userService.createUser(body);
  }
}
