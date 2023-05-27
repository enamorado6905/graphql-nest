import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { BaseService } from '../../common/repository/base.service';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from '../../common/common.service';
import { PaginateInterface } from '../../common/interfaces/paginated.interface';
import { PaginationArgsDto } from '../../common/dto/args/pagination.args.dto';

@Injectable()
export class UsersService implements BaseService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly commonService: CommonService,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.commonService.operationCreate(
      this.usersRepository,
      createUserInput,
    );
  }

  async findAll(
    paginationArgsDto: PaginationArgsDto,
  ): Promise<PaginateInterface> {
    return await this.commonService.operationFind(
      this.usersRepository,
      paginationArgsDto,
    );
  }

  async findOne(filter: object): Promise<User> {
    return await this.commonService.operationFindOneByOrFail(
      this.usersRepository,
      filter,
    );
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.commonService.operationUpdate(
      this.usersRepository,
      id,
      updateUserInput,
    );
  }

  async remove(id: string): Promise<User> {
    return await this.commonService.operationDelete(this.usersRepository, id);
  }
}
