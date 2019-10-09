import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { client } from './index';

const GET_SONGS = gql`
  {
    songs {
      name
      album
    }
  }
`;

function Spotify() {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.songs.map(({ name, album }) => (
    <div key={name}>
      <p>
        {name} : {album}
      </p>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Spotify />
      </div>
    </ApolloProvider>
  );
}

export default App;
