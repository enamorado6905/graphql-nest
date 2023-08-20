import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  GoneException,
  HttpVersionNotSupportedException,
  ImATeapotException,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotAcceptableException,
  NotFoundException,
  NotImplementedException,
  PayloadTooLargeException,
  PreconditionFailedException,
  RequestTimeoutException,
  ServiceUnavailableException,
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { GraphQLError } from 'graphql/error';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { ExceptionClass } from '../util/class/exception.class';

/**
 * This function catch all exceptions
 */
export function errorExceptions(
  errorCode: ApolloServerErrorCode,
  message: any,
) {
  const exceptionClass = new ExceptionClass(errorCode, message);
  return exceptionClass.exceptionServerError();
}

/**
 * This function catch not found element
 * @param error
 */
export function errorNotAcceptableElement(error: any) {
  throw new NotAcceptableException(`${error.message}`);
}

/**
 * This function catch not found element
 * @param id
 */
export function errorNotFoundElement(id: string) {
  throw new NotFoundException(
    `There is not found with the ID ${id} in the DB.`,
  );
}

/**
 * This function catch not found entity
 * @param message
 */
export function errorNotFound(message: string) {
  throw new GraphQLError(message, {
    extensions: {
      code: 'PERSISTED_QUERY_NOT_FOUND',
    },
  });
  // throw new NotFoundException(message);
}

/**
 * This function catch error forbidden
 * @param message
 */
export function errorForbidden(message: string) {
  throw new ForbiddenException(`Is not allowed to ${message}`);
}

/**
 * This function catch error password
 */
export function errorBadRequestPassword() {
  throw new ConflictException('The password does not match');
}

/**
 * This function catch bad request
 * @param message
 */
export function errorBadRequest(message: string) {
  throw new BadRequestException(message);
}

/**
 * This function catch error bad gateway
 * @param message
 */
export function errorBadGateway(message: string) {
  throw new BadGatewayException(message);
}

/**
 * This function catch error unauthorized
 * @param message
 */
export function errorUnauthorized(message: string) {
  throw new UnauthorizedException(message);
}

/**
 * This function catch conflicts
 * @param message
 */
export function conflictException(message: string) {
  throw new ConflictException(message);
}

/**
 * This function catch error general
 */
export function createError() {
  throw new Error('New Error');
}
