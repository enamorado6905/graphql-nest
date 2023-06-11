import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '../../common/common.module';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UsersSubscriber } from './users.subscriber';

@Module({
  providers: [UsersSubscriber, UsersResolver, UsersService],
  imports: [CommonModule, TypeOrmModule.forFeature([User]), ConfigModule],
  exports: [TypeOrmModule],
})
export class UsersModule {}
