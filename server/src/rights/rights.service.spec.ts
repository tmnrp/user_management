import { Test, TestingModule } from '@nestjs/testing';
import { RightsService } from './rights.service';
import { DbService } from '../db/db.service';

//
describe('RightsService', () => {
  let rightsService: RightsService;

  //
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RightsService, DbService],
    }).compile();

    rightsService = module.get<RightsService>(RightsService);
  });

  //
  it('should be defined', () => {
    expect(rightsService).toBeDefined();
  });

  //
  it('Testing seed data', async () => {
    const res = await rightsService.getAllRights();

    //
    expect(res.length).toBe(4);

    //
    expect(res[0].id).toBe(1);
    expect(res[0].name).toBe('RIGHTS_API_READ');

    //
    expect(res[1].id).toBe(2);
    expect(res[1].name).toBe('RIGHTS_API_CREATE');

    //
    expect(res[2].id).toBe(3);
    expect(res[2].name).toBe('RIGHTS_API_UPDATE');

    //
    expect(res[3].id).toBe(4);
    expect(res[3].name).toBe('RIGHTS_API_DELETE');
  });

  //
  it('Testing get right by id', async () => {
    let res = await rightsService.getRightById(1);
    expect(res).toBeDefined();
    expect(res.id).toBe(1);
    expect(res.name).toBe('RIGHTS_API_READ');

    //
    res = await rightsService.getRightById(2);
    expect(res).toBeDefined();
    expect(res.id).toBe(2);
    expect(res.name).toBe('RIGHTS_API_CREATE');

    //
    res = await rightsService.getRightById(3);
    expect(res).toBeDefined();
    expect(res.id).toBe(3);
    expect(res.name).toBe('RIGHTS_API_UPDATE');

    //
    res = await rightsService.getRightById(4);
    expect(res).toBeDefined();
    expect(res.id).toBe(4);
    expect(res.name).toBe('RIGHTS_API_DELETE');
  });

  //
  it('Create a test RIGHT', async () => {
    //
    const res = await rightsService.createRight({
      name: 'TEST_RIGHT_1',
      description: 'Test right description',
    });

    expect(res).toBeDefined();
  });
});
