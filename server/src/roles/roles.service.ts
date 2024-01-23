import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

//
@Injectable()
export class RolesService {
  //
  constructor(private readonly prismaService: PrismaService) {}

  async getAllRoles() {
    return await this.prismaService.role.findMany();
  }
}
