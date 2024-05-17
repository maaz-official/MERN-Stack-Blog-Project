import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';  // Replace with the actual path to your logo

const Logo = styled('img')({
  width: '150px',
  height: '150px',
  marginBottom: '1.5rem',
});

const Register = () => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignup({ ...signup, [name]: value });
    console.log(signup);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Signup:', signup);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="85vh"
      sx={{ bgcolor: '#f0f0f0', p: 3 }}
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
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Register
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={signup.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={signup.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="password"
          value={signup.password}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
          Register
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <Link to="/login">Login here</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
