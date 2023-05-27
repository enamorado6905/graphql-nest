import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { FindOneUserInput } from './dto/find-one-user.input';
import { PaginateInterface } from '../../common/interfaces/paginated.interface';
import { User } from './entities/user.entity';
import { PaginationArgsDto } from '../../common/dto/args/pagination.args.dto';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  async findAll(
    @Args() paginationArgsDto: PaginationArgsDto,
  ): Promise<PaginateInterface> {
    return await this.usersService.findAll(paginationArgsDto);
  }

  @Query('user')
  async findById(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return await this.usersService.findOne({ id });
  }

  @Query('findOneUser')
  async findOne(@Args('filter') filter: FindOneUserInput): Promise<User> {
    return await this.usersService.findOne(filter);
  }

  @Mutation('updateUser')
  async update(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  async remove(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
