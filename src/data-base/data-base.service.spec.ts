import { Test, TestingModule } from '@nestjs/testing';
import { DataBaseService } from './data-base.service';

describe('DataBaseService', () => {
  let service: DataBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataBaseService],
    }).compile();

    service = module.get<DataBaseService>(DataBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
