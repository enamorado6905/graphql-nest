import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  entityPrefix: 'app_',
  migrationsRun: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  logging: process.env.NODE_ENV === 'development',
};

export default config;
