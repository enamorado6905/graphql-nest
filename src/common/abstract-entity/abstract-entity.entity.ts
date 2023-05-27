import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID } from '@nestjs/graphql';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Entity()
export class AbstractEntity {
  @ApiModelProperty({ description: 'ID of the entity, unique globally.' })
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @ApiModelProperty({
    description: 'Date when the entity instance was created.',
  })
  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @ApiModelProperty({
    description: 'Date when the entity instance was last updated.',
  })
  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @ApiModelProperty({
    description: 'status when the entity instance was active.',
  })
  @Column({ default: false })
  @Field(() => Boolean)
  status: boolean;
}
