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

/**
 * This function catch all exceptions
 */
export function errorAllException(error: any) {
  switch (error.exception) {
    case 'ConflictException':
      throw new ConflictException(error.response.message);
    case 'UnprocessableEntityException':
      throw new UnprocessableEntityException(error.response.message);
    case 'BadRequestException':
      throw new BadRequestException(error.response.message);
    case 'UnauthorizedException':
      throw new UnauthorizedException(error.response.message);
    case 'NotFoundException':
      throw new NotFoundException(error.response.message);
    case 'ForbiddenException':
      throw new ForbiddenException(error.response.message);
    case 'NotAcceptableException':
      throw new NotAcceptableException(error.response.message);
    case 'RequestTimeoutException':
      throw new RequestTimeoutException(error.response.message);
    case 'GoneException':
      throw new GoneException(error.response.message);
    case 'HttpVersionNotSupportedException':
      throw new HttpVersionNotSupportedException(error.response.message);
    case 'UnsupportedMediaTypeException':
      throw new UnsupportedMediaTypeException(error.response.message);
    case 'InternalServerErrorException':
      throw new InternalServerErrorException(error.response.message);
    case 'NotImplementedException':
      throw new NotImplementedException(error.response.message);
    case 'ImATeapotException':
      throw new ImATeapotException(error.response.message);
    case 'MethodNotAllowedException':
      throw new MethodNotAllowedException(error.response.message);
    case 'BadGatewayException':
      throw new BadGatewayException(error.response.message);
    case 'ServiceUnavailableException':
      throw new ServiceUnavailableException(error.response.message);
    case 'GatewayTimeoutException':
      throw new GatewayTimeoutException(error.response.message);
    case 'PreconditionFailedException':
      throw new PreconditionFailedException(error.response.message);
    case 'PayloadTooLargeException':
      throw new PayloadTooLargeException();
  }
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
  throw new NotFoundException(message);
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
