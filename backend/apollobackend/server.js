import { ApolloServer, gql } from 'apollo-server';
import { ARTISTS, SONGS, EVENTS } from '../database';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Song" type defines the queryable fields for every song in our data source.

  type Song {
    artistId: Int
    name: String
    album: String
  }

  type Artist {
    id: Int
    name: String
    subTitle: String
  }

  type Event {
    id: Int
    venue: String
    location: String
    date: String
    time: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getSongs: [Song]
    getArtists: [Artist]
    getEvents: [Event]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getSongs: () => SONGS,
    getArtists: () => ARTISTS,
    getEvents: () => EVENTS,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
