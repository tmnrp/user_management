import { Test, TestingModule } from '@nestjs/testing';
import { RightsController } from './rights.controller';

//
describe('RightsController', () => {
  let controller: RightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RightsController],
    }).compile();

    controller = module.get<RightsController>(RightsController);
  });

  //
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
