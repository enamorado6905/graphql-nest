import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQlModule } from "./graph-ql/graph-ql.module";

@Module({
  imports: [ConfigModule.forRoot(), GraphQlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
