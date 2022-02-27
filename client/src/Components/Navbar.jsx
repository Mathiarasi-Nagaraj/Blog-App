import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pages = ['Home','About','Contact','Add'];
const settings = ['Profile', 'Edit Profile', 'Logout'];
const theme = createTheme({
    palette: {
      primary: {
        main: "#781D42"
      },
      secondary: {
        
        main: '#4FD3C4',
      },
      navbar:
      {
        main:"#FFF8F3"
      }
      ,
      logo:{
        main:"#781D42"
      }
    },
  });
  const Navbar=()=>{
    
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            fontFamily="Great vibes"
            fontWeight="bold"
            color="logo"
            sx={{  display: { xs: 'none', md: 'flex' } }}
          >
           Awsome Blossoms
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              align="center"
             
              sx={{
                display: { xs: 'block', md: 'none' },
              
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}  color="logo" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily="Great vibes"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Awsome Blossoms
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent: 'center' ,mr:30}}>
            {pages.map((page) => (
              
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'logo', display: 'block' }}
              >
              <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily="Josefin Sans"
             
            >
                {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
  }
export default Navbar;
