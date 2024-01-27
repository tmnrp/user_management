import { Test, TestingModule } from '@nestjs/testing';
import { RightsController } from './rights.controller';
import { RightsService } from './rights.service';
import { DbService } from '../db/db.service';

//
describe('RightsController', () => {
  let controller: RightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightsController],
      providers: [DbService, RightsService],
    }).compile();

    controller = module.get<RightsController>(RightsController);
  });

  //
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
