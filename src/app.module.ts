import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ModulesServicesModule } from './modules-services/modules-services.module';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { TypesOrmModule } from './type-orm/type-orm.module';

@Module({
  imports: [CommonModule, TypesOrmModule, ModulesServicesModule, GraphQlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
