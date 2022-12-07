import { useContext } from 'react'
import { GlobalContext } from './utils/global.context.jsx'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = ['Home', 'Contact', 'Favs'];
const navigation = ['/home', '/contact', '/favs'];


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const theme = useTheme();
  const { changeTheme } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <AppBar sx={{
      bgcolor: "background.box",
      color: "text.primary"
    }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography onClick={() => navigate("/home")}
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            <span style={{ color: "#dc3545" }}>D</span>H Odonto
          </Typography>

          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 0,
            width: "300px",
            justifyContent: "space-between",
          }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => navigate(navigation[index])}
                sx={{ my: 2, color: 'text.primary', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <IconButton sx={{ ml: 1 }} onClick={() => changeTheme(prev => !prev)} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar