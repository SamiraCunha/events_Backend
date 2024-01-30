import React from 'react';
import {Routes, Route, BrowserRouter, Link} from "react-router-dom"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      component="main"
      maxWidth="xs"
    >
      <Box textAlign="center" m={4}>
        <Typography variant="h3" component="h1">
          Bem-vindo à Página Inicial!
        </Typography>

        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} fullWidth>
            Iniciar
          </Button>
        </Link>

        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }} fullWidth>
            Registrar
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;

