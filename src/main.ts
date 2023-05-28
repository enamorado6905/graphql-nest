import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { VALIDATION_PIPE } from './common/util/constants/constants.conts';
import { AllExceptionFilter } from './common/filter/all-exception.filter';
import { TimeOutInterceptor } from './common/intercertors/timeout.interceptor';
import { json, urlencoded } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '../../public'));
  /**
   * global configuration
   */
  app.useGlobalPipes(new ValidationPipe(VALIDATION_PIPE));
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.setGlobalPrefix('api');

  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
