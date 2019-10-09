import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import Spotify from './components/Spotify';

import './App.css';

import { client } from './index';

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
