import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useFetchUsersQuery } from '../store';
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Skeleton } from '@mui/material';

const pages = ['Add credits', 'Credits'];
const loggedSettings = ['Account', 'Dashboard', 'Logout'];
const notLoggedSettings = ['Sign with Google'];

export const Header = () => {
  const [logged, setlogged] = React.useState(false);
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchUsersQuery();
  React.useEffect(() => {
    if (data) {
      setlogged(true);
    }
    if (error) navigate('/servererror');
  }, [data, error]);

  let settings = logged ? loggedSettings : notLoggedSettings;
  const avatarProps = logged
    ? { alt: 'User photo', src: data.photo }
    : { children: <AccountCircle /> };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleUserSelect = (setting) => {
    if (setting === 'Sign with Google') window.location.href = '/auth/google';
    if (setting === 'Logout') {
      const logout = async () => {
        try {
          await axios.get('/api/logout');
          navigate('/');
          setlogged(false);
        } catch {
          navigate('/servererror');
        }
      };
      logout();
    }
    setAnchorElUser(null);
    // if (setting === 'Logout') window.location.href = '/api/logout';
  };

  let content;
  if (isLoading) {
    content = (
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Skeleton variant="rectangular" height={45} />
        </Grid>
        <Grid item xs={1}>
          <Skeleton variant="circular" width={45} height={40} />
        </Grid>
      </Grid>
    );
  } else {
    console.log(data);
    content = (
      <>
        <Link  to={logged ? '/surveys' : '/'} style={{ textDecoration: 'none', color: 'inherit' }} >
          <Box sx={{ display: { xs: 'flex' } }}>
            <AdbIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          {logged &&
            pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar {...avatarProps} />
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
            onClose={handleUserSelect}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleUserSelect(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{content}</Toolbar>
      </Container>
    </AppBar>
  );
};