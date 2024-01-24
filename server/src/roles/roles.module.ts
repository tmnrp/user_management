import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { DbService } from '../db/db.service';

//
@Module({
  imports: [DbService],
  controllers: [RolesController],
  providers: [RolesService],
})

//
export class RolesModule {}
