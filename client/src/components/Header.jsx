import * as React from 'react';
import Styles from '../assets/Styles';
import { useLogoutUsersMutation } from '../store';
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

const loggedSettings = [ 'Dashboard', 'Logout'];
const notLoggedSettings = ['Sign with Google'];

export const Header = ({ logged, error, data, isLoading, setLogged }) => {
  
  const  [logout]  = useLogoutUsersMutation();
  const navigate = useNavigate();

  let settings = logged ? loggedSettings : notLoggedSettings;
  const avatarProps = logged
    ? { alt: 'User photo', src: data.photo }
    : { children: <AccountCircle /> };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserSelect = async (setting) => {
    if (setting === 'Sign with Google') window.location.href = '/auth/google';
    else if (setting === 'Logout') {
      try {
        await logout().unwrap();
        setLogged(false);
        navigate('/', { replace: true });
      } catch {
        navigate('/servererror');
      }
    } else if (setting === 'Dashboard'){
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
                <EmailIcon sx={Styles.emailIcon} />
                <Typography variant="h6" noWrap sx={Styles.emailyBrand}>
                  Emaily
                </Typography>
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              {logged && (
                <UserOption currentCredits={data.credits} isHeader={true} />
              )}
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
