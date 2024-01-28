import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { loginUser } from 'store/operations';
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Grid,
  Link,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { FiUserCheck } from 'react-icons/fi';

const ownTheme = createTheme();
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const userData = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginUser(userData));

    event.target.reset();
  };

  return (
    <ThemeProvider theme={ownTheme}>
      <Box
        item
        sx={{
          width: '700px',
          boxShadow: '0.5px 4px pink , -1em 0 .4em pink',
          margin: '140px auto ',
        }}
      >
        <Container>
          <Box
            sx={{
              margin: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: 'primary.main', color: 'white' }}>
              <FiUserCheck />
            </Avatar>
            <Typography component="h1" variant="h4">
              SignUp
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                id="email"
              />
              <TextField
                label="Password"
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
              />
              <Stack margin="30px" direction="row" spacing={{ md: 30 }}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Login
                </Button>

                <Grid item>
                  <Link to="/register" component={RouterLink}>
                    <Button> {'Registration'}</Button>
                  </Link>
                </Grid>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;
