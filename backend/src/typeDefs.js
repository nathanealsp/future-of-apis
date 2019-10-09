import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import find from 'lodash/find';
import filter from 'lodash/filter';
import { ARTISTS, SONGS, EVENTS } from '../database';

export const SongType = new GraphQLObjectType({
  name: 'SongType',
  description: 'Custom Type for song object',
  fields: () => ({
    artistId: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    album: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export const ArtistType = new GraphQLObjectType({
  name: 'ArtistType',
  description: 'Custom Type for Artist object',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    subTitle: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export const EventType = new GraphQLObjectType({
  name: 'EventType',
  description: 'Custom Type for Event object',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    venue: { type: GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLNonNull(GraphQLString) },
    time: { type: GraphQLNonNull(GraphQLString) },
  }),
});
