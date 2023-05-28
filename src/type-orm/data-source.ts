import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const AppDataSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  synchronize: false,
  migrationsRun: false,
  url: process.env.DB_URL,
  entityPrefix: 'app_',
  entities: [__dirname + '/../modules-services/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/../subscriber/**/*{.ts,.js}'],
  logging: process.env.NODE_ENV === 'development',
});

export default AppDataSource;
