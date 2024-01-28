import { Box, Typography } from '@mui/material';
import React from 'react';

const Error = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '300px auto',
      }}
    >
      <Typography component="h1" variant="h2">
        Wrong way!
      </Typography>
    </Box>
  );
};

export default Error;
