import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';  // Replace with the actual path to your logo

const Logo = styled('img')({
  width: '150px',  // Control the width
  height: '150px',  // Control the height
  marginBottom: '1.5rem',
});

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
      sx={{ bgcolor: '#fff', p: 3 }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Box display="flex" justifyContent="center">
          <Logo src={logo} alt="Logo" />
        </Box>

        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
