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
import { SelectInterface } from './interfaces/sql/select.interface';
import { WhereInterface } from './interfaces/sql/where.interface';
import { InnerJoinInterface } from './interfaces/sql/innerJoin.interface';
import { LeftJoinInterface } from './interfaces/sql/leftJoin.interface';
import { SortDescEnum, SortEnum } from './enum/sort.enum';
import { PaginationArgsDto } from './dto/args/pagination.args.dto';
import { PaginationClass } from './util/class/pagination.class';
import { errorExceptions } from './errors/exception-errors';
import { ApolloServerErrorCode } from '@apollo/server/errors';

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
    searchDto: PaginationArgsDto,
    select?: SelectInterface,
    addSelect?: Array<SelectInterface>,
    where?: Array<WhereInterface>,
    andWhere?: Array<WhereInterface>,
    innerJoin?: Array<InnerJoinInterface>,
    leftJoin?: Array<LeftJoinInterface>,
  ) {
    try {
      const { per_page, page, is_paginate } = searchDto;
      let { sort_by, sort_desc } = searchDto;

      sort_by = sort_by ? sort_by : SortEnum.CREATED_AT;
      sort_desc = sort_desc ? sort_desc : SortDescEnum.ASC;

      const [nodes, total] = await Promise.all([
        find(
          service,
          is_paginate,
          per_page,
          page,
          sort_by,
          sort_desc,
          select,
          addSelect,
          where,
          andWhere,
          innerJoin,
          leftJoin,
        ),
        service.count(),
      ]);
      const paginated = new PaginationClass(page, per_page, nodes, total);
      return paginated.paginated();
    } catch (error) {
      errorExceptions(
        ApolloServerErrorCode.PERSISTED_QUERY_NOT_SUPPORTED,
        error.message,
      );
    }
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
      errorExceptions(
        ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
        error.message,
      );
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
      errorExceptions(
        ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
        error.message,
      );
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
      errorExceptions(ApolloServerErrorCode.BAD_REQUEST, error.message);
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
      errorExceptions(ApolloServerErrorCode.BAD_REQUEST, error.message);
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
      errorExceptions(ApolloServerErrorCode.BAD_REQUEST, error.message);
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
      errorExceptions(
        ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
        error.message,
      );
    }
  }
}
