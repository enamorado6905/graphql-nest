import { PaginateInterface } from '../../interfaces/paginated.interface';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql/error';

export class ExceptionClass {
  private readonly exceptionServerErrorCode: ApolloServerErrorCode;
  private readonly exceptionMessage: string;

  constructor(serverErrorCode: ApolloServerErrorCode, message: string) {
    this.exceptionServerErrorCode = serverErrorCode;
    this.exceptionMessage = message;
  }

  /**
   * This function created object type pagination
   */
  public exceptionServerError() {
    throw new GraphQLError(this.exceptionMessage, {
      extensions: {
        code: this.exceptionServerErrorCode,
      },
    });
  }

  /**
   * This function created object type pagination
   */
  public exceptionServerErrorNotFound() {
    throw new GraphQLError(this.exceptionMessage, {
      extensions: {
        code: ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
      },
    });
  }
}
