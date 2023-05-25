import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);

  async catch(exception: unknown, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const error: any =
      exception instanceof HttpException ? exception.getResponse() : exception;

    const name =
      exception instanceof HttpException ? exception.name : exception;

    this.logger.error(`Status ${status} Error ${JSON.stringify(error)}`);

    const body = {
      status,
      name,
      request,
      message: error?.message,
    };

    response.status(status).json(body);
  }
}
