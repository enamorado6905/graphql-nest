import { Column, Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AbstractEntity } from '../../../common/abstract-entity/abstract-entity.entity';

@Entity()
@ObjectType()
export class User extends AbstractEntity {
  @Column()
  @Field(() => String)
  name: string;

  @Column({
    unique: true,
  })
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  address: string;
}
