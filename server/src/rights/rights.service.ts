import { Get, Injectable, Post } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { RightCreateDto } from './rights.dto';

//
@Injectable()
export class RightsService {
  //
  constructor(private readonly dbService: DbService) {}

  //
  @Get()
  getAllRights() {
    return this.dbService.right.findMany({ orderBy: { id: 'asc' } });
  }

  //
  @Get()
  getRightById(id: number) {
    return this.dbService.right.findFirst({ where: { id } });
  }

  //
  @Post()
  createRight(data: RightCreateDto) {
    return this.dbService.right.create({
      data,
    });
  }
}
