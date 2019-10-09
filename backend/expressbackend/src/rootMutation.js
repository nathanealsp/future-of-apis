import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import find from 'lodash/find';

import { ARTISTS, SONGS, EVENTS } from '../../database';
import { SongType, ArtistType, EventType } from './typeDefs';

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addSong: {
      description: 'Adds a Song',
      type: new GraphQLList(SongType),
      args: {
        name: { type: GraphQLString },
        album: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const { name, album } = args;

        function artistId() {
          return find(ARTISTS, { name: name.toLowerCase() });
        }

        return [...SONGS, { name, album, artistId: artistId(name).id }];
      },
    },
    addArtist: {
      description: 'Adds an Artist',
      type: new GraphQLList(ArtistType),
      args: {
        name: { type: GraphQLString },
        subTitle: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const { name, subTitle } = args;

        function artistId(name) {
          return find(ARTISTS, { name: name.toLowerCase() });
        }

        return [
          ...ARTISTS,
          {
            name,
            subTitle,
            id: artistId(name) ? artistId(name).id : 24210 + 10,
          },
        ];
      },
    },
  }),
});
