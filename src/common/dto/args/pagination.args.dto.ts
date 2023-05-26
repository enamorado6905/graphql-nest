import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from '../../helpers/cast.helper';

@ArgsType()
export class PaginationArgsDto {
  @Field(() => Int, { nullable: true })
  @Transform(({ value }) => toNumber(value, { default: 10, min: 10 }))
  @IsOptional()
  @IsNumber()
  readonly perPage?: number = 10;

  @Field(() => Int, { nullable: true })
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsOptional()
  @IsNumber()
  readonly page?: number = 0;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  sortBy?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  createdAt?: any;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  updatedAt?: any;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  sortDesc?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  noPaginate?: boolean;
}
