import { IsNotEmpty, IsObject } from 'class-validator';

export class FindOneUserInput {
  @IsNotEmpty()
  @IsObject()
  search: object;
}
