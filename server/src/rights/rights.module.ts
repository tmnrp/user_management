import { Module } from '@nestjs/common';
import { RightsService } from './rights.service';

//
@Module({
  providers: [RightsService],
})

//
export class RightsModule {}
