import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Entity()
export class AbstractEntity {
  @ApiModelProperty({ description: 'ID of the entity, unique globally.' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiModelProperty({
    description: 'Date when the entity instance was created.',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiModelProperty({
    description: 'Date when the entity instance was last updated.',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
