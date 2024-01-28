import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
  ThemeProvider,
  Stack,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { registerUser } from 'store/operations';
import { FiUsers } from 'react-icons/fi';

const defaultTheme = createTheme();

const RegForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    dispatch(
      registerUser({
        name: username.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        item
        sx={{
          //   border: '2px solid ',

          width: '800px',
          boxShadow: '0.5px 4px pink , -1em 0 .4em pink',
          margin: '140px auto ',
        }}
      >
        <Container>
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: 'primary.main', color: 'white' }}>
              <FiUsers />
            </Avatar>
            <Typography component="h1" variant="h4">
              Registration
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Stack margin="30px" direction="row" spacing={45}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Registration
                </Button>

                <Link to="/login" component={RouterLink}>
                  <Button>
                    <Grid>
                      <Typography fontSize={10}> no registration?</Typography>
                      {'Please Login'}
                    </Grid>
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RegForm;
