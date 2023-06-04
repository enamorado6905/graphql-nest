import { Repository } from 'typeorm';
import { WhereInterface } from '../interfaces/sql/where.interface';
import { SelectInterface } from '../interfaces/sql/select.interface';
import { InnerJoinInterface } from '../interfaces/sql/innerJoin.interface';
import { LeftJoinInterface } from '../interfaces/sql/leftJoin.interface';

/**
 * This method find all entities
 * @param service
 * @param perPage
 * @param page
 * @param sortBy
 * @param sortDesc
 * @param select
 * @param addSelect
 * @param where
 * @param andWhere
 * @param innerJoin
 * @param leftJoin
 * @return
 */
export async function find(
  service: Repository<any>,
  perPage: number,
  page: number,
  sortBy: string,
  sortDesc: 'ASC' | 'DESC',
  select?: SelectInterface,
  addSelect?: Array<SelectInterface>,
  where?: Array<WhereInterface>,
  andWhere?: Array<WhereInterface>,
  innerJoin?: Array<InnerJoinInterface>,
  leftJoin?: Array<LeftJoinInterface>,
): Promise<Array<any>> {
  const queryBuilder = service
    .createQueryBuilder()
    .take(perPage)
    .skip(page)
    .orderBy(sortBy, sortDesc);

  if (select) {
    queryBuilder.select(select.selection, select.selectionAliasName);
  }

  if (innerJoin && innerJoin.length > 0) {
    for (const queryBuilderElement of innerJoin) {
      queryBuilder.innerJoin(
        queryBuilderElement.entity,
        queryBuilderElement.alias,
        queryBuilderElement.condition,
      );
    }
  }

  if (leftJoin && leftJoin.length > 0) {
    for (const queryBuilderElement of leftJoin) {
      queryBuilder.leftJoin(
        queryBuilderElement.entity,
        queryBuilderElement.alias,
        queryBuilderElement.condition,
      );
    }
  }

  if (addSelect && addSelect.length > 0) {
    for (const queryBuilderElement of addSelect) {
      queryBuilder.addSelect(
        queryBuilderElement.selection,
        queryBuilderElement.selectionAliasName,
      );
    }
  }

  if (where && where.length > 0) {
    for (const queryBuilderElement of where) {
      queryBuilder.where(
        queryBuilderElement.validator,
        queryBuilderElement.parameters,
      );
    }
  }

  if (andWhere && andWhere.length > 0) {
    for (const queryBuilderElement of andWhere) {
      queryBuilder.where(
        queryBuilderElement.validator,
        queryBuilderElement.parameters,
      );
    }
  }

  return await queryBuilder.getMany();
}

/**
 * This method find for query
 * @param service
 * @param conditions
 * @returns
 */
export async function findOneByOrFail(
  service: Repository<any>,
  conditions: object,
): Promise<any> {
  return await service.findOneByOrFail(conditions);
}

/**
 * This method find for id
 * @param service
 * @param id
 * @returns
 */
export async function findOneByIdOrFail(
  service: Repository<any>,
  id: string,
): Promise<any> {
  return await service.findOneByOrFail({ id });
}

/**
 * This method create
 * @param service
 * @param docs
 * @param options
 * @returns
 */
export async function create(
  service: Repository<any>,
  docs: object,
  options?: object,
): Promise<any> {
  return await service.save(docs, options);
}

/**
 * This method update for id
 * @param service
 * @param id
 * @param updateInput
 * @param options
 * @returns
 */
export async function findByIdAndUpdate(
  service: Repository<any>,
  id: string | object,
  updateInput: object,
  options?: object,
): Promise<any> {
  const data = await service.preload({
    ...updateInput,
    id,
  });

  return await service.save(data, options);
}

/**
 * This method remove for id
 * @param service
 * @param id
 * @returns
 */
export async function findByIdAndDelete(
  service: Repository<any>,
  id: string,
): Promise<any> {
  const item = await service.findOneByOrFail({ id });
  await service.remove(item);
  return { ...item, id };
}

/**
 * This method return total entity
 * @param service
 * @returns
 */
export async function count(service: Repository<any>): Promise<number> {
  return service.count();
}
