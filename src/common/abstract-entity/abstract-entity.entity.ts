import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class AbstractEntity {
  @Field(() => ID)
  @ApiModelProperty({ description: 'ID of the entity, unique globally.' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date)
  @ApiModelProperty({
    description: 'Date when the entity instance was created.',
  })
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @ApiModelProperty({
    description: 'Date when the entity instance was last updated.',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Boolean)
  @ApiModelProperty({
    description: 'status when the entity instance was active.',
  })
  @Column({ default: false })
  status: boolean;
}
