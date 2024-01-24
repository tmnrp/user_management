import { Get, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class RightsService {
  //
  constructor(private readonly dbService: DbService) {}

  //
  @Get()
  getAllRights() {
    return this.dbService.right.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }
}
