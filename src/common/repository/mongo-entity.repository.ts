import { EntityRepository } from './entity.repository';

export abstract class PostgresEntityRepository<T extends Document>
  implements EntityRepository
{
  protected constructor(protected readonly entityModel: any) {}

  async create(createEntityData: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  async deleteMany(entityFilterQuery: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  async exists(entityFilterQuery: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  async find(
    entityFilterQuery: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async findAndSort(
    entityFilterQuery: any,
    querySort: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async findOne(
    entityFilterQuery: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async findOneAndUpdate(
    entityFilterQuery: any,
    updateEntityData: any,
    populateOptions?: any,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async findWithSortAndPagination(
    entityFilterQuery: any,
    queryLimit: number | 9,
    querySkip: number | 1,
    querySort: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }
}
