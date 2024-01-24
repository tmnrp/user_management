import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { DbModule } from './db/db.module';
import { RightsModule } from './rights/rights.module';

//
@Module({
  imports: [RolesModule, DbModule, RightsModule],
  controllers: [],
  providers: [],
})

//
export class AppModule {}
