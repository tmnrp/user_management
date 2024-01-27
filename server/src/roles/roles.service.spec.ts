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

  //
  it('Testing get all roles', async () => {
    //
    const res = await rolesService.getAllRoles();

    //
    expect(res.length).toBe(3);

    //
    expect(res[0].id).toBe(1);
    expect(res[0].name).toBe('SUPER_ADMIN');

    //
    expect(res[1].id).toBe(2);
    expect(res[1].name).toBe('ADMIN');

    //
    expect(res[2].id).toBe(3);
    expect(res[2].name).toBe('GUEST');
  });

  //
  it('Testing get role by id', async () => {
    //
    let res = await rolesService.getAllRoleById(1);
    expect(res).toBeDefined();
    expect(res.id).toBe(1);
    expect(res.name).toBe('SUPER_ADMIN');

    //
    res = await rolesService.getAllRoleById(2);
    expect(res).toBeDefined();
    expect(res.id).toBe(2);
    expect(res.name).toBe('ADMIN');

    //
    res = await rolesService.getAllRoleById(3);
    expect(res).toBeDefined();
    expect(res.id).toBe(3);
    expect(res.name).toBe('GUEST');
  });
});
