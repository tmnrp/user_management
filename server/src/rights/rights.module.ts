import { Module } from '@nestjs/common';
import { RightsService } from './rights.service';
import { DbService } from '../db/db.service';
import { RightsController } from './rights.controller';

//
@Module({
  providers: [DbService, RightsService],
  controllers: [RightsController],
})

//
export class RightsModule {}
