import { GlobalContext } from './utils/global.context.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react';
import { AppBar, Button, Box, Typography, Toolbar, IconButton, Container } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = ['Home', 'Contact', 'Favs'];
const navigation = ['/home', '/contact', '/favs'];


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const theme = useTheme();
  const { dispatch, state } = useContext(GlobalContext);
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
            <IconButton sx={{ ml: 1 }} onClick={() => state.light === false ? dispatch({type: "light"}) : dispatch({type: "dark"})} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar