import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';
import { signIn, signUpProviderGoogle } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const imgUrl = 'https://picsum.photos/800/800';

const RecommendItem = styled.div`
  background: url(${imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 93vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    signIn(email, password, navigate);
    e.preventDefault();
  };

  const handleLoginGoogle = () => {
    signUpProviderGoogle(navigate);
  };
  return (
    <Content>
      <RecommendItem />
      <div style={{ width: '50vw' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 1, backgroundColor: '#21b6ae' }}
              >
                Login
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 1, backgroundColor: '#21b6ae' }}
                onClick={handleLoginGoogle}
              >
                with &nbsp; &nbsp;
                <img
                  style={{ width: '110px' }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/155px-Google_2015_logo.svg.png"
                  alt="google image"
                />
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {'You have an account?'}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <p>{`© All rights reserved.`}</p>
        </Container>
      </div>
    </Content>
  );
};

export default SignIn;
