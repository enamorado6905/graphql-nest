import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQlResolver } from './graph-ql.resolver';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { FORMATTED_ERROR } from '../common/util/constants/constants.conts';
import { EnvEnum } from '../common/enum/env.enum';
import { ExceptionClass } from '../common/util/class/exception.class';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (formattedError) => {
        if (process.env.NODE_ENV === EnvEnum.PRODUCTION) {
          delete formattedError.extensions.stacktrace;
        }

        if (
          formattedError.extensions.code ===
          ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
        ) {
          return {
            ...formattedError,
            message: FORMATTED_ERROR,
          };
        }

        return formattedError;
      },
    }),
  ],
  providers: [GraphQlResolver],
})
export class GraphQlModule {}
