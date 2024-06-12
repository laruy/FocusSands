import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  getUserById(userId: string) {
    return this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });
  }

  updateUserById(userId: string, updateUserDto: UpdateUserDto) {
    const { name } = updateUserDto;
    return this.usersRepo.update({
      where: { id: userId },
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}
