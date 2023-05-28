import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { GraphQlModule } from '../graph-ql/graph-ql.module';

@Module({
  providers: [CommonService],
  imports: [GraphQlModule],
  exports: [CommonService],
})
export class CommonModule {}
