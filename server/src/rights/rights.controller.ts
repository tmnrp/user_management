import { Controller, Get, Param } from '@nestjs/common';
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
  getRightById(@Param('id') id: number) {
    return this.rightsService.getRightById(id);
  }
}
