import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ModulesServicesModule } from './modules-services/modules-services.module';

@Module({
  imports: [CommonModule, ModulesServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
