import express from 'express';
import graphqlHTTP from './node_modules/express-graphql';
import cors from 'cors';

import { schema } from './src/schema';

const PORT = 4000;

const app = express();

app.use(cors());

// Express GraphQL as a middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // provides a UI, for API interaction more like postman
    pretty: true,
  }),
);

app.listen(4000, () =>
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`,
  ),
);
