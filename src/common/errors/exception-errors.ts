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
