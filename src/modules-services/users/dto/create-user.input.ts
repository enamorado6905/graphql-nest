import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  name: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  address: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  password: string;
}
