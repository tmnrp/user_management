import { Test, TestingModule } from '@nestjs/testing';
import { RightsService } from './rights.service';
import { DbService } from '../db/db.service';

//
describe('RightsService', () => {
  let service: RightsService;

  //
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RightsService, DbService],
    }).compile();

    service = module.get<RightsService>(RightsService);
  });

  //
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
