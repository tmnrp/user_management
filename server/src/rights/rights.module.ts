import { Module } from '@nestjs/common';
import { RightsService } from './rights.service';
import { DbService } from '../db/db.service';
import { RightsController } from './rights.controller';

//
@Module({
  controllers: [RightsController],
  providers: [DbService, RightsService],
})

//
export class RightsModule {}
