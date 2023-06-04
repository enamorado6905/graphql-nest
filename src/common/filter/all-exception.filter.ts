import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class AllExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    return exception;
  }
}
