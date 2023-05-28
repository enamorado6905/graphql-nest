import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindOneUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  search: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  value: string;
}
