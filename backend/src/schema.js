import { GraphQLSchema } from 'graphql';
import { RootQueryType } from './rootQuery';
import { RootMutationType } from './rootMutation';

// THE SCHEMA.

/**
 * The Building Blocks
 * @Schema - the schema defines our entities but also what we can query or call a mutation on
 * @Resolver - is a special functin that simply returns a response to which ever action we call
 * This is where we hook / interact with our database or third Party APIs, perform some data manipulations and return whatever data.
 */

export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default schema;
