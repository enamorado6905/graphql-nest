import { PartialType } from '@nestjs/mapped-types';
import { Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { CreateUserInput } from './create-user.input';

export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
