import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { DbService } from '../db/db.service';

//
describe('RolesService', () => {
  let rolesService: RolesService;

  //
  beforeEach(async () => {
    //
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService, DbService],
    }).compile();

    //
    rolesService = module.get<RolesService>(RolesService);
  });

  //
  it('should be defined', () => {
    //
    expect(rolesService).toBeDefined();
  });
});
