export abstract class EntityRepository {
  public async findOne(
    entityFilterQuery: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any | null> {
    return { entityFilterQuery, populateOptions, selectFields };
  }

  async find(
    entityFilterQuery: any,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any | null> {
    return { entityFilterQuery, populateOptions, selectFields };
  }

  async findAndSort(
    entityFilterQuery: any,
    querySort: any | null,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any | null> {
    return { entityFilterQuery, querySort, populateOptions, selectFields };
  }

  async findWithSortAndPagination(
    entityFilterQuery: any,
    queryLimit: number | 9,
    querySkip: number | 1,
    querySort: any | null,
    populateOptions?: any,
    selectFields?: any,
  ): Promise<any> {
    return {
      entityFilterQuery,
      queryLimit,
      querySkip,
      querySort,
      populateOptions,
      selectFields,
    };
  }

  async create(createEntityData: any): Promise<any> {
    return { createEntityData };
  }

  async findOneAndUpdate(
    entityFilterQuery: any,
    updateEntityData: any,
    populateOptions?: any,
  ): Promise<any | null> {
    return { entityFilterQuery, updateEntityData, populateOptions };
  }

  async deleteMany(entityFilterQuery: any): Promise<any> {
    return { entityFilterQuery };
  }

  async exists(entityFilterQuery: any): Promise<any> {
    return { entityFilterQuery };
  }
}
