import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate, Link } from 'react-router-dom';
import { UserOption } from './UserOption';

const loggedSettings = ['Account', 'Dashboard', 'Logout'];
const notLoggedSettings = ['Sign with Google'];


export const Header = ({ logged, error, data, isLoading, setLogged }) => {
  const logout = async () => {
    try {
      await axios.get('/api/logout');
      setLogged(false);
      navigate('/', { replace: true });
    } catch {
      navigate('/servererror');
    }
  };

  const navigate = useNavigate();

  let settings = logged ? loggedSettings : notLoggedSettings;
  const avatarProps = logged
    ? { alt: 'User photo', src: data.photo }
    : { children: <AccountCircle /> };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserOption = (page) => {
    if (page === 'Add credits') navigate('/payments');
  };

  const handleUserSelect = (setting) => {
    if (setting === 'Sign with Google') window.location.href = '/auth/google';
    else if (setting === 'Logout') {
      logout();
    } else {
      navigate('/surveys');
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <>
            <Link
              to={logged ? '/surveys' : '/'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Box sx={{ display: { xs: 'flex' } }}>
                <EmailIcon
                  sx={{
                    fontSize: 50,
                    display: { xs: 'flex' },
                    alignItems: 'center',
                    mr: 1,
                  }}
                />
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
                    alignItems: 'center',
                  }}
                >
                  Emaily
                </Typography>
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              {logged && <UserOption currentCredits={data.credits} isHeader={true} />  }
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
                  <MenuItem
                    key={setting}
                    onClick={() => handleUserSelect(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
