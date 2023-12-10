import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError, GraphQLFormattedError } from 'graphql/error';

export class ExceptionClass {
  private readonly exceptionServerErrorCode: ApolloServerErrorCode;
  private readonly exceptionMessage: string;
  private readonly exceptionPath?: ReadonlyArray<string | number>;
  private readonly exceptionExtensions?: object;

  constructor(
    serverErrorCode: ApolloServerErrorCode,
    message: string,
    path?: ReadonlyArray<string | number>,
    extensions?: object,
  ) {
    this.exceptionServerErrorCode = serverErrorCode;
    this.exceptionMessage = message;
    this.exceptionPath = path;
    this.exceptionExtensions = extensions;
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
}
