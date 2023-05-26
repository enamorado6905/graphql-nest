export const JWT_AUTH = {
  secret: process.env.JWT_SECRET || 'MySecretSeedHere',
  expireIn: process.env.JWT_EXPIRES_IN || '12h',
};

/**
 *
 */
export const VALIDATION_PIPE = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
};

export enum Exception {
  'BadRequestException' = 'BadRequestException',
  'UnauthorizedException' = 'UnauthorizedException',
  'NotFoundException' = 'NotFoundException',
  'ForbiddenException' = 'ForbiddenException',
  'NotAcceptableException' = 'NotAcceptableException',
  'RequestTimeoutException' = 'RequestTimeoutException',
  'ConflictException' = 'ConflictException',
  'GoneException' = 'GoneException',
  'HttpVersionNotSupportedException' = 'HttpVersionNotSupportedException',
  'PayloadTooLargeException' = 'PayloadTooLargeException',
  'UnsupportedMediaTypeException' = 'UnsupportedMediaTypeException',
  'UnprocessableEntityException' = 'UnprocessableEntityException',
  'InternalServerErrorException' = 'InternalServerErrorException',
  'NotImplementedException' = 'NotImplementedException',
  'ImATeapotException' = 'ImATeapotException',
  'MethodNotAllowedException' = 'MethodNotAllowedException',
  'BadGatewayException' = 'BadGatewayException',
  'ServiceUnavailableException' = 'ServiceUnavailableException',
  'GatewayTimeoutException' = 'GatewayTimeoutException',
  'PreconditionFailedException' = 'PreconditionFailedException',
}
