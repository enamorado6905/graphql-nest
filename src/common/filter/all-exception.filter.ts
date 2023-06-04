import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class AllExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // if (
    //   request.originalUrl &&
    //   request.originalUrl.split('/').pop() === 'favicon.ico'
    // ) {
    //   return response.status(204);
    // }

    return exception;
  }
}
