import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { DbModule } from './db/db.module';
import { RightsModule } from './rights/rights.module';

//
@Module({
  imports: [DbModule, RightsModule, RolesModule],
  controllers: [],
  providers: [],
})

//
export class AppModule {}
