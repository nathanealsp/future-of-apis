import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { GET_SONGS } from '../Queries';

export const Spotify = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Ul>
      {data.songs.map(({ name, album }) => (
        <Li key={name}>
          {name} : {album}
        </Li>
      ))}
    </Ul>
  );
};

export default Spotify;

let Ul = styled.div({
  width: '600px',
  margin: '50px auto',
  background: 'black',

  borderRadius: '5px',
  display: 'grid',
  gridGap: '10px',
  padding: '10px',
});

let Li = styled.div({
  padding: '20px',
  background: '#36B37E',
  borderRadius: '5px',
  color: 'black',
  fontSize: '18px',
  fontWeight: 'bold',
});
