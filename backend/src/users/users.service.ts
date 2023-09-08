import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserBody } from 'src/dtos/create-user-body';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async createUser(data: CreateUserBody) {
    const userExists = await this.usersRepository.user(data.email);
    if (userExists) {
      throw new ConflictException('User already registered');
    }
    return await this.usersRepository.createUser(data);
  }
  async getUserByEmail(email: string) {
    return await this.usersRepository.user(email);
  }
}
