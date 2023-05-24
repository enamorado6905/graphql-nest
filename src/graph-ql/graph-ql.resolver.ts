import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class GraphQlResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
