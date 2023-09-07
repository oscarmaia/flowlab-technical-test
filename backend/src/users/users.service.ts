import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async createUser(data: Prisma.UserCreateInput) {
    await this.usersRepository.createUser(data);
  }
}
