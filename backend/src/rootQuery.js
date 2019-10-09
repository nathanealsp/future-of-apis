import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import filter from 'lodash/filter';
import find from 'lodash/find';

import { ARTISTS, SONGS, EVENTS } from '../database';
import { SongType, ArtistType, EventType } from './typeDefs';

export const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    songs: {
      description: 'List of Songs',
      type: new GraphQLList(SongType),
      resolve: () => SONGS,
    },
    song: {
      description: 'Returns a song',
      type: new GraphQLList(SongType),
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => filter(SONGS, { artistId: args.id }),
    },
    artists: {
      description: 'List of Artists',
      type: new GraphQLList(ArtistType),
      resolve: () => ARTISTS,
    },
    artist: {
      description: 'Returns an Artist',
      type: new GraphQLList(ArtistType),
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => filter(ARTISTS, { id: args.id }),
    },
    events: {
      description: 'List of Events',
      type: new GraphQLList(EventType),
      resolve: () => EVENTS,
    },
    eventsByArtist: {
      description: 'List of Events specific to Artist',
      args: { id: { type: GraphQLInt } },
      type: new GraphQLList(EventType),
      resolve: (parent, args) => filter(EVENTS, { id: args.id }),
    },
  }),
});
