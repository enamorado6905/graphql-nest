import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ArgsType()
export class SearchArgsDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  readonly search?: string;
}
