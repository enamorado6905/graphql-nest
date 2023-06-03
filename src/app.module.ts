import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ModulesServicesModule } from './modules-services/modules-services.module';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { TypesOrmModule } from './type-orm/type-orm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule, TypesOrmModule, GraphQlModule, ModulesServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
