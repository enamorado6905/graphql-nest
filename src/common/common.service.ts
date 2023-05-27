import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  count,
  create,
  find,
  findByIdAndDelete,
  findByIdAndUpdate,
  findOneByIdOrFail,
  findOneByOrFail,
} from './repository/entity.repository';
import {
  errorNotAcceptableElement,
  errorNotFound,
} from './errors/exception-errors';
import { SelectInterface } from './interfaces/sql/select.interface';
import { WhereInterface } from './interfaces/sql/where.interface';
import { InnerJoinInterface } from './interfaces/sql/innerJoin.interface';
import { LeftJoinInterface } from './interfaces/sql/leftJoin.interface';

@Injectable()
export class CommonService {
  /**
   * This function call operation find entities
   * @param service
   * @param searchDto
   * @param select
   * @param addSelect
   * @param where
   * @param andWhere
   * @param innerJoin
   * @param leftJoin
   * @returns
   */
  async operationFind(
    service: Repository<any>,
    searchDto: any,
    select?: SelectInterface,
    addSelect?: Array<SelectInterface>,
    where?: Array<WhereInterface>,
    andWhere?: Array<WhereInterface>,
    innerJoin?: Array<InnerJoinInterface>,
    leftJoin?: Array<LeftJoinInterface>,
  ) {
    const sort: any = [];
    const { perPage, sortBy, sortDesc } = searchDto;
    let { page } = searchDto;

    if (sortBy) {
      const direction = sortDesc ? 'desc' : 'asc';
      sort.push([sortBy, direction]);
    } else sort.push(['createdAt', 'desc']);

    delete searchDto.page;
    delete searchDto.perPage;
    delete searchDto?.sortDesc;
    delete searchDto?.sortBy;

    page = (page > 0 ? page - 1 : 0) * perPage;

    return await find(
      service,
      perPage,
      page,
      select,
      addSelect,
      where,
      andWhere,
      innerJoin,
      leftJoin,
    );
  }

  /**
   * This function call operation find by id entity
   * @param service
   * @param id
   * @returns
   */
  async operationFindById(service: Repository<any>, id: string) {
    try {
      return await findOneByIdOrFail(service, id);
    } catch (error) {
      errorNotFound(error.message);
    }
  }

  /**
   * This function call operation find by parameter entity
   * @param service
   * @param conditions
   * @returns
   */
  async operationFindOneByOrFail(service: Repository<any>, conditions: object) {
    try {
      return await findOneByOrFail(service, conditions);
    } catch (error) {
      errorNotFound(error.message);
    }
  }

  /**
   * This function call operation created entity
   * @param service
   * @param docs
   * @param options
   * @returns
   */
  async operationCreate(
    service: Repository<any>,
    docs: object,
    options?: object,
  ) {
    try {
      return await create(service, docs, options);
    } catch (error) {
      errorNotAcceptableElement(error);
    }
  }

  /**
   * This function call operation updated entity by id
   * @param service
   * @param id
   * @param docs
   * @param queryOptions
   * @returns
   */
  async operationUpdate(
    service: Repository<any>,
    id: string,
    docs: object,
    queryOptions?: object,
  ) {
    try {
      return await findByIdAndUpdate(service, id, docs, queryOptions);
    } catch (error) {
      errorNotAcceptableElement(error);
    }
  }

  /**
   * This function call operation delete entity by id
   * @param service
   * @param id
   * @returns
   */
  async operationDelete(service: Repository<any>, id: string) {
    try {
      return await findByIdAndDelete(service, id);
    } catch (error) {
      errorNotAcceptableElement(error);
    }
  }

  /**
   * This function call operation delete entity by id
   * @param service
   * @returns
   */
  async operationCount(service: Repository<any>) {
    try {
      return await count(service);
    } catch (error) {
      errorNotAcceptableElement(error);
    }
  }
}
