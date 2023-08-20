import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { PaginateInterface } from '../../interfaces/paginated.interface';

export function Paginated<T>(classRef: Type<T>): Type<PaginateInterface<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements PaginateInterface<T> {
    @Field(() => Int, { nullable: true })
    total?: number;

    @Field(() => Int, { nullable: true })
    per_page?: number;

    @Field(() => Int, { nullable: true })
    page?: number;

    @Field(() => [classRef], { nullable: true })
    nodes: T[];
  }
  return PaginatedType as Type<PaginateInterface<T>>;
}
