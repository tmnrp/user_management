import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { RightsService } from './rights.service';
import { RightCreateDto, RightFilterDto, RightUpdateDto } from './rights.dto';
import { ZodValidationPipe } from '../utils';
import { RightCreateSchema } from './rights.schema';

//
@Controller('rights')
export class RightsController {
  //
  constructor(private readonly rightsService: RightsService) {}

  //
  @Get()
  getAllRights(@Query() params?: RightFilterDto) {
    return this.rightsService.getAllRights(params);
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

  //
  @Post()
  @UsePipes(new ZodValidationPipe(RightCreateSchema))
  createRight(@Body() data: RightCreateDto) {
    return this.rightsService.createRight(data);
  }

  //
  @Patch()
  updateRight(@Param('id') id: number, @Body() data: RightUpdateDto) {
    return this.rightsService.updateRightById(id, data);
  }

  //
  @Delete()
  deleteRight(@Param('id') id: number) {
    return this.rightsService.deleteRightById(id);
  }
}
