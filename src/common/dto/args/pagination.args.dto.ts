import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from '../../helpers/cast.helper';
import { SortDescEnum } from '../../enum/sort.enum';

@ArgsType()
export class PaginationArgsDto {
  @Field(() => Int, { nullable: true })
  @Transform(({ value }) => toNumber(value, { default: 10, min: 10 }))
  @IsOptional()
  @IsNumber()
  readonly per_page?: number = 10;

  @Field(() => Int, { nullable: true })
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsOptional()
  @IsNumber()
  readonly page?: number = 0;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  sort_by?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  created_at?: any;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  updated_at?: any;

  @Field(() => String, { defaultValue: SortDescEnum.DESC })
  @IsString()
  @IsOptional()
  sort_desc?: SortDescEnum.DESC | SortDescEnum.ASC;

  @Field(() => Boolean, { defaultValue: true })
  @IsBoolean()
  @IsOptional()
  is_paginate?: boolean;
}
