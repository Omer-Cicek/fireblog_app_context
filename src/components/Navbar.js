import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#6FDFDF', height: '65px' }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            underline="none"
            sx={{ flexGrow: 1, color: '#000' }}
          >
            <Link style={{ color: '#000' }} to="/">
              FireBlog App
            </Link>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ marginTop: '48px' }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/register">Register</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/about">About</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
