import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { RightsService } from './rights.service';

//
@Controller('rights')
export class RightsController {
  //
  constructor(private readonly rightsService: RightsService) {}

  //
  @Get()
  getAllRights() {
    return this.rightsService.getAllRights();
  }

  //
  @Get(':id')
  getRightById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.rightsService.getRightById(id);
  }
}
