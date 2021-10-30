import { Injectable, ConflictException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserRole } from './enum/role.enum';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {} //cria uma variavel db privada (um para cada usuario, a mesma e destruida depois de usada.)

  async create(data: Prisma.UserCreateInput, role: UserRole): Promise<User> {
    const userExists = await this.db.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new ConflictException('Email já está cadastrado');
    }

    const user = await this.db.user.create({
      data,
    });

    return user;
  }
}
