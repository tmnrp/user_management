import { Delete, Get, Injectable, Patch, Post, Query } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { RightCreateDto, RightFilterDto, RightUpdateDto } from './rights.dto';

//
@Injectable()
export class RightsService {
  //
  constructor(private readonly dbService: DbService) {}

  //
  @Get()
  getAllRights(@Query() params?: RightFilterDto) {
    return this.dbService.right.findMany({
      where: { ...params },
      orderBy: { id: 'asc' },
    });
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

  //
  @Patch()
  async updateRightById(id: number, data: RightUpdateDto) {
    const res = await this.getRightById(id);
    return this.dbService.right.update({
      where: { id: res.id },
      data,
    });
  }

  //
  @Delete()
  deleteRightById(id: number) {
    return this.dbService.right.delete({
      where: { id },
    });
  }
}
