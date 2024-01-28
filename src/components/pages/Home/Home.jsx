import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HomeImg } from './Home.styled';
import image from './image.png';

const Home = () => {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '100px auto',
      }}
    >
      <Typography component="h1" variant="h2" color={'teal'}>
        Welcome to Phonebook access!
      </Typography>
      <HomeImg src={image} alt="phonebook" width={900} />
    </Container>
  );
};

export default Home;
