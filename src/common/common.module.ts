import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { GraphQlModule } from '../graph-ql/graph-ql.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    GraphQlModule,
    ServeStaticModule.forRoot({
      serveRoot: '/api/public/',
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  providers: [CommonService],
})
export class CommonModule {}
