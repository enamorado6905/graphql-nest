import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../../common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [CommonModule, TypeOrmModule.forFeature([User]), ConfigModule],
  exports: [TypeOrmModule],
})
export class UsersModule {}
