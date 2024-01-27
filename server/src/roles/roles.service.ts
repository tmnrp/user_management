import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

//
@Injectable()
export class RolesService {
  //
  constructor(private readonly dbService: DbService) {}

  //
  async getAllRoles() {
    //
    return await this.dbService.role.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  //
  async getAllRoleById(id: number) {
    //
    return await this.dbService.role.findFirst({
      where: {
        id,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }
}
