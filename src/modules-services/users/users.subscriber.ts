import { ConfigService } from '@nestjs/config';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { User } from './entities/user.entity';
import { bcryptEncryptPassword } from '../../common/util/method/algorithms';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    public readonly dataSource: DataSource,
    private readonly configService: ConfigService,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    if (event.entity.password) {
      event.entity.password = await bcryptEncryptPassword(
        event.entity.password,
        +this.configService.get<string>('JWT.AUTH_HASH_ROUNDS'),
      );
    }
  }
  async beforeUpdate(event: UpdateEvent<User>): Promise<void> {
    console.log(event.entity.password);
    console.log(`${event.databaseEntity.password}`);
  }
}
