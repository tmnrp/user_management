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

  //
  it('Create new right', async () => {
    let res = await controller.createRight({
      name: 'Test right 1',
      description: 'Test right 1 description',
    });
    expect(res).toBeDefined();

    //
    res = await controller.getRightById(res.id);
    expect(res.name).toBe('Test right 1');

    //
    res = await controller.updateRight(res.id, {
      name: 'Test right 1 EDITED',
      description: 'Test right 1 description EDITED',
    });
    expect(res.name).toBe('Test right 1 EDITED');

    //
    res = await controller.getRightById(res.id);
    expect(res.description).toBe('Test right 1 description EDITED');

    //
    await controller.deleteRight(res.id);
    res = await controller.getRightById(res.id);
    expect(res).toBeNull();
  });
});
